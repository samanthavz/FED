// JavaScript Document
// Code written by Samantha van Zandwijk

//----------------------------
//sennep logo goes to homepage 
//----------------------------

var logo = document.getElementById("logo");

logo.addEventListener("click", function(){
    location.href = "./index.html";
    console.log("click");
});

//------------------
// background fade
//------------------

var colors = ['rgb(243, 196, 68)', 'rgb(219, 122, 0)', 'rgb(66, 36, 210)', 'rgb(54, 72, 214)', 'rgb(255,255,255)'];
var body = document.getElementById("body");
var a = 0;
var height = body.scrollHeight;
var finger = document.getElementById("finger");

var pathname = window.location.pathname;

// ---------------------------------------
// ---------------------------------------
// deze functie start alleen op index.html
// ---------------------------------------
// ---------------------------------------

if (pathname.includes("index.html")) {

window.onscroll = function () {
    console.log(window.scrollY); // Value of scroll Y in px
    var ffinger = document.getElementById("ffinger");

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
    if (window.scrollY > 2750) {
        a = 4;
    }
    //bottom finger ani
    if ((window.scrollY > 6529 && screen.height < 580) || window.scrollY > 7180) {
        a = 0;
        ffinger.style.bottom = "-30vh";
    }
    if ((window.scrollY < 6629 && screen.height < 580) || window.scrollY < 7177) {
        ffinger.style.bottom = "-60vh";
    }
    //top finger ani
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
}; 

// ---------------------------------------
// ---------------------------------------
// deze functie start alleen op about.html
// ---------------------------------------
// ---------------------------------------

if (pathname.includes("about.html")) {

    window.onscroll = function () {
        console.log(window.scrollY); // Value of scroll Y in px
        var ffinger = document.getElementById("ffinger");
    
        if (window.scrollY > 0) {
            a = 0;
        }
        if (window.scrollY > 3200) {
            a = 4;
        }
        if (window.scrollY > 4999) {
            a = 0;
        }
        //bottom finger ani
        if ((window.scrollY > 6529 && screen.height < 580) || window.scrollY > 5737) {
            ffinger.style.bottom = "-30vh";
        }
        if ((window.scrollY < 6629 && screen.height < 580) || window.scrollY < 5738) {
            ffinger.style.bottom = "-60vh";
        }
        //top finger ani
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
};



// ---------------
// more finger ani
// ---------------

window.onload = function () {
    finger.style.top = "38vh";
    finger.style.right = "-25vw";
    finger.style.transform = "rotate(-30deg)";
};

// ---------------------------
// icon change when on desktop
// ---------------------------

window.onresize = function () {
    if (window.innerWidth > 1100) {
        logo.src = "./images/logo2.PNG";
    } else {
        logo.src = "./images/SennepLogoMobile.PNG";
    }
};

// ---------------------
//move image when scroll
// ---------------------

var rotate = document.querySelectorAll('section > div');
// deze functie start alleen op index.html
if (pathname.includes("index.html")) {

    window.addEventListener("scroll", function () {
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
};

// -------------
//hamburger menu
// -------------

var button = document.getElementById("hamburgerbutton");
var main = document.querySelector("main");
var footer = document.querySelector("footer");
var nav = document.getElementById("nav");
var display = window.getComputedStyle(nav).display;
var hamburger = document.getElementById("hamburgerimg");

button.addEventListener('click', function () {
    main.classList.toggle("hiddenmain");
    footer.classList.toggle("hiddenmain");
    if (display === "none") {
        nav.style.display = "block";
        display = "block";
        hamburger.src = "./images/kruis.PNG";
    } else if (display === "block") {
        nav.style.display = "none";
        display = "none";
        hamburger.src = "./images/sennephamburger.PNG";
    }
});



// -------------------
//expand meet our team
// -------------------
if (pathname.includes("about.html")) {

let check = false;
let klikgebied1 = document.getElementById("plus1");

klikgebied1.addEventListener("click", function() {

    let imgperson1 = document.getElementById("person1");
    let plusknop1 = document.getElementById("buttona1");
    let hiddenp1 = document.getElementById("hiddenp1");
    // ! betekent omgekeerde van wat het was
    check = !check;
    if (check) {
        imgperson1.src = "./images/Team1b.PNG";
        plusknop1.src = "./images/min.png"
        hiddenp1.style.visibility = "visible"

    } else {
        imgperson1.src = "./images/Team1a.PNG";
        plusknop1.src = "./images/plus.png"
        hiddenp1.style.visibility = "hidden"
    }
})


let klikgebied2 = document.getElementById("plus2");
let check1 = false;

klikgebied2.addEventListener("click", function() {

    let imgperson2 = document.getElementById("person2");
    let plusknop2 = document.getElementById("buttona2");
    let hiddenp2 = document.getElementById("hiddenp2");
    // ! betekent omgekeerde van wat het was
    check1 = !check1;
    if (check1) {
        imgperson2.src = "./images/Team2b.PNG";
        plusknop2.src = "./images/min.png"
        hiddenp2.style.visibility = "visible"

    } else {
        imgperson2.src = "./images/Team2a.PNG";
        plusknop2.src = "./images/plus.png"
        hiddenp2.style.visibility = "hidden"
    }
})

let klikgebied3 = document.getElementById("plus3");
let check2 = false;

klikgebied3.addEventListener("click", function() {

    let imgperson3 = document.getElementById("person3");
    let plusknop3 = document.getElementById("buttona3");
    let hiddenp3 = document.getElementById("hiddenp3");
    // ! betekent omgekeerde van wat het was
    check2 = !check2;
    if (check2) {
        imgperson3.src = "./images/Team3b.PNG";
        plusknop3.src = "./images/min.png"
        hiddenp3.style.visibility = "visible"

    } else {
        imgperson3.src = "./images/Team3a.PNG";
        plusknop3.src = "./images/plus.png"
        hiddenp3.style.visibility = "hidden"
    }
})
};
//Ik heb maar 3 van de 6 uitgewerkt, omdat ik het principe wel snap en ik niet 
//6x dezelfde code wil copy pasten. Het is me nog niet gelukt om hier 1 functie voor de schrijven.



    
 




