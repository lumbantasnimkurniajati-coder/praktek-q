// =========================================
// TAHUN FOOTER OTOMATIS
// =========================================

document.getElementById("year").textContent =
    new Date().getFullYear();


// =========================================
// DETAIL PROJECT
// =========================================

function showProject(type) {

    const modalTitle =
        document.getElementById("modalTitle");

    const modalName =
        document.getElementById("modalName");

    const modalDescription =
        document.getElementById("modalDescription");

    const modalIcon =
        document.getElementById("modalIcon");


    // PROJECT HTML
    if (type === "html") {

        modalTitle.textContent =
            "Project HTML";

        modalName.textContent =
            "Website Menggunakan HTML";

        modalDescription.textContent =
            "Project ini dibuat menggunakan HTML untuk membangun struktur dasar website seperti navbar, section, card, tombol, dan footer.";

        modalIcon.className =
            "bi bi-filetype-html modal-project-icon";
    }


    // PROJECT CSS
    else if (type === "css") {

        modalTitle.textContent =
            "Project CSS";

        modalName.textContent =
            "Website Menggunakan CSS";

        modalDescription.textContent =
            "Project ini dibuat untuk mempelajari desain website menggunakan CSS, seperti warna, layout, responsive design, animasi, dan efek hover.";

        modalIcon.className =
            "bi bi-filetype-css modal-project-icon";
    }


    // PROJECT JAVASCRIPT
    else if (type === "javascript") {

        modalTitle.textContent =
            "Project JavaScript";

        modalName.textContent =
            "Website Interaktif";

        modalDescription.textContent =
            "Project ini menggunakan JavaScript untuk membuat website lebih interaktif, seperti tombol, modal, perubahan konten, dan fungsi dinamis.";

        modalIcon.className =
            "bi bi-filetype-js modal-project-icon";
    }


    // Tampilkan Modal Bootstrap
    const modalElement =
        document.getElementById("projectModal");

    const modal =
        new bootstrap.Modal(modalElement);

    modal.show();
}


// =========================================
// NAVBAR ACTIVE SAAT SCROLL
// =========================================

const sections =
    document.querySelectorAll("section");

const navLinks =
    document.querySelectorAll(".nav-link");


window.addEventListener("scroll", function () {

    let currentSection = "";

    sections.forEach(function (section) {

        const sectionTop =
            section.offsetTop - 150;

        const sectionHeight =
            section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            currentSection =
                section.getAttribute("id");

        }

    });


    navLinks.forEach(function (link) {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            "#" + currentSection
        ) {

            link.classList.add("active");

        }

    });

});


// =========================================
// TOMBOL INSTAGRAM
// =========================================

const instagramLinks =
    document.querySelectorAll(
        'a[href*="instagram.com"]'
    );


instagramLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        console.log(
            "Membuka Instagram @ycxthc"
        );

    });

});


// =========================================
// NOMOR TELEPON
// =========================================

const phoneLinks =
    document.querySelectorAll(
        'a[href^="tel:"]'
    );


phoneLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        console.log(
            "Menghubungi Lumban: 082231410876"
        );

    });

});