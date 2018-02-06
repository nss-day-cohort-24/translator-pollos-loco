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