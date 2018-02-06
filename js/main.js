"use strict";

console.log("Hello main.js");

let translateToChinese = require("./chinese");
// Brittany,
// Hayden,
// Jeremy

let translator = {
  translateToChinese
  // Brittany,
  // Hayden,
  // Jeremy
};

console.log(translator.translateToChinese());

function dropDown() {
    document.getElementById("whichLang").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
};
