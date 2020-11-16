/*jslint browser */
/*global window */
/*jslint devel: true */
// JavaScript Document

// background fade

var colors = ['rgb(243, 196, 68)', 'rgb(66, 36, 210)'];
var body = document.getElementById("body");
var a = 0;
var height = body.scrollHeight;


window.onscroll = function () {
    "use strict";
    console.log(window.scrollY); // Value of scroll Y in px

    if (window.scrollY > 0) {
        a = 0;
    }
    if (window.scrollY > 500) {
        a = 1;
    }

    body.style.backgroundColor = colors[a];
};






