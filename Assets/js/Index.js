const filterBtns =
    document.querySelectorAll(".filter-btn");

const featureContents =
    document.querySelectorAll(".feature-content");

filterBtns.forEach(btn => {

    btn.addEventListener("click", () => {

        /* Remove Active */

        filterBtns.forEach(b => {

            b.classList.remove("active");

        });

        /* Active Current */

        btn.classList.add("active");

        /* Hide All */

        featureContents.forEach(content => {

            content.classList.add("d-none");

        });

        /* Show Selected */

        const target =
            document.getElementById(
                btn.dataset.target
            );

        target.classList.remove("d-none");

    });

}); /* Quotes */
const quoteText =
    document.getElementById("quoteText");

const quotes = [

    "Ngoding itu mudah, yang sulit mencari titik koma.",

    "Error hari ini adalah fitur besok.",

    "Jika bug hilang sendiri, jangan ditanya kenapa.",

    "Kode berjalan dengan baik sampai saya menyentuhnya.",

    "Internet cepat hanya mitos saat deadline.",

    "Ctrl + Z adalah penyelamat kehidupan developer.",

    "Minum kopi tidak menyelesaikan bug, tapi membantu menerima kenyataan.",

    "Kadang program berhasil bukan karena benar, tapi karena kasihan.",

    "Mengubah kopi menjadi kode dan bug menjadi cerita."

];

let currentQuote = 0;

if (quoteText) {

    function changeQuote() {

        quoteText.style.opacity = 0;

        setTimeout(() => {

            quoteText.innerHTML =
                quotes[currentQuote];

            quoteText.style.opacity = 1;

            currentQuote++;

            if (currentQuote >= quotes.length) {

                currentQuote = 0;

            }

        }, 300);

    }

    /* Pertama */

    changeQuote();

    /* Ganti tiap 4 detik */

    setInterval(changeQuote, 4000);

}
/* Statistik */
function animateCounter(id, target) {

    const element =
        document.getElementById(id);

    if (!element) return;

    let current = 0;

    const increment =
        Math.ceil(target / 50);

    const timer = setInterval(() => {

        current += increment;

        if (current >= target) {

            current = target;

            clearInterval(timer);

        }

        element.textContent =
            current.toLocaleString();

    }, 30);

}

animateCounter(
    "projectCount",
    8
);

animateCounter(
    "toolsCount",
    2
);

animateCounter(
    "visitorCount",
    1245
);

document.getElementById(
    "versionCount"
).textContent = "1.0";