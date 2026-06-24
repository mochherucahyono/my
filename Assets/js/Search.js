/* Search Form */
document.getElementById("searchForm")
    .addEventListener("submit", function(e) {

        e.preventDefault();

        const input =
            document.getElementById("searchInput")
            .value
            .toLowerCase();

        const pages = {
            "index.html": [
                "beranda",
                "utama",
                "home"
            ],

            "about.html": [
                "tentang",
                "about",
                "profil",
                "visi",
                "misi"
            ],

            "resume.html": [
                "resume",
                "skill",
                "keahlian",
                "kemampuan",
                "pengalaman"
            ],

            "work.html": [
                "karya",
                "project",
                "portfolio"
            ],

            "contact.html": [
                "kontak",
                "email",
                "telepon",
                "alamat",
                "hubungi"
            ],

            "tools.html": [
                "alat",
                "terminal",
                "ai",
                "tools"
            ],

            "statistic.html": [
                "statistik",
                "pengunjung",
                "versi"
            ]


        };

        for (const page in pages) {

            const keywords = pages[page];

            if (
                keywords.some(
                    keyword =>
                    input.includes(keyword)
                )
            ) {

                window.location.href = page;
                return;

            }

        }

        alert("Halaman tidak ditemukan");

    });