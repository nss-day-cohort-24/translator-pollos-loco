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
        var speakSpanish = new SpeechSynthesisUtterance(translateToSpanish);
        window.speechSynthesis.speak(speakSpanish);
        document.getElementById("greeting").innerHTML = translateToSpanish;
            break;

        case "chinese" :
        var speakChinese = new SpeechSynthesisUtterance("Kuàilè de zǒngtǒng rì");
        window.speechSynthesis.speak(speakChinese);
        document.getElementById("greeting").innerHTML = translateToChinese;
            break;

        case "arabic" :
        var speakArabic = new SpeechSynthesisUtterance("saeidat ruasa' alyawm");
        window.speechSynthesis.speak(speakArabic);
        document.getElementById("greeting").innerHTML = translateToArabic;
            break;
        
        case "japanese" :
        var speakJapanese = new SpeechSynthesisUtterance("Shiawasena daitōryō no hi");
        window.speechSynthesis.speak(speakJapanese);
        document.getElementById("greeting").innerHTML = translateToJapanese;
            break;

        case "english" :
        var speakEnglish = new SpeechSynthesisUtterance("Happy Presidents Day");
        window.speechSynthesis.speak(speakEnglish);
        document.getElementById("greeting").innerHTML = translateToEnglish;
            break;    
    }

    } else {
        greetingPhrase.innerHTML = "Enter something real -___-";
    }
}

document.getElementById("submit-btn").addEventListener("click", checkSelection);


// // console.log(add(2, 4));




