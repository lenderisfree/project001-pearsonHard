//Elements Selection
const menuBtn = document.querySelector("#menu");
const closeMenuBtn = document.querySelector("#close-menu");
const menu = document.querySelector("#mobile-navbar");

const desktopLinks = document.querySelectorAll("#navbar a");
const mobileLinks = document.querySelectorAll("#mobile-navbar a");
const allLinks = [...desktopLinks, ...mobileLinks];

const slides = document.querySelectorAll(".banner");
const dots = document.querySelectorAll(".dot");
let slideIndex = 0;

//Functions

function smoothScroll(e) {
  e.preventDefault(); //consigo inibir comportamentos padrão de algum elemento usando o preventDefault, evitando a poluição da URL, por exemplo.

  const href = this.getAttribute("href"); //o this vai apontar/direcionar para o link clicado.
  const offsetTop = document.querySelector(href).offsetTop;

  scroll({
    top: offsetTop,
    behavior: "smooth",
  });

  setTimeout(() => {
    if (menu.classList.contains("menu-active")) {
      menu.classList.remove("menu-active");
    }
  }, 400);
}

function showSlides() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
    dots[i].classList.remove("active");
  }

  slideIndex++;

  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  slides[slideIndex - 1].classList.add("active");
  dots[slideIndex - 1].classList.add("active");

  setTimeout(showSlides, 3000);
}

//Home scroll
function showHomeIconOnScroll() {
  const homeIcon = document.querySelector("#link-home");
  const threshold = 200;

  window.addEventListener("scroll", function () {
    if (this.window.scrollY > threshold) {
      homeIcon.style.display = "block";
    } else {
      homeIcon.style.display = "none";
    }
  });
}

window.addEventListener("load", function () {
  showHomeIconOnScroll();
});

//Events
[menuBtn, closeMenuBtn].forEach((btn) => {
  btn.addEventListener("click", (e) => {
    menu.classList.toggle("menu-active"); //o toggle quer dizer que, se a classe existir, ele remove, se ela não existir, ela coloca. Ou seja, ele alterna.
  });
});

allLinks.forEach((link) => {
  link.addEventListener("click", smoothScroll);
});

//Initialization

showSlides();
