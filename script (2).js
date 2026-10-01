/* ===== PENGATURAN ===== */
const CONFIG = {
  // Tempel URL Web App dari Google Apps Script (lihat Code.gs & panduan)
  SCRIPT_URL: '',
  DURATION_MIN: 60,
  SHOW_SCORE: true // false = siswa tidak melihat nilai di layar
};

/* ===== BANK SOAL (50 PG) =====
   Format: [soal, A, B, C, D, indeks jawaban benar (0=A ... 3=D)]
   Urutan soal dan pilihan diacak otomatis untuk tiap siswa. */
const Q = [
// A. ATS (1-5)
["Applicant Tracking System (ATS) adalah ...","aplikasi untuk mengedit foto pelamar kerja","perangkat lunak yang membantu perusahaan mengelola, menyaring, dan menyimpan lamaran kerja secara otomatis","jejaring sosial untuk mencari teman baru","mesin untuk mencetak CV pelamar",1],
["Hal pertama yang dilakukan ATS saat menerima CV adalah ...","menelepon pelamar untuk wawancara","mencetak CV untuk diarsipkan","membaca (parsing) isi CV lalu mengubahnya menjadi data terstruktur","memberi nilai berdasarkan foto pelamar",2],
["ATS menyaring pelamar dengan cara mencocokkan CV dengan ...","kata kunci dan kualifikasi yang tertulis pada lowongan","warna favorit rekruter","jumlah gambar di dalam CV","panjang nama pelamar",0],
["Manfaat utama ATS bagi perusahaan adalah ...","semua pelamar otomatis diterima","lowongan tidak perlu dibuat lagi","wawancara tidak diperlukan lagi","menghemat waktu menyeleksi lamaran dalam jumlah besar",3],
["Agar CV lebih mudah lolos seleksi ATS, isi CV sebaiknya ...","memuat kata kunci yang relevan dengan lowongan","dibuat sesingkat mungkin tanpa menyebut keahlian","ditulis dengan bahasa sandi","dipenuhi data yang dilebih-lebihkan",0],
// B. CV rumit berisiko (6-10)
["CV dengan format terlalu rumit berisiko gagal dibaca ATS karena ...","ATS hanya mau membaca CV berwarna hitam putih","ATS sulit membaca elemen non-teks dan tata letak berlapis sehingga urutan teks menjadi kacau","ATS tidak dapat membaca huruf alfabet","ATS hanya membaca dokumen yang berisi tabel",1],
["Gambar, grafik, atau ikon pada CV biasanya ...","dibaca ATS sebagai kata kunci tambahan","menaikkan skor kecocokan CV","tidak terbaca ATS sehingga informasi di dalamnya hilang","selalu diubah ATS menjadi teks dengan sempurna",2],
["Tabel yang bertumpuk-tumpuk berisiko karena ...","membuat ukuran kertas berubah otomatis","membuat font menjadi dekoratif","membuat dokumen otomatis terkunci","ATS dapat membaca isi sel dalam urutan yang salah sehingga data tercampur",3],
["Font tidak standar dapat menyebabkan CV gagal terbaca ATS karena ...","karakter dapat berubah menjadi simbol aneh atau tidak terbaca","ATS hanya mengenali huruf kapital","font tersebut harganya mahal","font tersebut hanya untuk judul",0],
["Menaruh informasi kontak di dalam kotak teks atau elemen yang rumit dapat berakibat ...","nomor telepon tersimpan ganda","informasi kontak tidak terbaca sehingga pelamar sulit dihubungi","CV otomatis menjadi lebih menarik","ukuran file mengecil",1],
// C. Ciri CV ATS-friendly (11-15)
["Berikut ini yang termasuk ciri CV ATS-friendly adalah ...","memakai banyak ikon dan gambar","menggunakan tulisan di dalam kotak teks","tata letak sederhana dengan font standar","memakai beberapa kolom dengan tabel bertumpuk",2],
["Judul bagian CV yang paling mudah dikenali ATS adalah ...","Pendidikan, Pengalaman Kerja, dan Keterampilan","Jejak Langkahku","Kisah Hidupku","Hal-hal Seru tentang Saya",0],
["Format file CV yang umumnya aman dibaca ATS adalah ...","gambar JPG hasil foto CV","file hasil scan berupa gambar","file animasi","DOCX atau PDF yang berisi teks asli (bukan hasil scan)",3],
["Cara menuliskan uraian pengalaman yang ramah ATS adalah ...","memasukkan uraian ke dalam gambar","memakai daftar poin (bullet) yang sederhana","menulis dalam kotak teks melayang","mengganti kata dengan ikon",1],
["Langkah yang tepat untuk menyesuaikan CV dengan lowongan tertentu adalah ...","menyalin CV orang lain","menghapus semua riwayat pendidikan","menyesuaikan kata kunci pada CV dengan deskripsi lowongan","mengganti seluruh isi CV dengan foto",2],
// D. Ukuran kertas A4 (16-20)
["Menu untuk mengubah ukuran kertas di Microsoft Word adalah ...","Insert > Page Number","Layout > Size","Review > Spelling","View > Zoom",1],
["Ukuran kertas A4 adalah ...","21 cm × 29,7 cm","21,6 cm × 27,9 cm","14,8 cm × 21 cm","29,7 cm × 42 cm",0],
["Urutan langkah mengatur kertas menjadi A4 yang benar adalah ...","Home > Font > A4","Insert > Table > A4","Review > Size > A4","Layout (Page Layout) > Size > pilih A4",3],
["Jika pilihan A4 tidak ada pada daftar Size, langkah yang dapat dilakukan adalah ...","menutup Word lalu membukanya kembali","menggunakan menu Insert > Shapes","memilih More Paper Sizes lalu mengisi Width 21 cm dan Height 29,7 cm","memilih Orientation > Landscape",2],
["Orientasi kertas yang lazim digunakan untuk CV adalah ...","Portrait","Landscape","Diagonal","Mirror",0],
// E. Margin (21-25)
["Menu yang digunakan untuk mengatur margin dokumen di Word adalah ...","Home > Paragraph","Insert > Header","Layout > Margins","References > Citations",2],
["Margin Normal di Microsoft Word berukuran ...","1,27 cm di semua sisi","2,54 cm di semua sisi","3,17 cm di semua sisi","5,08 cm di semua sisi",1],
["Langkah mengatur margin Normal yang benar adalah ...","Layout > Margins > Normal","Home > Margins > Normal","Insert > Margins > Normal","View > Margins > Normal",0],
["Untuk menentukan ukuran margin sendiri, pilihan yang digunakan adalah ...","Narrow","Mirrored","Moderate","Custom Margins",3],
["Margin adalah ...","jarak antarbaris dalam paragraf","jumlah kolom pada halaman","ruang kosong antara tepi kertas dan area teks","gambar di belakang teks",2],
// F. Pentingnya A4 dan margin (26-30)
["Ukuran kertas A4 dan margin sebaiknya diatur sebelum menulis isi CV agar ...","tata letak tidak bergeser dan teks tidak terpotong ketika dicetak","CV otomatis lolos ATS","isi CV menjadi lebih panjang","font berubah menjadi dekoratif",0],
["Ukuran A4 dipilih untuk CV karena ...","hanya A4 yang tersedia di Word","A4 membuat teks berwarna","A4 membuat file otomatis berformat PDF","A4 adalah ukuran standar dokumen resmi sehingga hasil cetak dan tampilan konsisten",3],
["Risiko mengubah ukuran kertas dan margin setelah CV selesai ditulis adalah ...","CV otomatis tersimpan di cloud","isi dapat bergeser dan jumlah halaman berubah sehingga harus dirapikan ulang","semua Heading terhapus","nama file berubah",1],
["Margin yang cukup membuat dokumen ...","tidak dapat dicetak","sulit dibaca","tidak terpotong dan nyaman dibaca","otomatis berwarna",2],
["Dampak margin yang terlalu sempit pada CV adalah ...","teks terlihat mepet dan berisiko terpotong saat dicetak","CV menjadi lebih aman dari ATS","halaman otomatis berubah menjadi Landscape","font menjadi lebih besar",0],
// G. Heading 1 pada nama (31-35)
["Cara menerapkan Heading 1 pada nama lengkap di bagian header CV adalah ...","memblok nama lalu klik Insert > Table","memblok nama (atau menaruh kursor di barisnya), lalu pilih Heading 1 pada grup Styles di tab Home","memblok nama lalu klik Review > Comment","menekan Ctrl+S pada nama",1],
["Heading 1 pada CV digunakan untuk ...","judul utama, yaitu nama lengkap","isi uraian pengalaman","nomor halaman","catatan kaki",0],
["Galeri Styles (Heading 1, Heading 2, dan seterusnya) terdapat pada tab ...","Insert","Review","View","Home",3],
["Alasan nama pada CV diberi Heading 1 adalah ...","agar nama tidak ikut tercetak","agar nama tampil berwarna merah","agar ATS dan pembaca mengenali nama sebagai judul utama dokumen","agar jumlah halaman bertambah",2],
["Sebelum menerapkan Heading 1 pada nama, langkah yang dilakukan lebih dulu adalah ...","menyimpan file sebagai PDF","menutup dokumen","menambahkan gambar","memblok teks nama atau menaruh kursor pada baris nama",3],
// H. Heading 1 dan 2, struktur (36-40)
["Heading 2 pada CV paling tepat digunakan untuk ...","nama lengkap pelamar","nomor halaman","subjudul bagian seperti Pendidikan dan Pengalaman Kerja","alamat website sekolah",2],
["Hierarki Heading yang benar pada CV adalah ...","Heading 1 untuk nama, Heading 2 untuk judul tiap bagian","Heading 2 untuk nama, Heading 1 untuk judul tiap bagian","semua teks memakai Heading 1","tidak memakai Heading sama sekali",0],
["Agar tampilan Heading (font dan ukuran) sesuai kebutuhan CV, langkah yang dapat dilakukan adalah ...","menghapus Heading lalu mengetik ulang","klik kanan pada style Heading di galeri Styles lalu pilih Modify","memilih Layout > Orientation","menutup tab Styles",1],
["Manfaat memakai Heading pada CV adalah ...","membuat file menjadi lebih kecil dari 1 KB","mengubah kertas menjadi A4","menghapus margin","membentuk struktur dokumen yang jelas dan mudah dikenali ATS",3],
["Mengapa memakai Heading lebih baik daripada hanya menebalkan (bold) judul secara manual?","karena bold tidak bisa dipakai di Word","karena Heading otomatis menambah gambar","karena bold hanya mengubah tampilan, sedangkan Heading memberi struktur yang dapat dikenali","karena Heading membuat teks tidak terbaca",2],
// I. Jenis font (41-45)
["Font standar yang direkomendasikan untuk CV ATS-friendly adalah ...","Brush Script dan Jokerman","Arial, Calibri, dan Times New Roman","Wingdings dan Webdings","Comic Sans dan Curlz",1],
["Font dekoratif kurang disarankan pada CV ATS-friendly karena ...","sulit terbaca oleh ATS dan kurang profesional","hanya tersedia dalam ukuran 12 pt","tidak dapat diberi warna","membuat dokumen berformat PDF",0],
["Berikut ini yang termasuk font dekoratif adalah ...","Arial","Calibri","Times New Roman","Edwardian Script ITC",3],
["Keuntungan memakai font standar pada CV adalah ...","CV otomatis diterima","ukuran file menjadi nol","tersedia di hampir semua komputer sehingga tampilan tidak berubah","tulisan menjadi berwarna",2],
["Jumlah jenis font yang sebaiknya dipakai dalam satu CV adalah ...","satu sampai dua jenis","lima sampai enam jenis","sebanyak mungkin agar menarik","setiap baris berbeda",0],
// J. Ukuran font (46-50)
["Ukuran font yang tepat untuk isi teks CV adalah ...","6-8 pt","20-24 pt","11-12 pt","36-48 pt",2],
["Ukuran font yang tepat untuk nama atau heading utama CV adalah ...","8-9 pt","14-16 pt","30-36 pt","4-6 pt",1],
["Isi CV dengan font 6 pt kurang tepat karena ...","terlalu kecil sehingga sulit dibaca","terlalu besar sehingga memenuhi halaman","tidak bisa dicetak","otomatis menjadi Heading 1",0],
["Nama dan heading utama dibuat lebih besar daripada isi teks agar ...","file menjadi lebih ringan","margin otomatis berubah","kertas berubah menjadi Landscape","hierarki informasi jelas dan mudah dibedakan dari isi",3],
["Jenis dan ukuran font diatur melalui grup Font pada tab ...","Layout","Insert","Home","References",2]
];

