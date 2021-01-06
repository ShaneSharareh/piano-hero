
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


document.addEventListener("keydown", e=>{
    switch(e.key){
        case "q":
            return piano.triggerAttack("C4")
        case "w":
            return piano.triggerAttack("D2")
        default:
            return;
    }
});

document.addEventListener("keyup", e=>{
    switch(e.key){
        case "q":
        case "w":
            return piano.triggerRelease(); 

       
    }
});