/*jslint browser */
/*global window */
/*jslint devel: true */
// JavaScript Document

// background fade

var colors = ['rgb(243, 196, 68)', 'rgb(219, 122, 0)', 'rgb(66, 36, 210)', 'rgb(54, 72, 214)'];
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
    if (window.scrollY > 2500) {
        a = 3;
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

// var rotatediv = document.getElementById("rotatediv");
// var rotateimg = document.getElementById("rotateimg");
// var rotatediv2 = document.getElementById("rotatediv2");
// var rotateimg2 = document.getElementById("rotateimg2");

var rotate = document.getElementsByClassName('section');

window.addEventListener("scroll", function () {
    "use strict";
    if (window.scrollY > 300) {
        rotate.style.transform = "rotate(-" + (window.pageYOffset - 700) / 70 + "deg)";
        // rotatediv.style.transform = "rotate(-" + (window.pageYOffset - 700) / 70 + "deg)";
        // rotateimg.style.transform = "rotate(-" + (window.pageYOffset - 700) / 70 + "deg)";
    }
    if (window.scrollY > 1200) {
        rotate.style.transform = "rotate(-" + (window.pageYOffset - 1500) / 70 + "deg)";
        // rotatediv2.style.transform = "rotate(-" + (window.pageYOffset - 1500) / 70 + "deg)";
        // rotateimg2.style.transform = "rotate(-" + (window.pageYOffset - 1500) / 70 + "deg)";
    }
});