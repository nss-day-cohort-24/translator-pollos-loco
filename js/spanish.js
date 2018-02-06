
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
        console.log("success")
    


    switch(document.getElementById("language").value) {
        case "spanish" :
            greetingPhrase.innerHTML = "";
            for (key in greetingSpanish) {
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