/* ===== LOGIKA ===== */
const L = ['A','B','C','D'];
const KEY = 'cbt_uts_informatika';
const $ = id => document.getElementById(id);
const pad = n => String(n).padStart(2, '0');
const fmt = ms => pad(Math.floor(ms / 60000)) + ':' + pad(Math.floor(ms % 60000 / 1000));
let S = null, tick = null;

try { S = JSON.parse(localStorage.getItem(KEY)); } catch (e) {}
const save = () => { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) {} };
const shuffle = a => { for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };

function show(id) {
  ['login', 'exam', 'result'].forEach(x => $(x).hidden = x !== id);
  $('timer').hidden = id !== 'exam';
}

$('startBtn').onclick = () => {
  const nama = $('nama').value.trim(), absen = $('absen').value.trim();
  if (nama.length < 3 || !absen) { $('loginErr').textContent = 'Isi nama lengkap dan nomor absen terlebih dahulu.'; return; }
  S = {
    user: { nama, kelas: $('kelas').value, absen },
    order: shuffle(Q.map((_, i) => i)).map(q => ({ q, o: shuffle([0, 1, 2, 3]) })),
    ans: {}, mark: {}, idx: 0, tab: 0, done: false, sent: false,
    start: Date.now(), end: Date.now() + CONFIG.DURATION_MIN * 60000
  };
  save(); runExam();
};

