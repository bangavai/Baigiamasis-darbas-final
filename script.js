"use strict";

const burger = document.querySelector('#burger');
const links = document.querySelector('.links');
const anchors = links.querySelectorAll('a');

burger.addEventListener('click', function () {
    burger.classList.toggle("rotate");
    links.classList.toggle("show-nav");
});

for(const a of anchors) {
    a.addEventListener('click', function () {
    burger.classList.remove("rotate");
    links.classList.remove("show-nav");
    });
}

const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
      nextEl: '.swiper-pagination',
      prevEl: '.swiper-pagination',
    },

  });


const tabs = document.querySelectorAll(".main-information");
const buttons = document.querySelectorAll(".tab");

for (let i = 0; i < tabs.length; i++) {
  tabs[i].style.display = "none";
}

function showTab(e, id) {
 
  for (let i = 0; i < tabs.length; i++) {
    tabs[i].style.display = "none";
  }

  document.getElementById(id).style.display = "block";
}

