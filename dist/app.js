(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

console.log("Hello main.js");

// let translateToChinese = require("./chinese");
let translateToSpanish = require("./spanish");
// let translateToArabic = require("./");
// let translateToJapanese = require("./");

let translator = {
  // translateToChinese,
  translateToSpanish
  // translateToArabic,
  // translateToJapanese
};

// console.log(translator.translateToChinese());

// function dropDown() {
//     document.getElementById("whichLang").classList.toggle("show");
// }

// window.onclick = function(event) {
//   if (!event.target.matches('.dropbtn')) {

//     var dropdowns = document.getElementsByClassName("dropdown-content");
//     var i;
//     for (i = 0; i < dropdowns.length; i++) {
//       var openDropdown = dropdowns[i];
//       if (openDropdown.classList.contains('show')) {
//         openDropdown.classList.remove('show');
//       }
//     }
//   }
// };

},{"./spanish":2}],2:[function(require,module,exports){
"use strict";

function Phrase(happy, presidents, day) {
    this.happy = happy;
    this.presidents = presidents;
    this.day = day;
}

var greetingSpanish = new Phrase("Feliz", "Presidente", "Dia");
var greetingChinese = new Phrase("快乐", "总统", "天");
var greetingArabic = new Phrase("السعيدة", "الرئيس", "يوم");
var greetingJapanese = new Phrase("ハッピー", "大統領の", "日");
var greetingEnglish = new Phrase("Happy", "President's", "Day");

var greetingPhrase = document.getElementById("greeting");

var userInput = document.getElementById("userInput");
// if (userInput.value === "Happy President's Day") {
//     console.log("success")
// }
// else {
//     console.log("failure");
// }

function checkSelection(e) {
    e.preventDefault();
    if (userInput.value === "Happy President's Day") {
        console.log("success");
    


    switch(document.getElementById("language").value) {
        case "spanish" :
            greetingPhrase.innerHTML = "";
            for (var key in greetingSpanish) {
                greetingPhrase.innerHTML += greetingSpanish[key] + " ";
            }
            break;

        case "chinese" :
            greetingPhrase.innerHTML = "";
            for (key in greetingChinese) {
                greetingPhrase.innerHTML += greetingChinese[key] + " ";
            }
            break;

        case "arabic" :
            greetingPhrase.innerHTML = "";
            for (key in greetingArabic) {
                greetingPhrase.innerHTML += greetingArabic[key] + " ";
            }
            break;
        
        case "japanese" :
            greetingPhrase.innerHTML = "";
            for (key in greetingJapanese) {
                greetingPhrase.innerHTML += greetingJapanese[key] + " ";
            }
            break;

        case "english" :
            greetingPhrase.innerHTML = "";
            for (key in greetingEnglish) {
                greetingPhrase.innerHTML += greetingEnglish[key] + " ";
            }
            break;    
    }

    } else {
        greetingPhrase.innerHTML = "Enter Something";
    }
}

document.getElementById("submit-btn").addEventListener("click", checkSelection);


// console.log(add(2, 4));
},{}]},{},[1]);
