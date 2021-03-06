/******/ (() => { // webpackBootstrap
/*!************************!*\
  !*** ./src/js/game.js ***!
  \************************/
function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

// import SONGTITLE from './menu'
// console.log(SONGTITLE)
var verses; //= ["kkxzk","kxzj", "jxzj","jxzH", "Hxzk", "kxzj", "jxzj", ]

var started = true;
var userInput = "";
var verseIndex = 0;
var verseCharIndex = 0;
var prompt; // = verses[verseIndex]

var promptArr = [];
var correctCount = 0;
var freePlayPlaceholder = [""]; // ["kkxzk","kxzj", "jxzj","jxzH", "Hxzk", "kxzj", "jxzj"]

var cheerSound;
var booSound;
var speedOfSoundverses = ["E4,D4,A3,", "A3,E4,D4,G3", "G3,E4,D4,G3", "G3,E4,D4,F#3,F#3", "E4,D4,A3,", "A3,E4,D4,G3", "G3,E4,D4,G3", "G3,E4,D4,F#3,F#3"]; // ["kkxzk","kxzj", "jxzj","jxzH", "Hxzk", "kxzj", "jxzj"]

var bealtesVerses = ["D4,B3", "B3,D4,E4,A3", "A3,B3,C4,G4", "G4,F#4,D4,E4,D4,C4,B3", "D4,E4,E4", "E4,A4,G4,F#4,G4,E4,D4", "G3,A3,B3", "E4,D4,D4,C4", "B3,G3,G3", "D4,B3", "B3,D4,E4,A3", "A3,B3,C4,G4", "G4,F#4,D4,E4,D4,C4,B3", "D4,E4,E4", "E4,A4,G4,F#4,G4,E4,D4", "G3,A3,B3", "E4,D4,D4,C4", "B3,G3,G3"];
var madWorld = ["G#4,C5,G4,G#4,F4,G4,D#4,D4,A#3", "G#4,C5,G4,G#4,F4,G4,G#4,A#4,A#4", "F4,F4,G#4,G#4,F4,F4,C5,C5,C5,G#4", "A#3,A#3,A#3,G3", "A#3,A#3,A#3,G3", "A#3,A#3,A#3,G#3,G3,F3,F3", "F4,F4,G#4,G#4,F4,F4,C5,C5,C5,G#4", "A#3,A#3,A#3,G3", "A#3,A#3,A#3,G3", "A#3,A#3,A#3,G#3,G3,F3,F3", "F4,F4,G#4,G#4,C5,C5,D5,A#4", "A#4,D5,D5,A#4,A#4,F4", "F4,F4,G#4,G#4,C5,C5,D5,A#4", "A#4,D5,D5,A#4,A#4,F4", "F4,G#4,G#4,C5,C5,D5", "A#4,A#4,A#4,D5,D5,A#4,A#4,F4", "F4,G#4,G#4,C5,C5,D5,A#4,A#4,D5,D5,A#4,A#4,F4", "F4,G#4,G#4,C5,C5,D5", "A#4,A#4,A#4,D5,D5,A#4,A#4,F3", "G#4,F4,F4", "G#4,F4,F4"];
var clocks = ["D#5,A#4,G4", "D#5,A#4,G4", "D#5,A#4", "C#5,A#4,F4", "C#5,A#4,F4", "C#5,A#4", "C#5,A#4,F4", "C#5,A#4,F4", "C#5,A#4", "C5,G#4,F4", "C5,G#4,F4", "C5,G#4", "G#5,G5,D#5", "G#5,G5,D#5", "G#5,G5", "G#5,G5,C#5", "G#5,G5,C#5", "G#5,G5", "G#5,G5,C#5", "G#5,G5,C#5", "G#5,G5", "G#5,G5,C5", "G#5,G5,C5", "G#5,G5"]; //let stairwayToheaven =["B3,D4,F#4,B#4,C#5,", "F#4,D4,C#5", "D5,F#4,D4,D5", "G#3,G#4,E4,B3", "G#4,G3,F#4", "D4,D4,F#4,D4","A3,C#4,D4,D4", "G3,F#3"]
// Eb = D#5
// Bb = 
// Db = C#5
// Ab = G#5
// G = G5
// F = F4
// C= C5

var keySwitchArr = new Array(2);
keySwitchArr[0] = ["q", "Q", "w", "W", "e", "r", "R", "t", "T", "y", "Y", "u", "i", "I", "o", "O", "p", "[", "{", "]", "}", "a", "A", "s", "d", "D", "f", "F", "g", "h", "H", "j", "J", "k", "K", "l", ";", ":", "z", "Z", "x", "c", "C", "v", "V", "b", "B", "n", "m", "M", ",", "<", ".", "/", "?", "1", "!", "2", "@", "3", "4"];
keySwitchArr[1] = ["C2", "C#2", "D2", "D#2", "E2", "F2", "F#2", "G2", "G#2", "A2", "A#2", "B2", "C3", "C#3", "D3", "D#3", "E3", "F3", "F#3", "G3", "G#3", "A3", "A#3", "B3", "C4", "C#4", "D4", "D#4", "E4", "F4", "F#4", "G4", "G#4", "A4", "A#4", "B4", "C5", "C#5", "D5", "D#5", "E5", "F5", "F#5", "G5", "G#5", "A5", "A#5", "B5", "C6", "C#6", "D6", "D#6", "E6", "F6", "F#6", "G6", "G#6", "A6", "A#6", "B6", "C7"];
var backgroundMusic = new Audio("rome.mp3");

function initiateGame() {
  backgroundMusic.load();
  backgroundMusic.play();
  document.getElementById("reset-btn").addEventListener("click", reset);
  document.getElementById("freeplay-btn").addEventListener("click", function () {
    verses = chooseTrack("free-play", freePlayPlaceholder, "main-background");
    prompt = verses[index];
    document.getElementById("prompt-input").innerHTML = prompt;
    var modal = document.getElementById("modal-cont");
    modal.classList.remove("modal");
    modal.classList.add("modal-off");
    document.getElementById("piano-container-id").classList.add("display-piano-container");
  });
  document.getElementById("menu-start").addEventListener("click", function () {
    //load content
    var songOptions = document.getElementById("track-list");
    var SONGTITLE = songOptions.options[songOptions.selectedIndex].value;

    if (SONGTITLE !== "---") {
      document.getElementById("reset-btn").classList.add("display-button");
      document.getElementById("piano-container-id").classList.add("display-piano-container");
      document.getElementById("tabs-container-id").classList.add("display-tabs-container");
      verseIndex = 0;
      verseCharIndex = 0;

      switch (SONGTITLE) {
        case "mad-world":
          verses = chooseTrack("Gary Jules - Mad World", madWorld, "mad-world-background");
          break;

        case "jude":
          verses = chooseTrack("The Beatles - Hey Jude", bealtesVerses, "beatles-background");
          break;

        default:
          verses = chooseTrack("Coldplay - Speed Of Sound", speedOfSoundverses, "speed-of-sound-background");
      }

      prompt = verses[index];
      document.getElementById("prompt-input").innerHTML = prompt;
      var modal = document.getElementById("modal-cont");
      modal.classList.remove("modal");
      modal.classList.add("modal-off");
    } else {
      document.getElementById("error-none-selected").innerHTML = "Please select a song";
    }
  }); //verses = convertToKeyboardKeys(madWorld)
  //prompt = verses[index]

  correctCount = 0;
  verseIndex = 0;
  verseCharIndex = 0;
  document.getElementById("score-percent").innerHTML = "";
  document.getElementById("prompt-input").innerHTML = prompt;
}

document.addEventListener("DOMContentLoaded", initiateGame);
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
        //remove errors/corrections
        var elements = document.querySelectorAll('.error');

        var _iterator = _createForOfIteratorHelper(elements),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {// alert(element.parentNode)

            var element = _step.value;
          } //tag on a space and increment the index

        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }

        verseIndex++;
        promptArr[verseIndex] = verses[verseIndex];
        document.getElementById("prompt-input").innerHTML = promptArr.join(" ");
        verseCharIndex = 0;
      }
    }

    if (verseIndex >= verses.length) {
      calcScore(verses.join("").length);
    }
  }
});

