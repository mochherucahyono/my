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