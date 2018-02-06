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

