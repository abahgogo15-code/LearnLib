(function(){
const M=window.PERPUSTAKAAN||[],Q=window.SOAL||{},libEl=$("libBody");
const sl=s=>s.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"");
const ALL=[],BY={};
M.forEach((c,ci)=>c.t.forEach(x=>{const o={id:sl(c.n)+"/"+sl(x.j),mi:ci,m:c.n,j:x.j,r:x.r,h:x.h};o.tx=x.h.replace(/<[^>]+>/g," ").replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&").replace(/\s+/g," ");o.lc=(o.j+" "+o.r+" "+o.tx).toLowerCase();ALL.push(o);BY[o.id]=o}));
S.ll=Object.assign({fav:[],done:[],hist:[],quiz:[],fs:1},S.ll&&typeof S.ll==="object"?S.ll:{});
["fav","done","hist","quiz"].forEach(k=>{if(!Array.isArray(S.ll[k]))S.ll[k]=[]});
if(typeof S.ll.fs!=="number")S.ll.fs=1;
const L=S.ll,qm=$("llm"),qf=$("llf"),qq=$("llq");
let st={m:"",f:"all",q:"",id:null},qz=null;
const re=s=>s.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");
const hl=(t,q)=>{t=esc(t);return q?t.replace(new RegExp(re(esc(q)),"gi"),m=>"<mark>"+m+"</mark>"):t};
const snip=(x,q)=>{const i=x.tx.toLowerCase().indexOf(q);return i<0?"":'<br><span class="mu">…'+hl(x.tx.slice(Math.max(0,i-50),i+q.length+70),q)+"…</span>"};
qm.innerHTML='<option value="">Semua pelajaran</option>'+M.map((c,i)=>`<option value="${i}">${esc(c.n)}</option>`).join("");
function items(){
  const q=st.q.trim().toLowerCase();
  let a=ALL.filter(x=>(st.m===""||x.mi==+st.m)&&(!q||x.lc.includes(q)));
  if(st.f==="fav")a=a.filter(x=>L.fav.includes(x.id));
  else if(st.f==="done")a=a.filter(x=>L.done.includes(x.id));
  else if(st.f==="todo")a=a.filter(x=>!L.done.includes(x.id));
  if(st.f==="hist"){const s=new Set(a);return L.hist.map(i=>BY[i]).filter(x=>x&&s.has(x))}
  return a.sort((p,r)=>p.j.localeCompare(r.j,"id"))}
function render(){
  if(st.id)return detail();
  const q=st.q.trim().toLowerCase();
  if(!q&&st.m===""&&st.f==="all"){
    libEl.innerHTML='<div class="grid">'+M.map((c,i)=>{const n=ALL.filter(x=>x.mi===i),d=n.filter(x=>L.done.includes(x.id)).length;return`<button class="q" data-mp="${i}" style="background:var(${c.w})"><span class="ic"><i class="fa-solid ${c.i}"></i></span><b>${esc(c.n)}</b><span>${d} dari ${n.length} materi selesai</span></button>`}).join("")+"</div>";return}
  const a=items();
  libEl.innerHTML=a.length?'<div class="card">'+a.map(x=>`<button class="opt" data-id="${esc(x.id)}"><b>${hl(x.j,q)}</b> <span class="mu">· ${esc(x.m)}${L.done.includes(x.id)?" · ✓ selesai":""}${L.fav.includes(x.id)?" · ★":""}</span><br><span class="mu">${hl(x.r,q)}</span>${q?snip(x,q):""}</button>`).join("")+"</div>":'<div class="card"><b>Tidak ada materi yang cocok.</b><p class="mu">Coba kata kunci lain, ubah filter pelajaran, atau pilih "Semua status".</p></div>'}
function detail(){
  const x=BY[st.id],sib=ALL.filter(y=>y.mi===x.mi),i=sib.indexOf(x),pv=sib[i-1],nx=sib[i+1],d=L.done.includes(x.id),f=L.fav.includes(x.id),n=(Q[x.id]||[]).length;
  libEl.innerHTML=`<div class="card"><div class="row" style="margin-top:0"><button class="b sm" data-ll="back">← ${esc(x.m)}</button><span class="mu">Beranda › ${esc(x.m)} › ${esc(x.j)}</span></div><h2 class="lh">${esc(x.j)}</h2><p class="mu">${esc(x.m)} · materi ${i+1} dari ${sib.length}</p><div class="row" style="margin-top:0"><button class="b sm" data-ll="fp">A−</button><button class="b sm" data-ll="fm">A+</button><button class="b sm" data-ll="fav">${f?"★ Favorit":"☆ Favorit"}</button><button class="b sm" data-ll="done">${d?"✓ Selesai":"Tandai selesai"}</button><button class="b sm" data-ll="print">Cetak</button></div><div class="mu" id="libToc"></div><div class="lib" id="libRead" style="font-size:${L.fs}em">${x.h}</div><div class="row"><button class="b p" data-ll="note">Simpan ke Catatan</button><button class="b" data-ll="sum">Rangkum / buat kuis</button>${n?`<button class="b p" data-ll="quiz">Latihan soal (${n})</button>`:""}</div><div class="mu" id="libSt"></div><div class="row">${pv?`<button class="b sm" data-id="${esc(pv.id)}">← ${esc(pv.j)}</button>`:""}${nx?`<button class="b sm" data-id="${esc(nx.id)}">${esc(nx.j)} →</button>`:""}</div></div><div id="libQz"></div>`;
  const t=[];$("libRead").querySelectorAll("h3").forEach((e,k)=>{e.id="s"+k;t.push(`<button class="b sm" data-sc="s${k}">${esc(e.textContent)}</button>`)});
  $("libToc").innerHTML=t.length?'<b>Daftar isi</b><div class="row" style="margin-top:8px">'+t.join("")+"</div>":""}
function open(id){st.id=id;qz=null;L.hist=[id].concat(L.hist.filter(i=>i!==id)).slice(0,30);save();render();scrollTo(0,0)}
function startQ(list){
  qz={l:list.slice().sort(()=>Math.random()-.5),s:0,a:0,w:[]};
  $("libQz").innerHTML='<div class="card"><h2>Latihan soal <span class="mu" id="qs"></span></h2>'+qz.l.map((q,k)=>`<div data-k="${k}" style="margin:24px 0"><b>${k+1}. ${esc(q.q)}</b>${q.o.map((o,j)=>`<button class="opt" data-o="${j}">${esc(o)}</button>`).join("")}<div class="mu ex"></div></div>`).join("")+'<div id="qend"></div></div>';
  $("libQz").scrollIntoView({behavior:"smooth"})}
libEl.onclick=e=>{
  const o=e.target.closest("[data-o]");
  if(o&&qz){
    const d=o.closest("[data-k]");if(d.dataset.x)return;d.dataset.x="1";
    const q=qz.l[+d.dataset.k],j=+o.dataset.o;qz.a++;
    if(j===q.b){qz.s++;boom(o)}else{o.classList.add("bad");qz.w.push(q)}
    d.querySelectorAll(".opt")[q.b].classList.add("good");d.querySelector(".ex").textContent=q.e;
    $("qs").textContent=`— skor ${qz.s}/${qz.a} dari ${qz.l.length}`;
    if(qz.a===qz.l.length){L.quiz.push({id:st.id,s:qz.s,n:qz.l.length,t:Date.now()});L.quiz=L.quiz.slice(-200);save();
      $("qend").innerHTML=`<p><b>Selesai: ${qz.s} dari ${qz.l.length} benar.</b></p>`+(qz.w.length?'<button class="b p" data-ll="redo">Ulangi yang salah</button>':"")}
    return}
  const b=e.target.closest("[data-mp],[data-id],[data-ll],[data-sc]");if(!b)return;
  if(b.dataset.mp!==undefined){st.m=b.dataset.mp;qm.value=st.m;render();scrollTo(0,0);return}
  if(b.dataset.id){open(b.dataset.id);return}
  if(b.dataset.sc){$(b.dataset.sc).scrollIntoView({behavior:"smooth"});return}
  const a=b.dataset.ll,x=BY[st.id];
  if(a==="back"){st.id=null;qz=null;render();scrollTo(0,0)}
  else if(a==="fav"||a==="done"){const k=a==="fav"?L.fav:L.done,i=k.indexOf(x.id);i<0?k.push(x.id):k.splice(i,1);save();
    b.textContent=a==="fav"?(i<0?"★ Favorit":"☆ Favorit"):(i<0?"✓ Selesai":"Tandai selesai")}
  else if(a==="fp"||a==="fm"){L.fs=Math.min(1.6,Math.max(.8,+(L.fs+(a==="fm"?.1:-.1)).toFixed(2)));$("libRead").style.fontSize=L.fs+"em";save()}
  else if(a==="note"){S.notes.unshift({t:x.j,b:$("libRead").innerText.trim()});save();renderNotes();$("libSt").textContent="Tersimpan di Catatan."}
  else if(a==="sum"){$("src").value=x.j+"\n\n"+$("libRead").innerText.trim();window.curName=x.j;$("info").textContent=x.j+" — "+$("src").value.split(/\s+/).length+" kata";go("sum")}
  else if(a==="print")window.print();
  else if(a==="quiz")startQ(Q[x.id]);
  else if(a==="redo")startQ(qz.w)};
let tm;qq.oninput=()=>{clearTimeout(tm);tm=setTimeout(()=>{st.q=qq.value;st.id=null;render()},150)};
qm.onchange=()=>{st.m=qm.value;st.id=null;render()};
qf.onchange=()=>{st.f=qf.value;st.id=null;render()};
const p0=prog;
prog=function(){p0();const n=ALL.length,d=L.done.filter(id=>BY[id]).length,h=BY[L.hist[0]];
  $("prog").insertAdjacentHTML("beforeend",`<div><b>Materi perpustakaan selesai</b> <span class="mu">${d}/${n}</span></div><div class="bar"><i data-w="${n?d/n*100:0}" style="width:0"></i></div>`+(h?`<button class="b sm" data-ll="cont">Lanjutkan: ${esc(h.j)}</button>`:""))};
$("prog").addEventListener("click",e=>{if(e.target.closest("[data-ll=cont]")&&BY[L.hist[0]]){go("lib");open(L.hist[0])}});
$("bkE").onclick=()=>{saveBlob(new Blob([JSON.stringify({app:"learnlib",v:1,data:S})],{type:"application/json"}),"learnlib-cadangan-"+day()+".json");$("bkSt").textContent="Cadangan diunduh."};
$("bkI").onclick=()=>$("bkF").click();
$("bkF").onchange=async e=>{
  const f=e.target.files[0];e.target.value="";if(!f)return;
  try{const j=JSON.parse(await f.text()),d=j&&j.data;
    if(!d||typeof d!=="object"||!Array.isArray(d.tasks)||!Array.isArray(d.notes))throw new Error("format");
    if(!confirm("Cadangan ini akan menggantikan catatan, tugas, dan progres di browser ini. Lanjutkan?"))return;
    Object.assign(S,d);save();location.reload()}
  catch(err){$("bkSt").innerHTML='<span class="err">File cadangan tidak valid.</span>'}};
$("bkDel").onclick=()=>{if(prompt("Ini menghapus SEMUA catatan, tugas, progres, favorit, dan API key di browser ini. Ketik HAPUS untuk melanjutkan. Disarankan ekspor cadangan dulu.")!=="HAPUS")return;["rn","rn_rusak","rn_key","rn_model"].forEach(k=>LS(k,null));location.reload()};
render();prog();
})();
