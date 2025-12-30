document.addEventListener("DOMContentLoaded", () => {

  const roles = [
    "Data Scientist",
    "Data Analyst",
    "Public Speaker",
    "UI/UX Designer",
    "Cloud Engineer",
    "Content Writer"
  ];

  const roleSpan = document.querySelector(".role");

  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function typeEffect() {
    if (!roleSpan) return;

    const currentRole = roles[roleIndex];

    if (!isDeleting) {
      roleSpan.textContent = currentRole.substring(0, charIndex + 1);
      charIndex++;
    } else {
      roleSpan.textContent = currentRole.substring(0, charIndex - 1);
      charIndex--;
    }

    if (!isDeleting && charIndex === currentRole.length) {
      setTimeout(() => isDeleting = true, 1200);
    }

    if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
    }

    setTimeout(typeEffect, isDeleting ? 60 : 100);
  }

  // 🔥 THIS LINE WAS MISSING
  typeEffect();

});

document.addEventListener("DOMContentLoaded", () => {

    const logoText = document.querySelector(".logo");   // ONLY the word "Portfolio"
    const homeSection = document.querySelector(".home");

    if (!logoText || !homeSection) return;

    window.addEventListener("scroll", () => {
        const homeBottom =
            homeSection.offsetTop + homeSection.offsetHeight - 100;

        if (window.scrollY < homeBottom) {
            logoText.style.visibility = "visible";
        } else {
            logoText.style.visibility = "hidden";
        }
    });

});
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
        }
    });
});


