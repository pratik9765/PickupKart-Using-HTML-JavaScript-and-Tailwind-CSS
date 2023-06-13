let hiddenSection = document.querySelector("[hamburger]");
let hamburgerButton = document.querySelector("[hamburgerBtn]");
let mailForm = document.querySelector(".yourEmail");
let createPickup = document.querySelector(".createPickup");
let createPickup1 = document.querySelector(".createPickup1");
let createPickupBtn = document.querySelector(".createPickupBtn");
let rateCalculator = document.querySelector(".rateCalculator");
let mainDone = document.querySelector(".mainDone");


hamburgerButton.addEventListener("click", makeVisible);
mailForm.addEventListener("click",makeVisible2);
createPickup.addEventListener("click",makeVisible3);
createPickup1.addEventListener("click",makeVisible3);
mainDone.addEventListener("click",makeUnvisible);


function makeVisible(){
    // hiddenSection.classList.add("active")
    hiddenSection.classList.toggle("active");
}

function makeVisible2(){
    // hiddenSection.classList.add("active")
    rateCalculator.classList.toggle("active");
}

function makeVisible3(){
    // hiddenSection.classList.add("active")
    createPickupBtn.classList.toggle("active");
}

function makeUnvisible(){
    createPickupBtn.classList.toggle("active");
}