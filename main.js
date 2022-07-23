const nav=document.querySelector(".mobile_nav");
const burger=document.querySelector(".header_burger");
const onBurgerToggle=()=>{
    burger.classList.toggle ("header_burger__active");
    nav.classList.toggle("mobile_nav__active");
}
burger.addEventListener("click",onBurgerToggle);
const navLinks=nav.querySelectorAll(".mobile_nav_link");
navLinks.forEach(link=>{
    link.addEventListener("click",onBurgerToggle);
})