function runExam() {
  show('exam'); render();
  clearInterval(tick); tick = setInterval(loop, 500); loop();
}

function loop() {
  const left = S.end - Date.now();
  if (left <= 0) { finish(); return; }
  $('timer').textContent = fmt(left);
  $('timer').classList.toggle('low', left < 5 * 60000);
}

function render() {
  const i = S.idx, it = S.order[i], q = Q[it.q];
  $('qno').textContent = 'Soal ' + (i + 1) + ' dari ' + Q.length;
  $('qtext').textContent = q[0];
  const box = $('opts'); box.innerHTML = '';
  it.o.forEach((orig, d) => {
    const b = document.createElement('button');
    b.className = 'opt' + (S.ans[i] === d ? ' sel' : '');
    b.innerHTML = '<b>' + L[d] + '</b><span></span>';
    b.lastChild.textContent = q[1 + orig];
    b.onclick = () => { S.ans[i] = d; save(); render(); };
    box.appendChild(b);
  });
  $('prev').disabled = i === 0;
  $('next').disabled = i === Q.length - 1;
  $('markBtn').classList.toggle('on', !!S.mark[i]);
  $('markBtn').textContent = S.mark[i] ? 'Batal ragu' : 'Tandai ragu';
  $('progress').textContent = Object.keys(S.ans).length + ' dari ' + Q.length + ' soal terjawab';
  const g = $('grid'); g.innerHTML = '';
  Q.forEach((_, n) => {
    const c = document.createElement('button');
    c.className = 'cell' + (S.ans[n] !== undefined ? ' ans' : '') + (S.mark[n] ? ' mark' : '') + (n === i ? ' cur' : '');
    c.textContent = n + 1;
    c.onclick = () => { S.idx = n; save(); render(); };
    g.appendChild(c);
  });
}

