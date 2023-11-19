const toggleBtn = document.getElementById("toggle-btn");
const nav = document.getElementById("nav");
const icon = document.getElementsByClassName("fa-bars")[0];

let isNavOpened = false;
toggleBtn.addEventListener("click", () => {
    nav.classList.toggle("hidden");
    console.log(icon.classList);
    if (isNavOpened) icon.classList.replace("fa-xmark", "fa-bars");
    else icon.classList.replace("fa-bars", "fa-xmark");
    isNavOpened=!isNavOpened;
});