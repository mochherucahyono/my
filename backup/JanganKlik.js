const tombol =
    document.getElementById("janganKlik");

const pesan =
    document.getElementById("pesanLucu");

let klik = 0;

const daftarPesan = [

    "😑 Saya bilang jangan diklik",

    "🤨 Masih diklik juga?",

    "☕ Developer keras kepala terdeteksi",

    "🐛 Sedang memanggil bug...",

    "🚨 Terlambat, rasa penasaran sudah aktif",

    "😂 Ya sudah, makasih sudah klik"

];

tombol.addEventListener("click", () => {

    if (klik < daftarPesan.length) {

        pesan.innerHTML =
            daftarPesan[klik];

        klik++;

    } else {

        pesan.innerHTML =
            "🎉 Kamu berhasil menyelesaikan misi rahasia";

    }

});