$('prev').onclick = () => { S.idx--; save(); render(); };
$('next').onclick = () => { S.idx++; save(); render(); };
$('markBtn').onclick = () => { S.mark[S.idx] = !S.mark[S.idx]; save(); render(); };

$('finishBtn').onclick = () => {
  const kosong = Q.length - Object.keys(S.ans).length;
  const ragu = Object.values(S.mark).filter(Boolean).length;
  $('modalMsg').textContent = (kosong ? kosong + ' soal belum dijawab. ' : 'Semua soal sudah dijawab. ') +
    (ragu ? ragu + ' soal masih ditandai ragu. ' : '') + 'Setelah dikirim, jawaban tidak dapat diubah.';
  $('modal').hidden = false;
};
$('cancel').onclick = () => { $('modal').hidden = true; };
$('confirm').onclick = () => { $('modal').hidden = true; finish(); };

function finish() {
  if (S.done) return;
  clearInterval(tick);
  let benar = 0, kosong = 0;
  const jaw = [];
  S.order.forEach((it, i) => {
    const d = S.ans[i];
    if (d === undefined) { kosong++; jaw.push([it.q + 1, '-']); return; }
    const orig = it.o[d];
    if (orig === Q[it.q][5]) benar++;
    jaw.push([it.q + 1, L[orig]]);
  });
  jaw.sort((a, b) => a[0] - b[0]);
  S.result = {
    nama: S.user.nama, kelas: S.user.kelas, absen: S.user.absen,
    benar, salah: Q.length - benar - kosong, kosong,
    nilai: Math.round(benar * 100 / Q.length),
    durasi: fmt(Math.min(Date.now(), S.end) - S.start),
    pindahTab: S.tab,
    jawaban: jaw.map(j => j[0] + ':' + j[1]).join(' ')
  };
  S.done = true; save();
  showResult(); send();
}

