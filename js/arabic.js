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