function chooseTrack(title, songTrack, background) {
  cheerSound = new Audio("win.wav");
  booSound = new Audio("boo.wav");
  backgroundMusic.pause();
  document.getElementById("song-title").innerHTML = title;
  document.body.classList.add(background);
  return convertToKeyboardKeys(songTrack);
}

function calcScore(total) {
  document.getElementById("notes-header-field").classList.add("no-notes-input");
  var score = Math.ceil(correctCount / total * 100);
  document.getElementById("score-percent").innerHTML = score + "%";

  if (score < 70) {
    if (booSound) {
      booSound.load();
      booSound.play();
    }

    document.getElementById("prompt-input").innerHTML = "Game Over, better luck next time";
  } else {
    if (cheerSound) {
      cheerSound.load();
      cheerSound.play();
    }

    document.getElementById("prompt-input").innerHTML = "Nice Job!!!";
  }
}

function convertToKeyboardKeys(newVerses) {
  var convertedVerses = [];

  for (var i = 0; i < newVerses.length; i++) {
    var verse = newVerses[i]; //newly converted verse keys

    var newVerseKeys = [];
    var oldVerseKeys = verse.split(",");

    for (var j = 0; j < oldVerseKeys.length; j++) {
      var indexForSwitching = keySwitchArr[1].indexOf(oldVerseKeys[j]);
      newVerseKeys.push(keySwitchArr[0][indexForSwitching]);
    }

    convertedVerses.push(newVerseKeys.join(""));
  }

  return convertedVerses;
}

function reset() {
  started = true;
  userInput = "";
  verseIndex = 0;
  verseCharIndex = 0;
  prompt;
  verses[verseIndex];
  promptArr = [];
  correctCount = 0;
  document.getElementById("notes-header-field").classList.remove("no-notes-input");
  document.getElementById("score-percent").innerHTML = "";
  document.getElementById("prompt-input").innerHTML = prompt;
} //let Noteverses = ["A4 A4 E5 D5 A4", "A4 E5 D5 G4", "G4 E5 D5 G4", "G4 E5 D5 F#4", "F#4 E5 D5 A4", "A4 E5 D5 G4", "G4 E5 D5 G4","G4 E5 D5 F#4", "E5","C#5","" ]
/******/ })()
;
//# sourceMappingURL=bundle.js.map