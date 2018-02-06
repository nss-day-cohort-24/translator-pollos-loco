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
