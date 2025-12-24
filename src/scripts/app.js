import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


const navBar = document.querySelector(".mobile-options__container");
const navBarBtn = document.querySelector(".option");
const navBarIcon = document.querySelector(".nav-icon");
const overlay = document.querySelector(".overlay");

let isOpen = false;

const handleNavBar = () => {
  isOpen = !isOpen;
  if (isOpen) {
    navBar.style.right = 0;
    overlay.style.display = "block";
    navBarIcon.setAttribute("href", "#xmark");
  } else {
    navBar.style.right = "-250px";
    navBarIcon.setAttribute("href", "#bars");
    overlay.style.display = "none";
  }
};

navBarBtn.addEventListener("click", () => {
  handleNavBar();
});

overlay.addEventListener("click", () => {
  handleNavBar();
});

const fleetswiper = new Swiper(".fleet-swiper", {
  modules: [Navigation, Pagination],
  slidesPerView: 3,
  spaceBetween: 29,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".right-nav",
    prevEl: ".left-nav",
  },
  breakpoints: {
    320: {
      slidesPerView: 1.2,
    },
    480: {
      slidesPerView: 1.8,
    },
    640: {
      slidesPerView: 2.3,
    },
    768: {
      slidesPerView: 2.5,
    },
    992: {
      slidesPerView: 2.8,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});
const testimonials = new Swiper(".testimonials-swiper", {
   modules: [Pagination],
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
const testimonialsmob = new Swiper(".testimonials-mob_swiper", {
   modules: [Pagination],
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

const btn = document.querySelector("#toggle");
const textarea = document.querySelector("#message");
const textareaBox = document.querySelector(".textarea-box");

let expanded = false;

btn.addEventListener("click", () => {
  expanded = !expanded;

  textarea.style.height = expanded ? "120px" : "54px";
  textareaBox.style.height = expanded ? "120px" : "54px";
  btn.textContent = expanded ? "▲" : "▼";
});

const homeBtn = document.querySelector("#home-btn");

homeBtn.addEventListener("click", () => {
  window.scrollTo(0, 0);
});

const now = new Date();

const year = document.querySelector("#year");

year.textContent = now.getFullYear();
