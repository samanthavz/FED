/*jslint browser */
/*global window */
/*jslint devel: true */
// JavaScript Document

// background fade

var colors = ['rgb(243, 196, 68)', 'rgb(219, 122, 0)', 'rgb(66, 36, 210)', 'rgb(54, 72, 214)', 'rgb(255,255,255)'];
var body = document.getElementById("body");
var a = 0;
var height = body.scrollHeight;
var finger = document.getElementById("finger");


window.onscroll = function () {
    "use strict";
    console.log(window.scrollY); // Value of scroll Y in px

    if (window.scrollY > 0) {
        a = 0;
    }
    if (window.scrollY > 200) {
        a = 1;
    }
    if (window.scrollY > 1200) {
        a = 2;
    }
    if (window.scrollY > 2100) {
        a = 3;
    }

    if (window.scrollY > 3050) {
        a = 4;
    }
        //finger ani
    if (window.scrollY > 100) {
        finger.style.top = "50vh";
        finger.style.right = "-20vw";
        finger.style.transform = "rotate(0deg)";
        finger.style.transition = "0.4";
    }
    if (window.scrollY < 100) {
        finger.style.top = "38vh";
        finger.style.right = "-25vw";
        finger.style.transform = "rotate(-30deg)";
    }

    body.style.backgroundColor = colors[a];
};

// more finger ani

window.onload = function () {
    "use strict";
    finger.style.top = "38vh";
    finger.style.right = "-25vw";
    finger.style.transform = "rotate(-30deg)";
};

// icon change when on desktop

var logo = document.getElementById("logo");
window.onresize = function () {
    "use strict";
    if (window.innerWidth > 1100) {
        logo.src = "./images/logo2.png";
    } else {
        logo.src = "./images/SennepLogoMobile.png";
    }
};

//move image when scroll

var rotate = document.querySelectorAll('section > div');

window.addEventListener("scroll", function () {
    "use strict";
    if (window.scrollY > 300) {
        rotate[0].style.transform = "rotate(-" + (window.pageYOffset - 700) / 70 + "deg)";
        rotate[1].style.transform = "rotate(-" + (window.pageYOffset - 700) / 70 + "deg)";
    }
    if (window.scrollY > 1200) {
        rotate[2].style.transform = "rotate(-" + (window.pageYOffset - 1500) / 70 + "deg)";
        rotate[3].style.transform = "rotate(-" + (window.pageYOffset - 1500) / 70 + "deg)";
    }
    if (window.scrollY > 2500) {
        rotate[4].style.transform = "rotate(-" + (window.pageYOffset - 2500) / 70 + "deg)";
        rotate[5].style.transform = "rotate(-" + (window.pageYOffset - 2500) / 70 + "deg)";
    }
});