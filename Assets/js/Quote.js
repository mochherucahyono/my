// 1. Kumpulan quote dalam bentuk Array
const daftarQuotes = [
    '"Kode yang bekerja tidak perlu disentuh. Tetapi saya tetap menyentuhnya."',
    '"Mengosongkan cache adalah jalan pintas menuju kedamaian batin."',
    '"Ada dua cara untuk menulis program bebas error; hanya cara ketiga yang berhasil."',
    '"Bukan bug namanya, itu adalah fitur yang tidak sengaja terdokumentasi."',
    '"Kopi mengubah tebakan menjadi kode program."',
    '"Sebelum memikirkan optimasi kode, pastikan kodenya jalan dulu."'
];

// 2. Fungsi untuk memilih dan menampilkan quote acak
function tampilkanQuoteAcak() {
    // Menghasilkan indeks acak berdasarkan panjang array
    const indeksAcak = Math.floor(Math.random() * daftarQuotes.length);

    // Mengubah teks di dalam elemen HTML dengan id "quote-about"
    document.getElementById('quote-about').innerText = daftarQuotes[indeksAcak];
}

// 3. Jalankan fungsi secara otomatis setiap kali halaman selesai dimuat
window.onload = tampilkanQuoteAcak;