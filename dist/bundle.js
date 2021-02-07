/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/game.js":
/*!************************!*\
  !*** ./src/js/game.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu */ "./src/js/menu.js");
var verses = ["kkxzk", "kxzj", "jxzj", "jxzH", "Hxzk", "kxzj", "jxzj"];
var started = true;
var userInput = "";
var verseIndex = 0;
var verseCharIndex = 0;
var prompt = verses[verseIndex];
var promptArr = [];
var correctCount = 0;

console.log(_menu__WEBPACK_IMPORTED_MODULE_0__.default);

function initiateGame() {
  if (document.getElementById("load-marker") !== null) {
    correctCount = 0;
    verseIndex = 0;
    verseCharIndex = 0;
    alert(songTitle);
    document.getElementById("score-percent").innerHTML = "";
    document.getElementById("song-title").innerHTML = songTitle;
    document.getElementById("prompt-input").innerHTML = prompt;
  }
}

document.addEventListener("DOMContentLoaded", initiateGame);

function songSelect() {
  songTitle = document.getElementById("track-list").value;
  alert(songTitle);
}

document.addEventListener("keyup", function (event) {
  if (event.key !== "Shift") {
    if (verseIndex < verses.length) {
      var verse = verses[verseIndex].split("");

      if (verse[verseCharIndex] !== event.key) {
        verse[verseCharIndex] = "<span class='error'>" + verse[verseCharIndex] + "</span>";
      } else {
        verse[verseCharIndex] = "<span class='correct'>" + verse[verseCharIndex] + "</span>";
        correctCount++;
      } //document.getElementById("prompt-input").innerHTML = verse.join("")


      verseCharIndex++;
      promptArr[verseIndex] = verse.join("");
      document.getElementById("prompt-input").innerHTML = promptArr.join(" ");

      if (verseCharIndex === verses[verseIndex].length) {
        //tag on a space and increment the index
        verseIndex++;
        promptArr[verseIndex] = verses[verseIndex];
        document.getElementById("prompt-input").innerHTML = promptArr.join(" ");
        verseCharIndex = 0;
      }
    } else {
      calcScore(verses.join("").length);
    } // document.getElementById("prompt-input").innerHTML = verses[verseIndex]
    //console.log(userInput.length < newVerse.length)
    //  userInput += event.key;
    //  if(verseIndex< verses.length){
    //      document.getElementById("prompt-input").innerHTML = prompt
    //  }else{
    //      document.getElementById("prompt-input").innerHTML = "Game Over"
    //  }
    // if(charCount < verses[verseIndex].length - 1){
    //     if(verses[verseIndex][charCount] !== event.key){
    //       prompt += "<span class='error'>"+prompt+"</span>"
    //     } 
    //    // document.getElementById("user-input").innerHTML = userInput
    //     charCount++
    // }else{
    //     verseIndex++;
    //     prompt += " " + verses[verseIndex]
    //     userInput += " "
    //     charCount = 0
    //     document.getElementById("prompt-input").innerHTML = prompt
    //     //document.getElementById("user-input").innerHTML = ""
    //     //document.getElementById("prompt-input").innerHTML = + " " //verses[verseIndex]
    //     charCount = 0
    // }

  }
});

function calcScore(total) {
  var score = Math.ceil(correctCount / total * 100);
  document.getElementById("score-percent").innerHTML = score + "%";

  if (score <= 60) {
    document.getElementById("prompt-input").innerHTML = "Game Over, better luck next time";
  } else {
    document.getElementById("prompt-input").innerHTML = "Nice Job!!!";
  }
} //let Noteverses = ["A4 A4 E5 D5 A4", "A4 E5 D5 G4", "G4 E5 D5 G4", "G4 E5 D5 F#4", "F#4 E5 D5 A4", "A4 E5 D5 G4", "G4 E5 D5 G4","G4 E5 D5 F#4", "E5","C#5","" ]

/***/ }),

/***/ "./src/js/menu.js":
/*!************************!*\
  !*** ./src/js/menu.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
var SONGTITLE = "HIEN AND REX";
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SONGTITLE);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/js/game.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=bundle.js.map