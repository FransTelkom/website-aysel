document.addEventListener("DOMContentLoaded", () => {
  const lightbox = document.getElementById("lightbox");

  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
      closeLightbox();
    }
  });

  const cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    const img = card.querySelector("img").src;
    const title = card.querySelector("h3").textContent;
    const desc = card.querySelector("p").textContent;

    card.addEventListener("click", () => {
      openLightbox(img, title, desc);
    });
  });

  const menuToggle = document.getElementById("mobile-menu");
  const navLinks = document.getElementById("nav-links");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });

    navLinks.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("active");
      });
    });
  }
});

function openLightbox(imgSrc, title, desc) {
  const lightbox = document.getElementById("lightbox");
  const img = document.getElementById("lightbox-img");
  const h3 = document.getElementById("lightbox-title");
  const p = document.getElementById("lightbox-desc");

  img.src = imgSrc;
  h3.textContent = title;
  p.textContent = desc;

  lightbox.style.display = "flex";
  
  void lightbox.offsetWidth;

  lightbox.classList.add("show");
}

function closeLightbox() {
  const lightbox = document.getElementById("lightbox");
  lightbox.classList.remove("show");

  setTimeout(() => {
    lightbox.style.display = "none";
  }, 400);
}

document.addEventListener("DOMContentLoaded", function () {
  const mobileMenu = document.getElementById("mobile-menu");
  const navLinks = document.getElementById("nav-links");

  mobileMenu.addEventListener("click", function () {
    navLinks.classList.toggle("show");
  });
});