
function Phrase(happy, presidents, day) {
    this.happy = happy;
    this.presidents = presidents;
    this.day = day;
}

var greetingSpanish = new Phrase("Feliz", "Presidente", "Dia");
var greetingChinese = new Phrase("快乐", "总统", "天");
var greetingArabic = new Phrase("السعيدة", "الرئيس", "يوم");
var greetingJapanese = new Phrase("ハッピー", "大統領の", "日");

var greetingPhrase = document.getElementById("greeting");

function checkSelection(e) {
    e.preventDefault();

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
    }
}

document.getElementById("submit-btn").addEventListener("click", checkSelection);
