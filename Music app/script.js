let menu_button = document.getElementById("menu-btn");
let body = document.getElementById("body");

menu_button.addEventListener("click", () => {
    menu_button.classList.toggle("background-color-gray");
    body.classList.toggle("background-color-white");

    let h3Elements = document.querySelectorAll(".h3");
    h3Elements.forEach(element => {
        element.classList.toggle("black");
        element.classList.toggle("white");
    });

    let btn = document.querySelectorAll(".btn");
    btn.forEach(element => {
        element.classList.toggle("black");
        element.classList.toggle("white");
    });

    document.querySelector(".search").classList.toggle("black");
    document.querySelector(".search").classList.toggle("white");

    let anchorElements = document.getElementsByTagName("a");
    for (let element of anchorElements) {
        element.classList.toggle("black");
        element.classList.toggle("white");
    }
});


let toggle_left = document.querySelector(".toggle-left");
let left = document.querySelector(".left");
let close = document.querySelector(".close");


close.addEventListener("click", () => {
    left.style.width = "0px";
    let children = left.children;
    for (let i = 0; i < children.length; i++) {
        children[i].style.display = "none";
    }
});
toggle_left.addEventListener("click", () => {
    left.style.width = "70vw";
    left.style.display = "block";
    let children = left.children;
    for (let i = 0; i < children.length; i++) {
        children[i].style.display = "";
    }
});


document.querySelector(".profile-btn").addEventListener("click", () => {
    document.querySelector(".profile").classList.toggle("show");

});


// Slider 
let next = document.getElementById("next");
let prev = document.getElementById("prev");
let cardsContainer = document.querySelector(".cards");
let boxes = document.querySelectorAll(".boxes");

let cardWidth = boxes[0].offsetWidth + parseInt(window.getComputedStyle(boxes[0]).marginRight);
console.log(cardWidth);
let scrollPosition = 0;

next.addEventListener("click", () => {
    if (scrollPosition < (cardWidth * (boxes.length - 1))) {
        scrollPosition += cardWidth;
        cardsContainer.scrollTo({
            left: scrollPosition,
            behavior: "smooth"
        });
    }
});

prev.addEventListener("click", () => {
    if (scrollPosition > 0) {
        scrollPosition -= cardWidth;
        cardsContainer.scrollTo({
            left: scrollPosition,
            behavior: "smooth"
        });
    }
});