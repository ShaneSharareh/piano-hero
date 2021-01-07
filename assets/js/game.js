
const piano = new Tone.Sampler({
	urls: {
		"C4": "C4.mp3",
		"D#4": "Ds4.mp3",
		"F#4": "Fs4.mp3",
		"A4": "A4.mp3",
	},
	release: 1,
	baseUrl: "https://tonejs.github.io/audio/salamander/",
}).toDestination();


//alert noise
document.addEventListener("keydown", e=>{
    switch(e.key){
        case "q":
            piano.triggerAttack("C2")
            break;
        case "Q":
            piano.triggerAttack("C#2")
            break;

         case "w":
            piano.triggerAttack("D2")
            break;
        
        case "W":
            piano.triggerAttack("D#2")
            break;

         case "e":
            piano.triggerAttack("E2")
            break;

        case "r":
            piano.triggerAttack("F2")
            break;

        case "R":
            piano.triggerAttack("F#2")
            break;

        case "t":
            piano.triggerAttack("G2")
            break;

        case "T":
            piano.triggerAttack("G#2")
            break;

        case "y":
            piano.triggerAttack("A2")
            break;

         case "Y":
            piano.triggerAttack("A#2")
            break;

        case "u":
            piano.triggerAttack("B2")
            break;


    
        case "i":
            piano.triggerAttack("C3")
            break;
        case "I":
            piano.triggerAttack("C#3")
            break;

         case "o":
            piano.triggerAttack("D3")
            break;
        
        case "O":
            piano.triggerAttack("D#3")
            break;

         case "p":
            piano.triggerAttack("E3")
            break;

        case "[":
            piano.triggerAttack("F3")
            break;

        case "{":
            piano.triggerAttack("F#3")
            break;

        case "]":
            piano.triggerAttack("G3")
            break;

        case "}":
            piano.triggerAttack("G#3")
            break;

        case "a":
            piano.triggerAttack("A3")
            break;

         case "A":
            piano.triggerAttack("A#3")
            break;

        case "s":
            piano.triggerAttack("B3")
            break;



        case "d":
            piano.triggerAttack("C4")
            break;
        case "D":
            piano.triggerAttack("C#4")
            break;

         case "f":
            piano.triggerAttack("D4")
            break;
        
        case "F":
            piano.triggerAttack("D#4")
            break;

         case "g":
            piano.triggerAttack("E4")
            break;

        case "h":
            piano.triggerAttack("F4")
            break;

        case "H":
            piano.triggerAttack("F#4")
            break;

        case "j":
            piano.triggerAttack("G4")
            break;

        case "J":
            piano.triggerAttack("G#4")
            break;

        case "k":
            piano.triggerAttack("A4")
            break;

         case "K":
            piano.triggerAttack("A#4")
            break;

        case "l":
            piano.triggerAttack("B4")
            break;



        case ";":
            piano.triggerAttack("C5")
            break;
        case ":":
            piano.triggerAttack("C#5")
            break;

         case "z":
            piano.triggerAttack("D5")
            break;
        
        case "Z":
            piano.triggerAttack("D#5")
            break;

         case "x":
            piano.triggerAttack("E5")
            break;

        case "c":
            piano.triggerAttack("F5")
            break;

        case "C":
            piano.triggerAttack("F#5")
            break;

        case "v":
            piano.triggerAttack("G5")
            break;

        case "V":
            piano.triggerAttack("G#5")
            break;

        case "b":
            piano.triggerAttack("A5")
            break;

         case "B":
            piano.triggerAttack("A#5")
            break;

        case "n":
            piano.triggerAttack("B5")
            break;


        case "m":
            piano.triggerAttack("C6")
            break;
        case "M":
            piano.triggerAttack("C#6")
            break;

         case ",":
            piano.triggerAttack("D6")
            break;
        
        case "<":
            piano.triggerAttack("D#6")
            break;

         case ".":
            piano.triggerAttack("E6")
            break;

        case "/":
            piano.triggerAttack("F6")
            break;

        case "?":
            piano.triggerAttack("F#6")
            break;

        case "1":
            piano.triggerAttack("G6")
            break;

        case "!":
            piano.triggerAttack("G#6")
            break;

        case "2":
            piano.triggerAttack("A6")
            break;

         case "@":
            piano.triggerAttack("A#6")
            break;

        case "3":
            piano.triggerAttack("B6")
            break;
        

        case "4":
            piano.triggerAttack("C7")
            break;
        
        default:
            return;
    }
});




