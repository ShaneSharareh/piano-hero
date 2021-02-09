/******/ (() => { // webpackBootstrap
/*!************************!*\
  !*** ./src/js/game.js ***!
  \************************/
// import {name} from './menu'
console.log(name);
var verses = [];
var speedOfSoundverses = ["E4,D4,A3,", "A3,E4,D4,G3", "G3,E4,D4,G3", "G3,E4,D4,F#3,F#3", "E4,D4,A3,", "A3,E4,D4,G3", "G3,E4,D4,G3", "G3,E4,D4,F#3,F#3"]; // ["kkxzk","kxzj", "jxzj","jxzH", "Hxzk", "kxzj", "jxzj"]

var bealtesVerses = ["D4,B3", "B3,D4,E4,A3", "A3,B3,C4,G4", "G4,F#4,D4,E4,D4,C4,B3", "D4,E4,E4", "E4,A4,G4,F#4,G4,E4,D4", "G3,A3,B3", "E4,D4,D4,C4", "B3,G3,G3", "D4,B3", "B3,D4,E4,A3", "A3,B3,C4,G4", "G4,F#4,D4,E4,D4,C4,B3", "D4,E4,E4", "E4,A4,G4,F#4,G4,E4,D4", "G3,A3,B3", "E4,D4,D4,C4", "B3,G3,G3"];
var madWorld = ["G#4,C5,G4,G#4,F4,G4,D#4,D4,A#3", "G#4,C5,G4,G#4,F4,G4,G#4,A#4,A#4", "F4,F4,G#4,G#4,F4,F4,C5,C5,C5,G#4", "A#4,A#4,A#4,G4", "A#4,A#4,A#4,G4", "A#4,A#4,A#4,G#4,G4,F4,F4", "F4,F4,G#4,G#4,F4,F4,C5,C5,C5,G#4", "A#4,A#4,A#4,G4", "A#4,A#4,A#4,G4", "A#4,A#4,A#4,G#4,G4,F4,F4", "F4,F4,G#4,G#4,C5,C5,D5,A#4", "A#4,D5,D5,A#4,A#4,F4", "F4,F4,G#4,G#4,C5,C5,D5,A#4", "A#4,D5,D5,A#4,A#4,F4", "F4,G#4,G#4,C5,C5,D5", "A#4,A#4,A#4,D5,D5,A#4,A#4,F4", "F4,G#4,G#4,C5,C5,D5,A#4,A#4,D5,D5,A#4,A#4,F4", "F4,G#4,G#4,C5,C5,D5", "A#4,A#4,A#4,D5,D5,A#4,A#4,F3", "G#4,F4,F4", "G#4,F4,F4"];
var clocks = ["D#5,A#4,G4", "D#5,A#4,G4", "D#5,A#4", "C#5,A#4,F4", "C#5,A#4,F4", "C#5,A#4", "C#5,A#4,F4", "C#5,A#4,F4", "C#5,A#4", "C5,G#4,F4", "C5,G#4,F4", "C5,G#4", "G#5,G5,D#5", "G#5,G5,D#5", "G#5,G5", "G#5,G5,C#5", "G#5,G5,C#5", "G#5,G5", "G#5,G5,C#5", "G#5,G5,C#5", "G#5,G5", "G#5,G5,C5", "G#5,G5,C5", "G#5,G5"]; //let stairwayToheaven =["B3,D4,F#4,B#4,C#5,", "F#4,D4,C#5", "D5,F#4,D4,D5", "G#3,G#4,E4,B3", "G#4,G3,F#4", "D4,D4,F#4,D4","A3,C#4,D4,D4", "G3,F#3"]
// Eb = D#5
// Bb = 
// Db = C#5
// Ab = G#5
// G = G5
// F = F4
// C= C5

var started = true;
var userInput = "";
var verseIndex = 0;
var verseCharIndex = 0;
var prompt = verses[verseIndex];
var promptArr = [];
var correctCount = 0;
console.log(name);
var keySwitchArr = new Array(2);
keySwitchArr[0] = ["q", "Q", "w", "W", "e", "r", "R", "t", "T", "y", "Y", "u", "i", "I", "o", "O", "p", "[", "{", "]", "}", "a", "A", "s", "d", "D", "f", "F", "g", "h", "H", "j", "J", "k", "K", "l", ";", ":", "z", "Z", "x", "c", "C", "v", "V", "b", "B", "n", "m", "M", ",", "<", ".", "/", "?", "1", "!", "2", "@", "3", "4"];
keySwitchArr[1] = ["C2", "C#2", "D2", "D#2", "E2", "F2", "F#2", "G2", "G#2", "A2", "A#2", "B2", "C3", "C#3", "D3", "D#3", "E3", "F3", "F#3", "G3", "G#3", "A3", "A#3", "B3", "C4", "C#4", "D4", "D#4", "E4", "F4", "F#4", "G4", "G#4", "A4", "A#4", "B4", "C5", "C#5", "D5", "D#5", "E5", "F5", "F#5", "G5", "G#5", "A5", "A#5", "B5", "C6", "C#6", "D6", "D#6", "E6", "F6", "F#6", "G6", "G#6", "A6", "A#6", "B6", "C7"];

var initateGame = function initateGame() {
  verses = convertToKeyboardKeys(madWorld);
  promptArr = [];
  correctCount = 0;
  verseIndex = 0;
  verseCharIndex = 0;
  document.getElementById("score-percent").innerHTML = "";
  document.getElementById("prompt-input").innerHTML = prompt; //     document.getElementById("song-title").innerHTML = "Speed of Sound - ColdPlay"
};

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
    }

    if (verseIndex >= verses.length) {
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
} //let Noteverses = ["A4 A4 E5 D5 A4", "A4 E5 D5 G4", "G4 E5 D5 G4", "G4 E5 D5 F#4", "F#4 E5 D5 A4", "A4 E5 D5 G4", "G4 E5 D5 G4", ]
// credits 
// https://tabnabber.com/view_Tab.asp?tabID=1596&sArtist=beatles&sName=hey%20jude
// https://www.youtube.com/watch?v=H0PJWsave84
// https://www.youtube.com/watch?v=EPqa7OzOnfA
/******/ })()
;
//# sourceMappingURL=bundle.js.map