function showResult() {
  const r = S.result;
  show('result');
  $('rName').textContent = r.nama;
  $('rClass').textContent = r.kelas + ' · No. absen ' + r.absen;
  $('rScore').textContent = CONFIG.SHOW_SCORE ? r.nilai : '✓';
  $('rDetail').textContent = CONFIG.SHOW_SCORE
    ? 'Benar ' + r.benar + ' · Salah ' + r.salah + ' · Kosong ' + r.kosong + ' · Waktu ' + r.durasi
    : 'Jawaban sudah tersimpan. Nilai akan diumumkan oleh guru.';
}

async function send() {
  const st = $('sendStatus');
  $('reset').hidden = true;
  if (!CONFIG.SCRIPT_URL) {
    st.textContent = 'URL Google Apps Script belum diisi di script.js, nilai belum masuk spreadsheet.';
    $('retry').hidden = false; return;
  }
  st.textContent = 'Mengirim nilai ke spreadsheet...';
  $('retry').hidden = true;
  try {
    await fetch(CONFIG.SCRIPT_URL, {
      method: 'POST', mode: 'no-cors',
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify(S.result)
    });
    S.sent = true; save();
    st.textContent = 'Nilai berhasil dikirim ke spreadsheet.';
    $('reset').hidden = false;
  } catch (e) {
    st.textContent = 'Gagal mengirim. Periksa koneksi internet lalu kirim ulang.';
    $('retry').hidden = false;
  }
}
$('retry').onclick = send;
$('reset').onclick = () => { try { localStorage.removeItem(KEY); } catch (e) {} location.reload(); };

// Catat jika siswa berpindah tab/aplikasi saat ujian
document.addEventListener('visibilitychange', () => {
  if (S && !S.done && document.hidden) { S.tab++; save(); }
});

// Lanjutkan sesi jika halaman dimuat ulang
if (S && S.user) { S.done ? (showResult(), S.sent ? ($('sendStatus').textContent = 'Nilai berhasil dikirim ke spreadsheet.', $('reset').hidden = false) : send()) : runExam(); }
else show('login');