document.addEventListener("keyup", e=>{
    switch(e.key){
        case "q":
        case "Q":
        case "w":
        
        case "W":
            

         case "e":

        case "r":

        case "R":
            

        case "t":

        case "T":
            

        case "y":

         case "Y":
            

        case "u":


    
        case "i":
        case "I":
            

         case "o":
        
        case "O":
            

         case "p":

        case "[":

        case "{":
            

        case "]":

        case "}":
            

        case "a":

         case "A":
            

        case "s":



        case "d":
        case "D":
            

         case "f":
        
        case "F":
            

         case "g":

        case "h":

        case "H":
            

        case "j":

        case "J":
            

        case "k":

         case "K":
            

        case "l":



        case ";":
        case ":":
            

         case "z":
        
        case "Z":
            

         case "x":

        case "c":

        case "C":
            

        case "v":

        case "V":
            

        case "b":

         case "B":
            

        case "n":


        case "m":
        case "M":
            

         case ",":
        
        case "<":
            

         case ".":

        case "/":

        case "?":
            

        case "1":

        case "!":
        case "2":
         case "@":            
        case "3":
        case "4":

        piano.triggerRelease(); 
    }
});



//add or remove css effect
document.addEventListener("keydown", e=>{
    keys = document.querySelectorAll(".key")   
    blackKeys = document.querySelectorAll(".key-black")   
    switch(e.key){
        case "q":
            keys[0].classList.add("key-active");
            break;
        case "Q":
            blackKeys[0].classList.add("key-black-active");
            break;
        case "w":
             keys[1].classList.add("key-active");
             break;
        case "W":
            blackKeys[1].classList.add("key-black-active");
            break;
            

         case "e":
             keys[2].classList.add("key-active");
             break;
             

        case "r":
             keys[3].classList.add("key-active");
             break;


        case "R":
            blackKeys[2].classList.add("key-black-active");
            break;
            

        case "t":
             keys[4].classList.add("key-active");
             break;

        case "T":
            blackKeys[3].classList.add("key-black-active");
            break;
            

        case "y":
             keys[5].classList.add("key-active");
             break;


         case "Y":
            blackKeys[4].classList.add("key-black-active");
            break;
            

        case "u":
             keys[6].classList.add("key-active");
             break;


    
        case "i":
             keys[7].classList.add("key-active");
             break;

        case "I":
            blackKeys[5].classList.add("key-black-active");
            break;
            
         case "o":
             keys[8].classList.add("key-active");
             break;
        
        case "O":
            blackKeys[6].classList.add("key-black-active");
            break;
            

         case "p":

             keys[9].classList.add("key-active");
             break;


        case "[":

             keys[10].classList.add("key-active");
             break;


        case "{":


            blackKeys[7].classList.add("key-black-active");
            break;

            

        case "]":

             keys[11].classList.add("key-active");
             break;


        case "}":
            
             blackKeys[8].classList.add("key-black-active");
             break;

        case "a":
             keys[12].classList.add("key-active");
             break;


         case "A":
            
             blackKeys[9].classList.add("key-black-active");
             break;

        case "s":

             keys[13].classList.add("key-active");
             break;


        case "d":
             keys[14].classList.add("key-active");
             break;

        case "D":
             blackKeys[10].classList.add("key-black-active");
             break;
            

         case "f":
             keys[15].classList.add("key-active");
             break;
        
        case "F":
            
             blackKeys[11].classList.add("key-black-active");
             break;

         case "g":
             keys[16].classList.add("key-active");
             break;

        case "h":
             keys[17].classList.add("key-active");
             break;

        case "H":
             blackKeys[12].classList.add("key-black-active");
             break;
            

        case "j":
             keys[18].classList.add("key-active");
             break;


        case "J":
             blackKeys[13].classList.add("key-black-active");
             break;
            

        case "k":
             keys[19].classList.add("key-active");
             break;


         case "K":
             blackKeys[14].classList.add("key-black-active");
             break;
            

        case "l":
             keys[20].classList.add("key-active");
             break;



        case ";":
             keys[21].classList.add("key-active");
             break;

        case ":":
             blackKeys[15].classList.add("key-black-active");
             break;
            

         case "z":
             keys[22].classList.add("key-active");
             break;
        
        case "Z":
             blackKeys[16].classList.add("key-black-active");
             break;
            

         case "x":
             keys[23].classList.add("key-active");
             break;

        case "c":
             keys[24].classList.add("key-active");
             break;

        case "C":
             blackKeys[17].classList.add("key-black-active");
             break;
            

        case "v":
             keys[25].classList.add("key-active");
             break;

        case "V":
             blackKeys[18].classList.add("key-black-active");
             break;
            

        case "b":
             keys[26].classList.add("key-active");
             break;

         case "B":
             blackKeys[19].classList.add("key-black-active");
             break;
            

        case "n":
             keys[27].classList.add("key-active");
             break;


        case "m":
             keys[28].classList.add("key-active");
             break;

        case "M":
             blackKeys[20].classList.add("key-black-active");
             break;
            

         case ",":
             keys[29].classList.add("key-active");
             break;
        
        case "<":
             blackKeys[21].classList.add("key-black-active");
             break;
            

         case ".":
             keys[30].classList.add("key-active");
             break;

        case "/":
             keys[31].classList.add("key-active");
             break;

        case "?":
            
             blackKeys[22].classList.add("key-black-active");
             break;

        case "1":
             keys[32].classList.add("key-active");
             break;

        case "!":
             blackKeys[23].classList.add("key-black-active");
             break;

        case "2":
             keys[33].classList.add("key-active");
             break;

         case "@":   
             blackKeys[24].classList.add("key-black-active");
             break;

        case "3":
             keys[34].classList.add("key-active");
             break;

        case "4":
             keys[35].classList.add("key-active");
             break;

        default:
            return;

    }
});


