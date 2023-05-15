const openBtn = document.querySelector(".open");
const closeBtn = document.querySelector(".close");
const navItems = document.querySelector(".navItems");


openBtn.addEventListener("click", openNav);
closeBtn.addEventListener("click", closeNav);

function openNav() {
    navItems.style.right = "0";
}

function closeNav() {
    navItems.style.right = "-250px";
}