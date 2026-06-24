const themeToggle =
    document.getElementById(
        "themeToggle"
    );

/* Saat halaman dibuka */

if (
    localStorage.getItem("theme") ===
    "dark"
) {

    document.body.classList.add(
        "dark-mode"
    );

    if (themeToggle) {
        themeToggle.checked = true;
    }

}

/* Toggle Theme */

if (themeToggle) {

    themeToggle.addEventListener(
        "change",
        function() {

            if (this.checked) {

                document.body.classList.add(
                    "dark-mode"
                );

                localStorage.setItem(
                    "theme",
                    "dark"
                );

            } else {

                document.body.classList.remove(
                    "dark-mode"
                );

                localStorage.setItem(
                    "theme",
                    "light"
                );

            }

        }
    );

}

/* Agar dropdown tidak tertutup */

document
    .querySelectorAll(".switch")
    .forEach(toggle => {

        toggle.addEventListener(
            "click",
            function(e) {

                e.stopPropagation();

            }
        );

    });