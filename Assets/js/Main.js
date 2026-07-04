/* Footer */
fetch("Components/footer.html")
    .then(response => response.text())
    .then(data => {

        document.getElementById(
            "footer"
        ).innerHTML = data;

    });

/* 

window.addEventListener(
    "load",
    () => {

        document.body.classList.add(
            "loaded"
        );

    });
document.querySelectorAll("a").forEach(link => {

    link.addEventListener(
        "click",
        function(e) {

            const href =
                this.getAttribute("href");

            

if (
    href.startsWith("#") ||
    this.target === "_blank"
) {

    return;

}

e.preventDefault();

document.body.classList.remove(
    "loaded"
);

setTimeout(() => {

window.location = href;

}, 300);

});

});


function updateTime() {

    let now = new Date();

    let jam = now.getHours().toString().padStart(2, "0");
    let menit = now.getMinutes().toString().padStart(2, "0");
    let detik = now.getSeconds().toString().padStart(2, "0");

    document.getElementById("clock").innerHTML =
        `${jam}:${menit}:${detik}`;

    const hari = [
        "Minggu",
        "Senin",
        "Selasa",
        "Rabu",
        "Kamis",
        "Jumat",
        "Sabtu"
    ];

    const bulan = [
        "Januari",
        "Februari",
        "Maret",
        "April",
        "Mei",
        "Juni",
        "Juli",
        "Agustus",
        "September",
        "Oktober",
        "November",
        "Desember"
    ];

    let tanggal =
        `${hari[now.getDay()]}, 
${now.getDate()} 
${bulan[now.getMonth()]} 
${now.getFullYear()}`;

    document.getElementById("date")
        .innerHTML = tanggal;

}

updateTime();

setInterval(updateTime, 1000);*/