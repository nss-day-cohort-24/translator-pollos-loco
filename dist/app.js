(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

 // var dictionary = {"happy":"快乐", "presidents'":"总统", "day":"天"}

function chinese(string) {
  return string;
}

module.exports = chinese;

},{}],2:[function(require,module,exports){
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
  if (event.target.matches('.dropbtn')) {

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

},{"./chinese":1}]},{},[2]);
