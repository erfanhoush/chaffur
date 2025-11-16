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
}

navBarBtn.addEventListener("click", () => {
    handleNavBar();
});

overlay.addEventListener("click", () => {
    handleNavBar();
});