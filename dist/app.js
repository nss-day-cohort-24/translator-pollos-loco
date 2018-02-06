(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

function Phrase(happy, presidents, day) {
    this.happy = happy;
    this.presidents = presidents;
    this.day = day;
}

var greetingPhrase = document.getElementById("greeting");

var userInput = document.getElementById("userInput");

var greetingArabic = new Phrase("السعيدة", "الرئيس", "يوم");

// console.log("work thanks");
function translateArabic(e){      
console.log("success");
var   greetingPhrase = "";
                for (var key in greetingArabic) {
                    greetingPhrase += greetingArabic[key] + " ";
                }
                return greetingPhrase;  
            }        
        
var test = "test";
var arabicTranslation = translateArabic();
module.exports = arabicTranslation;

},{}],2:[function(require,module,exports){
"use strict";

function Phrase(happy, presidents, day) {
    this.happy = happy;
    this.presidents = presidents;
    this.day = day;
}

var greetingPhrase = document.getElementById("greeting");

var userInput = document.getElementById("userInput");

var greetingChinese = new Phrase("快乐", "总统", "天");

// console.log("work thanks");
function translateChinese(e){      
console.log("success");
var   greetingPhrase = "";
                for (var key in greetingChinese) {
                    greetingPhrase += greetingChinese[key] + " ";
                }
                return greetingPhrase;  
            }        
        
var test = "test";
var chineseTranslation = translateChinese();
module.exports = chineseTranslation;

},{}],3:[function(require,module,exports){
"use strict";

function Phrase(happy, presidents, day) {
    this.happy = happy;
    this.presidents = presidents;
    this.day = day;
}

var greetingPhrase = document.getElementById("greeting");

var userInput = document.getElementById("userInput");

var greetingEnglish = new Phrase("Happy", "President's", "Day");

// console.log("work thanks");
function translateEnglish(e){      
console.log("success");
var   greetingPhrase = "";
                for (var key in greetingEnglish) {
                    greetingPhrase += greetingEnglish[key] + " ";
                }
                return greetingPhrase;  
            }        
        
var test = "test";
var englishTranslation = translateEnglish();
module.exports = englishTranslation;
},{}],4:[function(require,module,exports){
"use strict";

function Phrase(happy, presidents, day) {
    this.happy = happy;
    this.presidents = presidents;
    this.day = day;
}

var greetingPhrase = document.getElementById("greeting");

var userInput = document.getElementById("userInput");

var greetingJapanese = new Phrase("ハッピー", "大統領の", "日");

// console.log("work thanks");
function translateJapanese(e){      
console.log("success");
var   greetingPhrase = "";
                for (var key in greetingJapanese) {
                    greetingPhrase += greetingJapanese[key] + " ";
                }
                return greetingPhrase;  
            }        
        
var test = "test";
var japaneseTranslation = translateJapanese();
module.exports = japaneseTranslation;


},{}],5:[function(require,module,exports){
"use strict";

console.log("Hell main.js");

let translateToChinese = require("./chinese");
let translateToSpanish = require("./spanish");
let translateToArabic = require("./arabic");
let translateToJapanese = require("./japanese");
let translateToEnglish = require("./english");

let translator = {
  translateToChinese,
  translateToSpanish,
  translateToArabic,
  translateToJapanese,
  translateToEnglish
};

console.log(translateToJapanese);
console.log(translateToSpanish);
console.log(translateToChinese);
console.log(translateToArabic);
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

function Phrase(happy, presidents, day) {
    this.happy = happy;
    this.presidents = presidents;
    this.day = day;
}




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
        document.getElementById("greeting").innerHTML = translateToSpanish;
            break;

        case "chinese" :
        document.getElementById("greeting").innerHTML = translateToChinese;
            break;

        case "arabic" :
        document.getElementById("greeting").innerHTML = translateToArabic;
            break;
        
        case "japanese" :
            document.getElementById("greeting").innerHTML = translateToJapanese;
            break;

        case "english" :
        document.getElementById("greeting").innerHTML = translateToEnglish;
            break;    
    }

    } else {
        greetingPhrase.innerHTML = "Enter Something";
    }
}

document.getElementById("submit-btn").addEventListener("click", checkSelection);


// // console.log(add(2, 4));


},{"./arabic":1,"./chinese":2,"./english":3,"./japanese":4,"./spanish":6}],6:[function(require,module,exports){
"use strict";

function Phrase(happy, presidents, day) {
    this.happy = happy;
    this.presidents = presidents;
    this.day = day;
}

var greetingPhrase = document.getElementById("greeting");

var userInput = document.getElementById("userInput");

var greetingSpanish = new Phrase("Feliz", "Presidente", "Dia");

// console.log("work thanks");
function translateSpanish(e){      
console.log("success");
var   greetingPhrase = "";
                for (var key in greetingSpanish) {
                    greetingPhrase += greetingSpanish[key] + " ";
                }
                return greetingPhrase;  
            }        
        
var test = "test";
var spanishTranslation = translateSpanish();
module.exports = spanishTranslation;






































},{}]},{},[5]);
