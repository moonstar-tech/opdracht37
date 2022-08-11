const navMenu = document.querySelector(".nav-menu")
const navLinks = document.querySelector(".nav-links")


navMenu.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    navLinks.classList.toggle("active");
})

document.querySelectorAll(".nav-links").forEach(n => n.
    addEventListener("click", () => {
        navLinks.classList.remove("active");
    }))


    
    function changeBodyBg(color){
        document.body.style.background = color;
    }