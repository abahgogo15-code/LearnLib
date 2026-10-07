const K=s=>"<pre><code>"+s.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")+"</code></pre>";

window.PERPUSTAKAAN=[
{n:"Matematika",i:"fa-square-root-variable",w:"--blue",t:[
{j:"Persamaan Kuadrat",r:"Rumus ABC, diskriminan, jumlah dan hasil kali akar",h:`
<p>Persamaan kuadrat berbentuk <code>ax² + bx + c = 0</code> dengan a ≠ 0.</p>
<h3>Cara mencari akar</h3>
<ul>
<li><b>Pemfaktoran:</b> ubah menjadi (x − p)(x − q) = 0, maka x = p atau x = q.</li>
<li><b>Rumus ABC:</b> <code>x = (−b ± √(b² − 4ac)) / 2a</code></li>
</ul>
<h3>Diskriminan</h3>
<p><code>D = b² − 4ac</code></p>
<ul>
<li>D &gt; 0: dua akar real yang berbeda.</li>
<li>D = 0: satu akar real (akar kembar).</li>
<li>D &lt; 0: tidak ada akar real.</li>
</ul>
<h3>Jumlah dan hasil kali akar</h3>
<p><code>x₁ + x₂ = −b/a</code> dan <code>x₁ · x₂ = c/a</code></p>
<h3>Contoh</h3>
<p>x² − 5x + 6 = 0 difaktorkan menjadi (x − 2)(x − 3) = 0, sehingga x = 2 atau x = 3. Pengecekan: D = 25 − 24 = 1 (positif, dua akar berbeda), jumlah akar = 5 = −(−5)/1, hasil kali akar = 6 = 6/1.</p>`},

{j:"Trigonometri Dasar",r:"Sin, cos, tan, identitas, dan sudut istimewa",h:`
<p>Pada segitiga siku-siku dengan sudut θ:</p>
<ul>
<li><code>sin θ = sisi depan / sisi miring</code></li>
<li><code>cos θ = sisi samping / sisi miring</code></li>
<li><code>tan θ = sisi depan / sisi samping</code></li>
</ul>
<h3>Identitas penting</h3>
<p><code>sin²θ + cos²θ = 1</code> dan <code>tan θ = sin θ / cos θ</code></p>
<h3>Nilai sudut istimewa</h3>
<div class="sc"><table>
<thead><tr><th>Sudut</th><th>sin</th><th>cos</th><th>tan</th></tr></thead>
<tbody>
<tr><td>0°</td><td>0</td><td>1</td><td>0</td></tr>
<tr><td>30°</td><td>½</td><td>½√3</td><td>⅓√3</td></tr>
<tr><td>45°</td><td>½√2</td><td>½√2</td><td>1</td></tr>
<tr><td>60°</td><td>½√3</td><td>½</td><td>√3</td></tr>
<tr><td>90°</td><td>1</td><td>0</td><td>tidak terdefinisi</td></tr>
</tbody></table></div>
<h3>Radian</h3>
<p>180° = π radian, sehingga 1 radian ≈ 57,3°.</p>
<h3>Aturan pada segitiga sembarang</h3>
<ul>
<li>Aturan sinus: <code>a / sin A = b / sin B = c / sin C</code></li>
<li>Aturan kosinus: <code>c² = a² + b² − 2ab cos C</code></li>
</ul>`},

{j:"Turunan (Diferensial)",r:"Laju perubahan, aturan turunan, titik stasioner",h:`
<p>Turunan fungsi f(x) menyatakan laju perubahan sesaat atau kemiringan garis singgung kurva di suatu titik.</p>
<p><code>f′(x) = lim (h→0) [f(x + h) − f(x)] / h</code></p>
<h3>Aturan dasar</h3>
<ul>
<li>Konstanta: d/dx (c) = 0</li>
<li>Pangkat: d/dx (xⁿ) = n · xⁿ⁻¹</li>
<li>Penjumlahan: (u + v)′ = u′ + v′</li>
<li>Perkalian: (u · v)′ = u′v + uv′</li>
<li>Pembagian: (u / v)′ = (u′v − uv′) / v²</li>
<li>Rantai: d/dx f(g(x)) = f′(g(x)) · g′(x)</li>
</ul>
<h3>Turunan fungsi umum</h3>
<ul>
<li>(sin x)′ = cos x dan (cos x)′ = −sin x</li>
<li>(eˣ)′ = eˣ dan (ln x)′ = 1/x</li>
</ul>
<h3>Contoh</h3>
<p>f(x) = 3x⁴ − 2x² + 5 maka f′(x) = 12x³ − 4x.</p>
<p>y = (2x + 1)³ maka y′ = 3(2x + 1)² · 2 = 6(2x + 1)².</p>
<h3>Titik stasioner</h3>
<p>Selesaikan f′(x) = 0. Titik itu bisa berupa maksimum, minimum, atau titik belok. Uji dengan turunan kedua: f″ &gt; 0 berarti minimum, f″ &lt; 0 berarti maksimum.</p>`},

{j:"Integral",r:"Antiturunan, integral tentu, dan luas daerah",h:`
<p>Integral adalah kebalikan dari turunan (antiturunan) dan juga dipakai untuk menghitung luas di bawah kurva.</p>
<h3>Integral tak tentu</h3>
<ul>
<li><code>∫ xⁿ dx = xⁿ⁺¹ / (n + 1) + C</code>, untuk n ≠ −1</li>
<li><code>∫ 1/x dx = ln|x| + C</code></li>
<li><code>∫ eˣ dx = eˣ + C</code></li>
<li><code>∫ cos x dx = sin x + C</code> dan <code>∫ sin x dx = −cos x + C</code></li>
</ul>
<h3>Integral tentu</h3>
<p><code>∫ₐᵇ f(x) dx = F(b) − F(a)</code>, dengan F adalah antiturunan dari f. Jika f(x) ≥ 0 pada [a, b], hasilnya adalah luas daerah di bawah kurva.</p>
<h3>Contoh</h3>
<p>∫ (3x² + 2) dx = x³ + 2x + C.</p>
<p>∫₁³ 2x dx = [x²] dari 1 sampai 3 = 9 − 1 = 8.</p>
<h3>Substitusi</h3>
<p>Untuk ∫ 2x(x² + 1)³ dx, misalkan u = x² + 1 sehingga du = 2x dx. Integralnya menjadi ∫ u³ du = u⁴/4 + C = (x² + 1)⁴/4 + C.</p>`},

{j:"Statistika Dasar",r:"Mean, median, modus, jangkauan, simpangan baku",h:`
<h3>Ukuran pemusatan</h3>
<ul>
<li><b>Mean:</b> jumlah semua data dibagi banyak data.</li>
<li><b>Median:</b> nilai tengah setelah data diurutkan.</li>
<li><b>Modus:</b> nilai yang paling sering muncul.</li>
</ul>
<h3>Ukuran penyebaran</h3>
<ul>
<li><b>Jangkauan:</b> nilai terbesar − nilai terkecil.</li>
<li><b>Kuartil:</b> Q1, Q2 (median), Q3 membagi data menjadi empat bagian. Jangkauan antarkuartil = Q3 − Q1.</li>
<li><b>Varians populasi:</b> <code>σ² = Σ(x − μ)² / N</code></li>
<li><b>Varians sampel:</b> <code>s² = Σ(x − x̄)² / (n − 1)</code></li>
<li><b>Simpangan baku</b> adalah akar kuadrat dari varians.</li>
</ul>
<h3>Contoh</h3>
<p>Data: 2, 4, 4, 6, 9.</p>
<ul>
<li>Mean = 25/5 = 5, median = 4, modus = 4, jangkauan = 7.</li>
<li>Selisih terhadap mean: −3, −1, −1, 1, 4, kuadratnya berjumlah 28.</li>
<li>Varians populasi = 28/5 = 5,6 sehingga simpangan baku ≈ 2,37.</li>
<li>Varians sampel = 28/4 = 7 sehingga simpangan baku ≈ 2,65.</li>
</ul>`},

{j:"Peluang",r:"Peluang kejadian, permutasi, kombinasi, peluang bersyarat",h:`
<p>Peluang kejadian A: <code>P(A) = n(A) / n(S)</code>, dengan n(S) banyaknya semua hasil yang mungkin. Nilainya selalu antara 0 dan 1.</p>
<h3>Aturan dasar</h3>
<ul>
<li>Komplemen: P(A′) = 1 − P(A)</li>
<li>Gabungan: P(A ∪ B) = P(A) + P(B) − P(A ∩ B)</li>
<li>Saling lepas: P(A ∩ B) = 0</li>
<li>Saling bebas: P(A ∩ B) = P(A) · P(B)</li>
<li>Bersyarat: P(A | B) = P(A ∩ B) / P(B)</li>
</ul>
<h3>Permutasi dan kombinasi</h3>
<ul>
<li>Permutasi (urutan penting): <code>nPr = n! / (n − r)!</code></li>
<li>Kombinasi (urutan tidak penting): <code>nCr = n! / (r! (n − r)!)</code></li>
</ul>
<h3>Contoh</h3>
<p>Dua dadu dilempar, peluang jumlah mata 7 adalah 6/36 = 1/6 (pasangan 1-6, 2-5, 3-4, 4-3, 5-2, 6-1).</p>
<p>Memilih 3 orang dari 5 orang: C(5, 3) = 10 cara.</p>`}
]},

{n:"Fisika",i:"fa-atom",w:"--pink",t:[
{j:"Hukum Newton",r:"Inersia, F = m·a, aksi-reaksi, berat, dan gesekan",h:`
<h3>Hukum I (inersia)</h3>
<p>Benda tetap diam atau bergerak lurus beraturan jika resultan gaya yang bekerja padanya nol (ΣF = 0).</p>
<h3>Hukum II</h3>
<p><code>ΣF = m · a</code>. Satuan gaya adalah newton (1 N = 1 kg·m/s²). Percepatan searah dengan resultan gaya dan berbanding terbalik dengan massa.</p>
<h3>Hukum III (aksi-reaksi)</h3>
<p>Jika benda A memberi gaya pada benda B, maka B memberi gaya sama besar dan berlawanan arah pada A. Kedua gaya bekerja pada benda yang berbeda, sehingga tidak saling meniadakan.</p>
<h3>Gaya yang sering muncul</h3>
<ul>
<li>Berat: <code>w = m · g</code>, dengan g ≈ 9,8 m/s² (soal sering memakai 10).</li>
<li>Gaya normal N: tegak lurus bidang sentuh.</li>
<li>Gaya gesek: <code>f = μ · N</code>.</li>
</ul>
<h3>Contoh</h3>
<p>Balok 5 kg didorong gaya 20 N pada lantai licin: a = F/m = 20/5 = 4 m/s².</p>`},

{j:"GLB dan GLBB",r:"Gerak lurus beraturan, berubah beraturan, jatuh bebas",h:`
<h3>Gerak lurus beraturan (GLB)</h3>
<p>Kecepatan konstan: <code>s = v · t</code></p>
<h3>Gerak lurus berubah beraturan (GLBB)</h3>
<p>Percepatan konstan:</p>
<ul>
<li><code>v = v₀ + a · t</code></li>
<li><code>s = v₀ · t + ½ · a · t²</code></li>
<li><code>v² = v₀² + 2 · a · s</code></li>
</ul>
<h3>Jatuh bebas</h3>
<p>Kasus GLBB dengan v₀ = 0 dan a = g: <code>h = ½ g t²</code> dan <code>v = g t</code>.</p>
<h3>Gerak parabola</h3>
<p>Gerak horizontal adalah GLB, sedangkan gerak vertikal adalah GLBB dengan percepatan g. Keduanya dianalisis terpisah.</p>
<h3>Contoh</h3>
<p>Mobil mulai dari diam dengan a = 2 m/s² selama 5 s: v = 2 · 5 = 10 m/s dan s = ½ · 2 · 5² = 25 m.</p>`},

{j:"Usaha dan Energi",r:"Usaha, energi kinetik, energi potensial, daya",h:`
<ul>
<li><b>Usaha:</b> <code>W = F · s · cos θ</code> (satuan joule), dengan θ sudut antara gaya dan arah perpindahan.</li>
<li><b>Energi kinetik:</b> <code>Ek = ½ m v²</code></li>
<li><b>Energi potensial gravitasi:</b> <code>Ep = m g h</code></li>
<li><b>Teorema usaha-energi:</b> usaha total = perubahan energi kinetik (W = ΔEk).</li>
<li><b>Energi mekanik:</b> Em = Ek + Ep, bernilai tetap jika hanya gaya konservatif (seperti gravitasi) yang bekerja.</li>
<li><b>Daya:</b> <code>P = W / t</code> (satuan watt).</li>
</ul>
<h3>Contoh</h3>
<p>Bola 2 kg dijatuhkan dari ketinggian 5 m (g = 10 m/s²). Ep awal = 2 · 10 · 5 = 100 J. Tepat sebelum menyentuh tanah, seluruhnya menjadi Ek = 100 J, sehingga v = √(2gh) = 10 m/s.</p>`},

{j:"Listrik Dasar",r:"Hukum Ohm, rangkaian seri dan paralel, daya listrik",h:`
<h3>Besaran dasar</h3>
<ul>
<li>Kuat arus <code>I = Q / t</code> (ampere)</li>
<li>Tegangan V (volt)</li>
<li>Hambatan R (ohm)</li>
</ul>
<h3>Hukum Ohm</h3>
<p><code>V = I · R</code></p>
<h3>Daya dan energi</h3>
<p><code>P = V · I = I² · R = V² / R</code> dan energi <code>W = P · t</code>. Tagihan listrik memakai satuan kWh.</p>
<h3>Rangkaian hambatan</h3>
<ul>
<li><b>Seri:</b> <code>Rs = R₁ + R₂ + …</code>. Arus sama di semua komponen, tegangan terbagi.</li>
<li><b>Paralel:</b> <code>1/Rp = 1/R₁ + 1/R₂ + …</code>. Tegangan sama, arus terbagi.</li>
</ul>
<h3>Contoh</h3>
<p>Baterai 6 V dengan hambatan 12 Ω: I = 6/12 = 0,5 A dan P = 6 · 0,5 = 3 W.</p>
<p>Hambatan 6 Ω dan 3 Ω dipasang paralel: Rp = (6 · 3)/(6 + 3) = 2 Ω.</p>`},

{j:"Gelombang",r:"Frekuensi, periode, panjang gelombang, cepat rambat",h:`
<h3>Besaran gelombang</h3>
<ul>
<li>Periode T (detik) dan frekuensi f (hertz): <code>f = 1 / T</code></li>
<li>Panjang gelombang λ (meter)</li>
<li>Cepat rambat: <code>v = λ · f = λ / T</code></li>
</ul>
<h3>Jenis gelombang</h3>
<ul>
<li><b>Transversal:</b> getaran tegak lurus arah rambat (gelombang pada tali, cahaya).</li>
<li><b>Longitudinal:</b> getaran searah rambat (bunyi, gelombang pegas).</li>
<li><b>Mekanik</b> membutuhkan medium (bunyi), sedangkan <b>elektromagnetik</b> tidak (cahaya, gelombang radio).</li>
</ul>
<h3>Nilai yang sering dipakai</h3>
<ul>
<li>Cahaya di ruang hampa: c ≈ 3 × 10⁸ m/s.</li>
<li>Bunyi di udara: sekitar 340 m/s.</li>
</ul>
<h3>Sifat gelombang</h3>
<p>Pemantulan, pembiasan, interferensi, difraksi, dan polarisasi (khusus gelombang transversal).</p>
<h3>Contoh</h3>
<p>Gelombang dengan f = 50 Hz dan λ = 2 m memiliki cepat rambat v = 2 · 50 = 100 m/s.</p>`}
]},

{n:"Kimia",i:"fa-flask",w:"--lime",t:[
{j:"Struktur Atom dan Tabel Periodik",r:"Proton, neutron, elektron, konfigurasi, golongan dan periode",h:`
<h3>Partikel penyusun atom</h3>
<ul>
<li><b>Proton</b> (bermuatan positif) dan <b>neutron</b> (netral) berada di inti.</li>
<li><b>Elektron</b> (bermuatan negatif) bergerak pada kulit di sekitar inti.</li>
<li>Nomor atom (Z) = jumlah proton. Nomor massa (A) = proton + neutron.</li>
<li>Atom netral: jumlah elektron = jumlah proton.</li>
<li><b>Isotop:</b> atom unsur sama (Z sama) dengan nomor massa berbeda.</li>
</ul>
<h3>Konfigurasi elektron</h3>
<p>Urutan pengisian subkulit: 1s, 2s, 2p, 3s, 3p, 4s, 3d, 4p, … Kapasitas: s = 2, p = 6, d = 10 elektron.</p>
<h3>Tabel periodik</h3>
<ul>
<li>Golongan (kolom): elektron valensi sama sehingga sifat kimia mirip.</li>
<li>Periode (baris): jumlah kulit atom.</li>
<li>Dalam satu periode dari kiri ke kanan, jari-jari atom mengecil dan keelektronegatifan naik.</li>
<li>Dalam satu golongan dari atas ke bawah, jari-jari atom membesar dan keelektronegatifan turun.</li>
</ul>
<h3>Contoh</h3>
<p>Na (Z = 11): 1s² 2s² 2p⁶ 3s¹, berada di golongan 1 dan periode 3.</p>
<p>Cl (Z = 17): 1s² 2s² 2p⁶ 3s² 3p⁵, berada di golongan 17 dan periode 3.</p>`},

{j:"Ikatan Kimia",r:"Ionik, kovalen, logam, polaritas, dan gaya antarmolekul",h:`
<h3>Jenis ikatan</h3>
<ul>
<li><b>Ionik:</b> serah terima elektron, umumnya antara logam dan nonlogam (contoh NaCl). Titik leleh tinggi; leburan dan larutannya menghantarkan listrik.</li>
<li><b>Kovalen:</b> pemakaian bersama pasangan elektron antarnonlogam (contoh H₂O, CO₂, CH₄).</li>
<li><b>Logam:</b> atom logam berbagi lautan elektron bebas, sehingga logam menghantarkan listrik dan dapat ditempa.</li>
</ul>
<h3>Aturan oktet</h3>
<p>Banyak atom cenderung memiliki 8 elektron pada kulit terluar (hidrogen cukup 2) agar stabil.</p>
<h3>Kepolaran</h3>
<p>Ikatan kovalen polar terjadi jika kedua atom berbeda keelektronegatifannya. Molekul bersifat polar jika bentuknya membuat muatan tidak tersebar simetris (H₂O polar, CO₂ nonpolar).</p>
<h3>Gaya antarmolekul</h3>
<ul>
<li>Gaya dispersi London (semua molekul, terlemah)</li>
<li>Gaya dipol-dipol (molekul polar)</li>
<li>Ikatan hidrogen (H terikat pada N, O, atau F), penyebab titik didih air relatif tinggi</li>
</ul>`},

{j:"Mol dan Stoikiometri",r:"Konsep mol, Mr, volume gas, molaritas, perbandingan reaksi",h:`
<ul>
<li><b>1 mol</b> = 6,022 × 10²³ partikel (bilangan Avogadro).</li>
<li><b>Mr</b> = jumlah Ar semua atom dalam satu molekul (satuan g/mol).</li>
<li><code>n = massa / Mr</code></li>
<li>Volume gas pada STP (0 °C, 1 atm): 22,4 L/mol.</li>
<li>Molaritas: <code>M = n / V</code> (mol per liter larutan).</li>
</ul>
<h3>Stoikiometri reaksi</h3>
<p>Pada persamaan reaksi yang sudah setara, perbandingan koefisien sama dengan perbandingan mol. Pereaksi pembatas adalah zat yang habis lebih dulu dan menentukan banyak produk.</p>
<h3>Contoh</h3>
<p>36 g air (Mr = 18) = 36/18 = 2 mol.</p>
<p>Reaksi 2H₂ + O₂ → 2H₂O: 4 mol H₂ membutuhkan 2 mol O₂ dan menghasilkan 4 mol H₂O.</p>`},

{j:"Asam, Basa, dan pH",r:"Teori asam basa, perhitungan pH dan pOH",h:`
<h3>Teori asam dan basa</h3>
<ul>
<li><b>Arrhenius:</b> asam melepas H⁺ dalam air, basa melepas OH⁻.</li>
<li><b>Brønsted-Lowry:</b> asam adalah donor proton, basa adalah akseptor proton.</li>
</ul>
<h3>Skala pH</h3>
<p><code>pH = −log [H⁺]</code>, <code>pOH = −log [OH⁻]</code>, dan pada 25 °C <code>pH + pOH = 14</code>.</p>
<ul>
<li>pH &lt; 7: asam</li>
<li>pH = 7: netral</li>
<li>pH &gt; 7: basa</li>
</ul>
<h3>Kekuatan asam dan basa</h3>
<ul>
<li>Asam kuat (HCl, HNO₃, H₂SO₄) terionisasi sempurna: [H⁺] = Ma × jumlah H⁺ per molekul.</li>
<li>Basa kuat (NaOH, KOH): [OH⁻] = Mb × jumlah OH⁻ per satuan rumus.</li>
<li>Asam lemah: <code>[H⁺] = √(Ka · Ma)</code></li>
</ul>
<h3>Titrasi</h3>
<p>Pada titik ekuivalen, mol H⁺ = mol OH⁻.</p>
<h3>Contoh</h3>
<p>HCl 0,01 M: [H⁺] = 10⁻² sehingga pH = 2.</p>
<p>NaOH 0,001 M: pOH = 3 sehingga pH = 11.</p>`}
]},

{n:"Biologi",i:"fa-dna",w:"--org",t:[
{j:"Sel",r:"Prokariot dan eukariot, organel, transpor, pembelahan sel",h:`
<p>Sel adalah unit struktural dan fungsional terkecil makhluk hidup.</p>
<h3>Tipe sel</h3>
<ul>
<li><b>Prokariot:</b> tidak memiliki inti sel sejati (bakteri dan arkea).</li>
<li><b>Eukariot:</b> memiliki inti sel dan organel bermembran (hewan, tumbuhan, jamur, protista).</li>
</ul>
<h3>Organel utama</h3>
<ul>
<li>Inti sel: menyimpan DNA dan mengendalikan aktivitas sel.</li>
<li>Mitokondria: tempat respirasi seluler yang menghasilkan ATP.</li>
<li>Ribosom: sintesis protein.</li>
<li>Retikulum endoplasma: pengangkutan dan sintesis (kasar berribosom, halus tanpa ribosom).</li>
<li>Badan Golgi: memodifikasi dan mengemas protein.</li>
<li>Lisosom: pencernaan intrasel (pada sel hewan).</li>
<li>Khusus tumbuhan: dinding sel, kloroplas, dan vakuola sentral besar.</li>
</ul>
<h3>Transpor melalui membran</h3>
<ul>
<li>Difusi dan osmosis: pasif, tanpa energi.</li>
<li>Transpor aktif: melawan gradien konsentrasi, membutuhkan ATP.</li>
</ul>
<h3>Pembelahan sel</h3>
<ul>
<li>Mitosis: sel tubuh, menghasilkan 2 sel anak identik (diploid).</li>
<li>Meiosis: pembentukan gamet, menghasilkan 4 sel haploid.</li>
</ul>`},

{j:"Fotosintesis dan Respirasi Seluler",r:"Reaksi terang, siklus Calvin, glikolisis, siklus Krebs",h:`
<h3>Fotosintesis</h3>
<p><code>6CO₂ + 6H₂O + cahaya → C₆H₁₂O₆ + 6O₂</code></p>
<p>Berlangsung di kloroplas dalam dua tahap:</p>
<ul>
<li><b>Reaksi terang</b> (membran tilakoid): energi cahaya diubah menjadi ATP dan NADPH, air dipecah dan melepaskan O₂.</li>
<li><b>Siklus Calvin</b> (stroma): CO₂ difiksasi menjadi gula dengan memakai ATP dan NADPH.</li>
</ul>
<h3>Respirasi seluler aerob</h3>
<p><code>C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + energi (ATP)</code></p>
<ul>
<li>Glikolisis: di sitoplasma, glukosa menjadi piruvat.</li>
<li>Siklus Krebs: di matriks mitokondria.</li>
<li>Transpor elektron: di membran dalam mitokondria, tahap penghasil ATP terbanyak.</li>
</ul>
<p>Satu glukosa menghasilkan sekitar 30 sampai 32 ATP (buku lama menyebut 36 sampai 38).</p>
<h3>Tanpa oksigen</h3>
<p>Fermentasi hanya mengandalkan glikolisis, menghasilkan 2 ATP per glukosa, dengan hasil akhir etanol dan CO₂ (ragi) atau asam laktat (otot).</p>`},

{j:"Genetika Dasar (Mendel)",r:"Alel, genotipe, fenotipe, persilangan monohibrid dan dihibrid",h:`
<h3>Istilah penting</h3>
<ul>
<li><b>Gen</b> adalah penentu sifat dan <b>alel</b> adalah bentuk alternatif gen.</li>
<li><b>Genotipe</b> adalah susunan alel (misalnya Aa) dan <b>fenotipe</b> adalah sifat yang tampak.</li>
<li>Alel dominan (huruf besar) tampak pada fenotipe jika ada, alel resesif (huruf kecil) hanya tampak jika homozigot.</li>
<li>Homozigot: AA atau aa. Heterozigot: Aa.</li>
</ul>
<h3>Hukum Mendel</h3>
<ul>
<li><b>Hukum I (segregasi):</b> sepasang alel memisah saat pembentukan gamet.</li>
<li><b>Hukum II (pemilihan bebas):</b> alel dari gen berbeda memisah secara bebas (berlaku untuk gen pada kromosom yang berbeda).</li>
</ul>
<h3>Rasio persilangan</h3>
<ul>
<li>Monohibrid Aa × Aa: genotipe 1 AA : 2 Aa : 1 aa, fenotipe 3 dominan : 1 resesif.</li>
<li>Dihibrid AaBb × AaBb: fenotipe 9 : 3 : 3 : 1.</li>
</ul>
<h3>Contoh</h3>
<p>Warna bunga ungu (P) dominan terhadap putih (p). Persilangan Pp × Pp menghasilkan 75% bunga ungu dan 25% putih.</p>
<h3>Dogma sentral</h3>
<p>DNA ditranskripsi menjadi RNA, lalu RNA ditranslasi menjadi protein.</p>`}
]},

{n:"Bahasa Pemrograman",i:"fa-code",w:"--blue",t:[
{j:"Konsep Dasar Pemrograman",r:"Algoritma, variabel, percabangan, perulangan, fungsi",h:`
<p>Program adalah rangkaian instruksi untuk menyelesaikan masalah. Langkah penyelesaian yang berurutan dan jelas disebut <b>algoritma</b>.</p>
<h3>Bahan dasar hampir semua bahasa</h3>
<ul>
<li><b>Variabel:</b> wadah bernama untuk menyimpan nilai.</li>
<li><b>Tipe data:</b> bilangan bulat, desimal, teks (string), dan boolean (benar/salah).</li>
<li><b>Operator:</b> aritmetika (+ − * /), perbandingan (== &lt; &gt;), logika (and, or, not).</li>
<li><b>Percabangan:</b> if / else untuk mengambil keputusan.</li>
<li><b>Perulangan:</b> for dan while untuk mengulang langkah.</li>
<li><b>Fungsi:</b> blok kode yang bisa dipanggil berulang kali.</li>
<li><b>Struktur data:</b> list/array dan dictionary/objek untuk menyimpan banyak nilai.</li>
</ul>
<h3>Contoh pseudokode</h3>
${K(`total = 0
untuk setiap angka dalam daftar:
    jika angka genap:
        total = total + angka
tampilkan total`)}
<h3>Debugging</h3>
<ol>
<li>Baca pesan error dari baris paling bawah dan nomor barisnya.</li>
<li>Pastikan masalahnya bisa diulang.</li>
<li>Cetak nilai variabel untuk menemukan bagian yang menyimpang.</li>
<li>Ubah satu hal pada satu waktu lalu uji kembali.</li>
</ol>`},

{j:"Python Dasar",r:"Variabel, if, for, fungsi, list, dan dictionary",h:`
<p>Python memakai indentasi (spasi di awal baris) untuk menandai blok kode.</p>
${K(`nama = "Rina"
umur = 17
print(f"Halo, {nama}")

if umur >= 17:
    print("Sudah boleh punya KTP")
else:
    print("Belum")

for i in range(1, 6):
    print(i)

def kuadrat(x):
    return x * x

print(kuadrat(4))

buah = ["apel", "jeruk"]
buah.append("mangga")
print(buah[0])

stok = {"apel": 3, "jeruk": 5}
print(stok["apel"])

kuadrat_list = [x * x for x in range(5)]`)}
<h3>Catatan</h3>
<ul>
<li>Indeks list dimulai dari 0.</li>
<li><code>range(1, 6)</code> menghasilkan 1 sampai 5 (batas akhir tidak ikut).</li>
<li>Jalankan program dengan perintah <code>python namafile.py</code>.</li>
<li>Gunakan <code>#</code> untuk menulis catatan pada kode.</li>
</ul>`},

{j:"JavaScript Dasar",r:"Variabel, kondisi, perulangan, fungsi, array, objek",h:`
<p>JavaScript berjalan di browser. Untuk mencoba, buka halaman web, tekan F12, lalu pilih tab Console.</p>
${K(`const nama = "Rina";
let umur = 17;
console.log("Halo, " + nama);

if (umur >= 17) {
  console.log("Sudah boleh punya KTP");
} else {
  console.log("Belum");
}

for (let i = 1; i <= 5; i++) {
  console.log(i);
}

function kuadrat(x) {
  return x * x;
}
const kuadrat2 = (x) => x * x;

const angka = [1, 2, 3];
const ganda = angka.map((n) => n * 2);

const orang = { nama: "Rina", umur: 17 };
console.log(orang.nama);`)}
<h3>Catatan</h3>
<ul>
<li>Pakai <code>const</code> untuk nilai yang tidak diubah dan <code>let</code> untuk yang berubah. Hindari <code>var</code>.</li>
<li>Pakai <code>===</code> untuk perbandingan, bukan <code>==</code>, agar tipe data ikut dicek.</li>
<li>Untuk mengubah halaman web, ambil elemen dengan <code>document.getElementById("id")</code> lalu atur isi atau tanggapan kliknya.</li>
</ul>`},

{j:"HTML dan CSS Dasar",r:"Struktur halaman, selector, box model, flexbox",h:`
<p>HTML mengatur <b>struktur</b> halaman, CSS mengatur <b>tampilan</b>, dan JavaScript mengatur <b>perilaku</b>.</p>
${K(`<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="utf-8">
  <title>Halaman Saya</title>
  <style>
    body { font-family: sans-serif; }
    .kartu {
      padding: 16px;
      border: 1px solid #ccc;
      border-radius: 8px;
    }
    .baris { display: flex; gap: 12px; }
  </style>
</head>
<body>
  <h1>Judul</h1>
  <p class="kartu">Isi dengan <a href="https://example.com">tautan</a>.</p>
  <ul><li>Satu</li><li>Dua</li></ul>
  <img src="foto.jpg" alt="Deskripsi foto">
</body>
</html>`)}
<h3>Konsep CSS penting</h3>
<ul>
<li><b>Selector:</b> <code>p</code> (tag), <code>.kartu</code> (kelas), <code>#judul</code> (id).</li>
<li><b>Box model:</b> setiap elemen terdiri dari content, padding, border, lalu margin dari dalam ke luar.</li>
<li><b>Flexbox:</b> <code>display: flex</code> dengan <code>justify-content</code> dan <code>align-items</code> untuk menata elemen sebaris atau sekolom.</li>
<li><b>Responsif:</b> gunakan <code>@media (max-width: 600px) { ... }</code> untuk layar kecil.</li>
</ul>
<p>Selalu isi atribut <code>alt</code> pada gambar agar dapat dibaca pembaca layar.</p>`},

{j:"SQL Dasar",r:"Membuat tabel, SELECT, UPDATE, JOIN, dan keamanan",h:`
<p>SQL adalah bahasa untuk mengelola data di database relasional.</p>
${K(`CREATE TABLE siswa (
  id INTEGER PRIMARY KEY,
  nama TEXT NOT NULL,
  kelas TEXT,
  nilai INTEGER
);

INSERT INTO siswa (nama, kelas, nilai) VALUES ('Rina', '10A', 85);

SELECT nama, nilai FROM siswa WHERE nilai >= 80 ORDER BY nilai DESC;

UPDATE siswa SET nilai = 90 WHERE nama = 'Rina';

DELETE FROM siswa WHERE id = 3;

SELECT kelas, AVG(nilai) AS rata FROM siswa GROUP BY kelas;

SELECT s.nama, k.wali
FROM siswa s
JOIN kelas k ON s.kelas = k.kode;`)}
<h3>Hal yang perlu diingat</h3>
<ul>
<li><code>UPDATE</code> dan <code>DELETE</code> tanpa <code>WHERE</code> mengubah atau menghapus seluruh baris.</li>
<li>Fungsi agregat: COUNT, SUM, AVG, MIN, MAX, biasanya dipasangkan dengan GROUP BY.</li>
<li><b>Keamanan:</b> jangan menyusun query dengan menyambung teks dari input pengguna (rawan SQL injection). Gunakan parameterized query atau prepared statement.</li>
</ul>`},

{j:"Struktur Data dan Big-O",r:"Array, hash map, stack, queue, kompleksitas, binary search",h:`
<h3>Struktur data umum</h3>
<ul>
<li><b>Array / list:</b> akses lewat indeks cepat, menyisipkan di tengah lambat.</li>
<li><b>Dictionary / hash map:</b> pencarian berdasarkan kunci, rata-rata cepat.</li>
<li><b>Stack:</b> masuk terakhir keluar pertama (LIFO), contohnya tombol undo.</li>
<li><b>Queue:</b> masuk pertama keluar pertama (FIFO), contohnya antrean cetak.</li>
<li><b>Tree dan graph:</b> data berhierarki dan data berjejaring (peta, pertemanan).</li>
</ul>
<h3>Notasi Big-O (pertumbuhan waktu terhadap n data)</h3>
<div class="sc"><table>
<thead><tr><th>Notasi</th><th>Nama</th><th>Contoh</th></tr></thead>
<tbody>
<tr><td>O(1)</td><td>Konstan</td><td>Akses array lewat indeks</td></tr>
<tr><td>O(log n)</td><td>Logaritmik</td><td>Binary search</td></tr>
<tr><td>O(n)</td><td>Linear</td><td>Mencari di list tak terurut</td></tr>
<tr><td>O(n log n)</td><td>Linearitmik</td><td>Merge sort</td></tr>
<tr><td>O(n²)</td><td>Kuadratik</td><td>Dua perulangan bersarang</td></tr>
</tbody></table></div>
<h3>Contoh: binary search (data harus terurut)</h3>
${K(`def cari(data, target):
    kiri, kanan = 0, len(data) - 1
    while kiri <= kanan:
        tengah = (kiri + kanan) // 2
        if data[tengah] == target:
            return tengah
        if data[tengah] < target:
            kiri = tengah + 1
        else:
            kanan = tengah - 1
    return -1`)}
<p>Setiap langkah membuang separuh data, sehingga 1 juta data hanya butuh sekitar 20 langkah.</p>`}
]},

{n:"Bahasa Inggris",i:"fa-language",w:"--pink",t:[
{j:"Simple Tenses",r:"Simple present, simple past, simple future",h:`
<div class="sc"><table>
<thead><tr><th>Tense</th><th>Rumus</th><th>Contoh</th></tr></thead>
<tbody>
<tr><td>Simple present</td><td>S + V1 (+s/es untuk he, she, it)</td><td>She reads every day.</td></tr>
<tr><td>Simple past</td><td>S + V2</td><td>She read a book yesterday.</td></tr>
<tr><td>Simple future</td><td>S + will + V1</td><td>She will read tomorrow.</td></tr>
</tbody></table></div>
<h3>Bentuk negatif dan tanya</h3>
<ul>
<li>Present: She does not (doesn't) read. / Does she read?</li>
<li>Past: She did not (didn't) read. / Did she read? (kata kerja kembali ke V1)</li>
<li>Future: She will not (won't) read. / Will she read?</li>
</ul>
<h3>Penggunaan</h3>
<ul>
<li>Simple present: kebiasaan dan fakta umum (Water boils at 100 °C).</li>
<li>Simple past: kejadian selesai di waktu lampau tertentu (in 2019, last week).</li>
<li>Simple future: keputusan spontan, prediksi, atau janji.</li>
</ul>
<p>Kata kerja to be: am/is/are (present), was/were (past).</p>`},

{j:"Present Perfect",r:"Have/has + V3, pengalaman, hasil, for dan since",h:`
<p>Rumus: <b>S + have/has + V3</b></p>
<h3>Penggunaan</h3>
<ul>
<li>Pengalaman hingga sekarang: <i>I have visited Bali.</i></li>
<li>Peristiwa lampau yang hasilnya terasa sekarang: <i>She has lost her keys.</i></li>
<li>Keadaan yang berlangsung sampai sekarang: <i>He has lived here for five years / since 2020.</i></li>
</ul>
<h3>For dan since</h3>
<ul>
<li><b>for</b> + lama waktu (for two hours, for a week)</li>
<li><b>since</b> + titik awal waktu (since 2020, since Monday)</li>
</ul>
<h3>Beda dengan simple past</h3>
<p>Simple past dipakai jika waktu lampaunya disebut jelas (<i>I visited Bali in 2019</i>). Present perfect tidak menyebut waktu tertentu (<i>I have visited Bali</i>).</p>
<h3>Bentuk negatif dan tanya</h3>
<p>She has not (hasn't) finished. / Have you finished?</p>`},

{j:"Conditional Sentences",r:"Tipe 0, 1, 2, dan 3 kalimat pengandaian",h:`
<div class="sc"><table>
<thead><tr><th>Tipe</th><th>Rumus</th><th>Makna</th></tr></thead>
<tbody>
<tr><td>0</td><td>If + present, present</td><td>Fakta umum</td></tr>
<tr><td>1</td><td>If + present, will + V1</td><td>Kemungkinan nyata di masa depan</td></tr>
<tr><td>2</td><td>If + past, would + V1</td><td>Pengandaian tidak nyata di masa kini</td></tr>
<tr><td>3</td><td>If + past perfect, would have + V3</td><td>Pengandaian tidak nyata di masa lalu</td></tr>
</tbody></table></div>
<h3>Contoh</h3>
<ul>
<li>Tipe 0: If you heat ice, it melts.</li>
<li>Tipe 1: If it rains, I will stay home.</li>
<li>Tipe 2: If I had more time, I would learn Spanish.</li>
<li>Tipe 3: If she had studied, she would have passed the test.</li>
</ul>
<h3>Catatan</h3>
<ul>
<li>Pada tipe 2, bentuk <i>were</i> dipakai untuk semua subjek: <i>If I were you, I would apologize.</i></li>
<li>Klausa if boleh di belakang tanpa koma: <i>I will stay home if it rains.</i></li>
</ul>`}
]},

{n:"Teknik Belajar",i:"fa-lightbulb",w:"--lime",t:[
{j:"Active Recall dan Spaced Repetition",r:"Menguji ingatan dan mengulang dengan jeda bertahap",h:`
<h3>Active recall</h3>
<p>Mengingat materi tanpa melihat catatan, lebih efektif daripada hanya membaca ulang. Caranya: tutup buku lalu tulis atau ucapkan apa yang diingat, jawab soal latihan, atau pakai flashcard. Menu Kuis dan Kartu di RawNote bisa membantu.</p>
<h3>Spaced repetition</h3>
<p>Mengulang materi dengan jeda yang makin panjang, bukan sekaligus dalam satu malam. Contoh jadwal: 1 hari, 3 hari, 1 minggu, 2 minggu, lalu 1 bulan setelah pertama kali belajar.</p>
<h3>Tips</h3>
<ul>
<li>Fokuskan ulangan pada soal yang masih salah.</li>
<li>Campur jenis soal dari berbagai bab (interleaving) agar otak terlatih memilih cara penyelesaian.</li>
<li>Tidur cukup membantu otak menyimpan apa yang sudah dipelajari.</li>
</ul>`},

{j:"Teknik Pomodoro",r:"Fokus 25 menit, istirahat 5 menit",h:`
<ol>
<li>Pilih satu tugas yang jelas.</li>
<li>Atur timer 25 menit dan kerjakan tanpa gangguan (menu Fokus di RawNote).</li>
<li>Istirahat 5 menit: berdiri, minum, regangkan badan, jauhkan dari layar.</li>
<li>Ulangi. Setelah 4 sesi, ambil istirahat panjang sekitar 15 sampai 30 menit.</li>
</ol>
<h3>Tips</h3>
<ul>
<li>Letakkan ponsel di luar jangkauan selama sesi.</li>
<li>Jika ada gangguan, catat singkat lalu lanjutkan, urus nanti saat istirahat.</li>
<li>Durasi bisa disesuaikan, misalnya 50 menit fokus dan 10 menit istirahat untuk tugas yang butuh konsentrasi panjang.</li>
</ul>`},

{j:"Teknik Feynman",r:"Menjelaskan dengan kata sederhana untuk menemukan celah",h:`
<ol>
<li><b>Pilih konsep</b> yang ingin dipahami.</li>
<li><b>Jelaskan dengan bahasa sederhana</b>, seolah kepada teman yang belum pernah mendengarnya. Tulis atau ucapkan, tanpa melihat catatan.</li>
<li><b>Temukan bagian yang macet.</b> Bagian yang sulit dijelaskan adalah celah pemahaman.</li>
<li><b>Buka materi</b> untuk memperbaiki celah itu, lalu jelaskan ulang sampai lancar.</li>
<li><b>Sederhanakan</b> istilah dan buat contoh atau analogi sendiri.</li>
</ol>
<p>Hasil penjelasan Anda bisa disimpan di menu Catatan sebagai bahan ulangan.</p>`}
]}
];
