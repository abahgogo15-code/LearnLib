const crypto=require("crypto");
const MAX=70000,hits=new Map();
const limited=ip=>{const n=Date.now(),a=(hits.get(ip)||[]).filter(t=>n-t<60000);a.push(n);hits.set(ip,a);if(hits.size>5000)hits.clear();return a.length>10};
const same=(a,b)=>{const x=Buffer.from(String(a||"")),y=Buffer.from(String(b));return x.length===y.length&&crypto.timingSafeEqual(x,y)};
module.exports=async(req,res)=>{
  res.setHeader("Cache-Control","no-store");
  const key=process.env.ANTHROPIC_API_KEY;
  if(req.method==="GET")return res.status(200).json({available:!!key});
  if(req.method!=="POST")return res.status(405).json({error:"Metode tidak didukung."});
  if(!key)return res.status(503).json({error:"Layanan AI belum diaktifkan di server."});
  const o=req.headers.origin;
  if(o){try{if(new URL(o).host!==req.headers.host)return res.status(403).json({error:"Permintaan ditolak."})}catch(e){return res.status(403).json({error:"Permintaan ditolak."})}}
  const code=process.env.APP_ACCESS_CODE;
  if(code&&!same(req.headers["x-access-code"],code))return res.status(401).json({error:"Kode akses salah atau belum diisi."});
  const ip=String(req.headers["x-forwarded-for"]||"").split(",")[0].trim()||"x";
  if(limited(ip))return res.status(429).json({error:"Terlalu banyak permintaan. Coba lagi sebentar lagi."});
  let b=req.body;if(typeof b==="string"){try{b=JSON.parse(b)}catch(e){b=null}}
  if(!b||typeof b.prompt!=="string"||!b.prompt.trim()||b.prompt.length>MAX)return res.status(400).json({error:"Permintaan tidak valid atau terlalu besar."});
  const ac=new AbortController(),tm=setTimeout(()=>ac.abort(),50000);
  try{
    const r=await fetch("https://api.anthropic.com/v1/messages",{method:"POST",signal:ac.signal,headers:{"x-api-key":key,"anthropic-version":"2023-06-01","content-type":"application/json"},body:JSON.stringify({model:process.env.ANTHROPIC_MODEL||"claude-haiku-4-5-20251001",max_tokens:2500,messages:[{role:"user",content:b.prompt}]})});
    if(!r.ok)return res.status(r.status===429?429:502).json({error:r.status===429?"Layanan sedang sibuk. Coba lagi sebentar lagi.":"Gagal membuat rangkuman. Silakan coba lagi."});
    const j=await r.json();
    return res.status(200).json({text:(j.content||[]).filter(x=>x.type==="text").map(x=>x.text).join("")})}
  catch(e){return res.status(e.name==="AbortError"?504:502).json({error:"Gagal membuat rangkuman. Silakan coba lagi."})}
  finally{clearTimeout(tm)}
};
