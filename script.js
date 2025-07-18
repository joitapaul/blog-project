document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".navbar ul li a");
    const exploreButton = document.querySelector(".content button");

    // Smooth scrolling for nav links
    navLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            if (this.getAttribute("href").startsWith("#")) {
                event.preventDefault(); // Prevent instant jump
                const targetId = this.getAttribute("href").substring(1); // Remove #
                const targetSection = document.getElementById(targetId);
                if (targetSection) {
                    window.scrollTo({
                        top: targetSection.offsetTop,
                        behavior: "smooth"
                    });
                }
            }
        });
    });

    // Explore button action
    if (exploreButton) {
        exploreButton.addEventListener("click", function () {
            window.location.href = "#travel"; // Scrolls to travel section
        });
    }
});
document.addEventListener("DOMContentLoaded", function () {
    const forms = document.querySelectorAll("form");

    forms.forEach((form) => {
        form.addEventListener("submit", function (event) {
            event.preventDefault(); // Prevent actual form submission

            const from = form.querySelector('input[placeholder="From"]').value;
            const to = form.querySelector('input[placeholder="To"]').value;
            const date = form.querySelector('input[type="date"]').value;
            const transportType = form.previousElementSibling.textContent;

            if (from && to && date) {
                alert(`✅ ${transportType.trim()} booked from ${from} to ${to} on ${date}!`);
                form.reset(); // Clear form after submission
            } else {
                alert("⚠️ Please fill in all fields!");
            }
        });
    });
});

