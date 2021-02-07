let verses = ["kkxzk","kxzj", "jxzj","jxzH", "Hxzk", "kxzj", "jxzj", ]
let started = true;
let userInput = ""
let verseIndex= 0;
let verseCharIndex = 0
let prompt = verses[verseIndex]
let promptArr = [];
let correctCount = 0;
import SONGTITLE from './menu'
console.log(SONGTITLE)
function initiateGame() {
    
      
       if(document.getElementById("load-marker") !== null){
            correctCount = 0;
            verseIndex= 0;
            verseCharIndex = 0
            alert(songTitle)
            document.getElementById("score-percent").innerHTML = ""
            document.getElementById("song-title").innerHTML= songTitle
             document.getElementById("prompt-input").innerHTML = prompt
       }
}

document.addEventListener("DOMContentLoaded", initiateGame);


function songSelect(){
    songTitle = document.getElementById("track-list").value
    alert(songTitle)
}

document.addEventListener("keyup", function (event) {
    if(event.key !== "Shift"){
        if(verseIndex< verses.length){
           
                const verse = verses[verseIndex].split("")
                if(verse[verseCharIndex] !== event.key){
                    verse[verseCharIndex] =  "<span class='error'>"+verse[verseCharIndex]+"</span>"
                }else{
                    verse[verseCharIndex] =  "<span class='correct'>"+verse[verseCharIndex]+"</span>"
                    correctCount++

                }
                //document.getElementById("prompt-input").innerHTML = verse.join("")
                verseCharIndex++;
                promptArr[verseIndex] = verse.join("")

                document.getElementById("prompt-input").innerHTML = promptArr.join(" ")
             if(verseCharIndex === verses[verseIndex].length ){
                //tag on a space and increment the index
                verseIndex++
                 promptArr[verseIndex] =verses[verseIndex] 
                document.getElementById("prompt-input").innerHTML = promptArr.join(" ")
                verseCharIndex = 0;
            }
        }else{
            
            calcScore(verses.join("").length)
        }


   // document.getElementById("prompt-input").innerHTML = verses[verseIndex]
            

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
 
        function calcScore(total){
            let score = Math.ceil(((correctCount)/total) * 100)
            document.getElementById("score-percent").innerHTML = (score) + "%"
            if(score<=60){
                
                document.getElementById("prompt-input").innerHTML = "Game Over, better luck next time"
            }else{
                document.getElementById("prompt-input").innerHTML = "Nice Job!!!"

            }
        }

//let Noteverses = ["A4 A4 E5 D5 A4", "A4 E5 D5 G4", "G4 E5 D5 G4", "G4 E5 D5 F#4", "F#4 E5 D5 A4", "A4 E5 D5 G4", "G4 E5 D5 G4","G4 E5 D5 F#4", "E5","C#5","" ]

 
           