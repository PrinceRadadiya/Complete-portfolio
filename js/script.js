"use strict";

//page load

const preloader = document.querySelector("[data-preloader]");

window.addEventListener("load", function () {
  preloader.classList.add("loaded");
  document.body.classList.add("loaded");
});

// phone starting and phone click

const mobile_nav = document.querySelector(".mobile-navbar-btn");
const hadderelem = document.querySelector(".header");

mobile_nav.addEventListener("click", () => {
  hadderelem.classList.toggle("active");
});

// image overlay and hover effect and show and hide

const p_btns = document.querySelector(".p-btns");
const p_btn = document.querySelectorAll(".p-btn");
const p_img_elem = document.querySelectorAll(".img-overlay");

p_btns.addEventListener("click", (e) => {
  const p_btn_clicked = e.target;

  console.log(p_btn_clicked);

  p_btn.forEach((curElem) => {
    curElem.classList.remove(".p-btn-active");
  });

  p_btn_clicked.classList.add(".p-btn-active");

  const btn_num = p_btn_clicked.dataset.btnNum;
  console.log(btn_num);
  // p_img_elem

  const img_active = document.querySelectorAll(`.p-btn--${btn_num}`);
  console.log(img_active);
  p_img_elem.forEach((curElem) => curElem.classList.add("p-image-not-active"));

  img_active.forEach((curElem) =>
    curElem.classList.remove("p-image-not-active")
  );
});

// auto chang slider

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 2,
  spaceBetween: 30,
  autoplay: {
    delay: 1000,
    // disableOnInteraction:false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

const header = document.querySelector(".scroll_to_top");
const footerElem = document.querySelector(".section-footer");

const scroollElement = document.createElement("div");

scroollElement.classList.add("scrollTop-style");

scroollElement.innerHTML = `<ion-icon name="arrow-up-outline" class="scroll-top"></ion-icon>`;

footerElem.after(scroollElement);

const scrollTop = () => {
  header.scrollIntoView({
    behavior: "smooth",
    block: "end",
    inline: "nearest",
  });
  console.log(header);
};
scroollElement.addEventListener("click", scrollTop);

// number system

// const counters = document.querySelectorAll('.counter-number');

// counters.forEach((counter)=>{
//     // console.log(counter);

//     counter.innerHTML = 0;

//     const updateCounter = () =>{
//         const targetCount = +counter.getAttribute('data-number');
//         // console.log(targetCount);

//         const startingConter =  Number(counter.innerhtml);

//         const  incr = targetCount / 100;

//         if(startingConter < targetCount){
//             counter.innerHTML = `${Math.round(startingConter + incr)}`;
//             setTimeout(updateCounter,20) // counter of second
//         }else{
//                 counter.innerHTML = targetCount;
//         }
//     }
//     updateCounter();
// });

const counternum = document.querySelectorAll(".counter-number");

const speed = 200;

counternum.forEach((curElem) => {
  const updatenumber = () => {
    const targetNUMBER = parseInt(curElem.dataset.number);

    const intialnum = parseInt(curElem.innerText);

    const incre = Math.trunc(targetNUMBER / speed);
    // console.log(incre)

    if (intialnum < targetNUMBER) {
      curElem.innerText = `${intialnum + incre}+`;
      setTimeout(updatenumber, 10);
    }
  };

  updatenumber();
});

function loadDoc() {
  try {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("demo").innerHTML = this.responseText;
        document.getElementById("xyz").innerHTML = this.responseText;
      }
    };
    xhttp.open("GET", "../ajax/ajax_info.txt", true);
    xhttp.send();
  } catch (error) {
    console.log("----------------------", error);
  }
}