document.addEventListener("keyup", e=>{
     keys = document.querySelectorAll(".key")   
     blackKeys = document.querySelectorAll(".key-black")   
    switch(e.key){
        case "q":
            keys[0].classList.remove("key-active");
            break;
        case "Q":
            blackKeys[0].classList.remove("key-black-active");
            break;
        case "w":
             keys[1].classList.remove("key-active");
             break;
        case "W":
            blackKeys[1].classList.remove("key-black-active");
            break;
            

         case "e":
             keys[2].classList.remove("key-active");
             break;
             

        case "r":
             keys[3].classList.remove("key-active");
             break;


        case "R":
            blackKeys[2].classList.remove("key-black-active");
            break;
            

        case "t":
             keys[4].classList.remove("key-active");
             break;

        case "T":
            blackKeys[3].classList.remove("key-black-active");
            break;
            

        case "y":
             keys[5].classList.remove("key-active");
             break;


         case "Y":
            blackKeys[4].classList.remove("key-black-active");
            break;
            

        case "u":
             keys[6].classList.remove("key-active");
             break;


    
        case "i":
             keys[7].classList.remove("key-active");
             break;

        case "I":
            blackKeys[5].classList.remove("key-black-active");
            break;
            
         case "o":
             keys[8].classList.remove("key-active");
             break;
        
        case "O":
            blackKeys[6].classList.remove("key-black-active");
            break;
            

         case "p":

             keys[9].classList.remove("key-active");
             break;


        case "[":

             keys[10].classList.remove("key-active");
             break;


        case "{":


            blackKeys[7].classList.remove("key-black-active");
            break;

            

        case "]":

             keys[11].classList.remove("key-active");
             break;


        case "}":
            
             blackKeys[8].classList.remove("key-black-active");
             break;

        case "a":
             keys[12].classList.remove("key-active");
             break;


         case "A":
            
             blackKeys[9].classList.remove("key-black-active");
             break;

        case "s":

             keys[13].classList.remove("key-active");
             break;


        case "d":
             keys[14].classList.remove("key-active");
             break;

        case "D":
             blackKeys[10].classList.remove("key-black-active");
             break;
            

         case "f":
             keys[15].classList.remove("key-active");
             break;
        
        case "F":
            
             blackKeys[11].classList.remove("key-black-active");
             break;

         case "g":
             keys[16].classList.remove("key-active");
             break;

        case "h":
             keys[17].classList.remove("key-active");
             break;

        case "H":
             blackKeys[12].classList.remove("key-black-active");
             break;
            

        case "j":
             keys[18].classList.remove("key-active");
             break;


        case "J":
             blackKeys[13].classList.remove("key-black-active");
             break;
            

        case "k":
             keys[19].classList.remove("key-active");
             break;


         case "K":
             blackKeys[14].classList.remove("key-black-active");
             break;
            

        case "l":
             keys[20].classList.remove("key-active");
             break;



        case ";":
             keys[21].classList.remove("key-active");
             break;

        case ":":
             blackKeys[15].classList.remove("key-black-active");
             break;
            

         case "z":
             keys[22].classList.remove("key-active");
             break;
        
        case "Z":
             blackKeys[16].classList.remove("key-black-active");
             break;
            

         case "x":
             keys[23].classList.remove("key-active");
             break;

        case "c":
             keys[24].classList.remove("key-active");
             break;

        case "C":
             blackKeys[17].classList.remove("key-black-active");
             break;
            

        case "v":
             keys[25].classList.remove("key-active");
             break;

        case "V":
             blackKeys[18].classList.remove("key-black-active");
             break;
            

        case "b":
             keys[26].classList.remove("key-active");
             break;

         case "B":
             blackKeys[19].classList.remove("key-black-active");
             break;
            

        case "n":
             keys[27].classList.remove("key-active");
             break;


        case "m":
             keys[28].classList.remove("key-active");
             break;

        case "M":
             blackKeys[20].classList.remove("key-black-active");
             break;
            

         case ",":
             keys[29].classList.remove("key-active");
             break;
        
        case "<":
             blackKeys[21].classList.remove("key-black-active");
             break;
            

         case ".":
             keys[30].classList.remove("key-active");
             break;

        case "/":
             keys[31].classList.remove("key-active");
             break;

        case "?":
            
             blackKeys[22].classList.remove("key-black-active");
             break;

        case "1":
             keys[32].classList.remove("key-active");
             break;

        case "!":
             blackKeys[23].classList.remove("key-black-active");
             break;

        case "2":
             keys[33].classList.remove("key-active");
             break;

         case "@":   
             blackKeys[24].classList.remove("key-black-active");
             break;

        case "3":
             keys[34].classList.remove("key-active");
             break;

        case "4":
             keys[35].classList.remove("key-active");
             break;

        default:
            return;

    }
});