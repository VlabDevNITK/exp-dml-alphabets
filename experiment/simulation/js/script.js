let simsubscreennum=0;
let temp=0;
// function navNext()
// {
// 	for(temp=0;temp<2;temp++)
// 	{
// 		document.getElementById("canvas"+temp).style.visibility="hidden";
// 	}
// 	simsubscreennum+=1;
// 	// console.log("simsubscreennum: " + simsubscreennum);
// 	document.getElementById("canvas"+simsubscreennum).style.visibility="visible";
// 	document.getElementById("nextButton").style.visibility="hidden";
    
// 	// magic();
// }
function navNext() {
    for (temp = 0; temp < 2; temp++) {
        const canvasElement = document.getElementById("canvas" + temp);
        if (canvasElement) {
            canvasElement.style.visibility = "hidden";
        }
    }
    simsubscreennum += 1;
    const nextCanvasElement = document.getElementById("canvas" + simsubscreennum);
    if (nextCanvasElement) {
        nextCanvasElement.style.visibility = "visible";
    }
    document.getElementById("nextButton").style.visibility = "hidden";
}




//=============//
let simsubscreennum1=0;
let temp1=0;
function navNext1 ()
{
for(temp1=0;temp1<2;temp1++)
{
    document.getElementById("canvas2"+temp1).style.visibility="hidden";
}
simsubscreennum1+=1;
document.getElementById("canvas2"+simsubscreennum1).style.visibility="visible";
document.getElementById("nextButton1").style.visibility="hidden";

// magic();
}


function getOption(){
updateSubmitButtonState();
selectElement =document.querySelector('#alphabetInput');
output=selectElement.value;
document.querySelector('.output').textContent= output;

}

function dis(){
selectElement =document.querySelector('#alphabetInput');
output=selectElement.value;
document.querySelector('.displayImg').textContent= output;
}


function getOption1(){
updateSubmitButtonState();
selectElement =document.querySelector('#alphabetInput');
output=selectElement.value;
document.querySelector('.out').textContent= output;

}


function getOption2(){
updateSubmitButtonState();
selectElement =document.querySelector('#alphabetInput');
output=selectElement.value;
document.querySelector('.out1').textContent= output;

}

function getOption3(){
selectElement =document.querySelector('#alphabetInput');
output=selectElement.value;
document.querySelector('.out2').textContent= output;

}

// Function to update the state of the submit button

function updateSubmitButtonState() {
const alphabetInput = document.getElementById('alphabetInput').value;
const submitButton = document.getElementById('nextButton1');

if (alphabetInput.length === 1 && /^[a-zA-Z]+$/.test(alphabetInput)) {
submitButton.disabled = false;
} else {
submitButton.disabled = true;
}
}

// function message(){
// 	selectElement =document.querySelector('#btn2-text');
// 	output=selectElement.value;
// 	document.querySelector('.hidden').textContent= output;
// 	clearMorseCode();
// }


//getOptionDash

// 	const alphabetInputField = document.getElementById('alphabetInput');
// alphabetInputField.addEventListener('input', updateSubmitButtonState);










function displayMessage() {
// Get the message element
var messageElement = document.getElementById("message");

// Set the text content and color	
messageElement.textContent = "Button clicked!";
}



// JavaScript code here
document.addEventListener("DOMContentLoaded", function () {
// Add an event listener to the input element to call validateAlphabet when the input value changes.
document.getElementById("alphabetInput").addEventListener("input", validateAlphabet);

// Handle the click event of the submit button (removed from HTML)
document.getElementById("nextButton1").addEventListener("click", function () {
// Your code to handle the button click goes here


navNext();
getOption();
getOption1();
getOption2();
});

// Rest of your JavaScript code
// ...

function validateAlphabet() {
var input = document.getElementById("alphabetInput").value.toUpperCase();
var validAlphabets = ["A", "B", "C", "D","E","F", "G", "H", "I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]; // Add all valid alphabets (A to Z) here

if (validAlphabets.includes(input)) {
    document.getElementById("errorText").textContent = ""; // Clear error message
} else {
    var errorTextContainer = document.getElementById("errorText");
    errorTextContainer.style.padding = "10px";
    errorTextContainer.style.paddingRight='2px'
    document.getElementById("errorText").textContent = "Please enter a valid alphabet (A to Z)";
}
}

// Other functions here
});





function morseCode() {
const element = document.querySelector('.out1'); // Get the element with class "out"
let morseCodeMapping = {
    'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 'F': '..-.', 'G': '--.', 'H': '....',
    'I': '..', 'J': '.---', 'K': '-.-', 'L': '.-..', 'M': '--', 'N': '-.', 'O': '---', 'P': '.--.',
    'Q': '--.-', 'R': '.-.', 'S': '...', 'T': '-', 'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-',
    'Y': '-.--', 'Z': '--..'
};

// Get the selected alphabet from the UI
const selectedAlphabet = document.querySelector('#alphabetInput').value;

// Check if the selected alphabet exists in the Morse code mapping
if (morseCodeMapping.hasOwnProperty(selectedAlphabet)) {
    const morseCode = morseCodeMapping[selectedAlphabet];
    element.innerHTML = morseCode; // Set the Morse code in the UI
} else {
    // Handle the case when the selected alphabet is not found in the mapping (optional)
    element.innerHTML = "";
}
}














// let lastClickTime = 0;
// let morseCodeTimer;
// let isMorseCodeAnimating = false;
// let currentMorseCode = '';
// let audioEnabled = true;






// function getSelectedAlphabet() {
//   return document.querySelector('#alphabetInput').value.toUpperCase();
// }

// function togglePlayButton(disabled) {
// 	const playButton = document.querySelector('#btn2');
// 	if (disabled) {
// 	  playButton.onclick = null; // Remove click handlers while disabled
// 	} else {
// 	  playButton.onclick = handlePlayButtonClick; // Restore click handlers when enabled
// 	}
// 	playButton.disabled = disabled;
//   }

//   const audioElement = new Audio();

//  function toggleAudio(enabled) {
//   const selectedAlphabet = getSelectedAlphabet();
//   audioElement.src = audioMapping[selectedAlphabet];
//   audioEnabled = enabled;
//   if (enabled) {
//     if (selectedAlphabet === 'A') {
//       audioElement.playbackRate = 0.22;
//     } else if (selectedAlphabet === 'B') {
//       audioElement.playbackRate = 0.25;
//     } else if (selectedAlphabet === 'C') {
//       audioElement.playbackRate = 0.30;
//     } else if (selectedAlphabet === 'D') {
//       audioElement.playbackRate = 0.21;
//     // } else if (selectedAlphabet === 'E') {
//       audioElement.playbackRate = 0.4;
//     } else if (selectedAlphabet === 'F') {
//       audioElement.playbackRate = 0.25;
//     } else if (selectedAlphabet === 'G') {
//       audioElement.playbackRate = 0.43;
//     } else if (selectedAlphabet === 'H') {
//       audioElement.playbackRate = 0.2;
//     } else if (selectedAlphabet === 'I') {
//       audioElement.playbackRate = 0.2;
//     } else if (selectedAlphabet === 'J') {
//       audioElement.playbackRate = 0.31;
//     } else if (selectedAlphabet === 'K') {
//       audioElement.playbackRate = 0.2;
//     } else if (selectedAlphabet === 'L') {
//       audioElement.playbackRate = 0.2;
//     } else if (selectedAlphabet === 'M') {
//       audioElement.playbackRate = 0.35;
//     } else if (selectedAlphabet === 'N') {
//       audioElement.playbackRate = 0.35;
//     } else if (selectedAlphabet === 'O') {
//       audioElement.playbackRate = 0.4;
//     } else if (selectedAlphabet === 'P') {
//       audioElement.playbackRate = 0.25;
//     } else if (selectedAlphabet === 'Q') {
//       audioElement.playbackRate = 0.25;
//     } else if (selectedAlphabet === 'R') {
//       audioElement.playbackRate = 0.35;
//     } else if (selectedAlphabet === 'S') {
//       audioElement.playbackRate = 0.15;
//     // } else if (selectedAlphabet === 'T') {
//       audioElement.playbackRate = 0.2;
//     } else if (selectedAlphabet === 'U') {
//       audioElement.playbackRate = 0.2;
//     } else if (selectedAlphabet === 'V') {
//       audioElement.playbackRate = 1.0;
//     } else if (selectedAlphabet === 'W') {
//       audioElement.playbackRate = 0.3;
//     } else if (selectedAlphabet === 'X') {
//       audioElement.playbackRate = 0.3;
//     } else if (selectedAlphabet === 'Y') {
//       audioElement.playbackRate = 0.3;
//     } else if (selectedAlphabet === 'Z') {
//       audioElement.playbackRate = 0.32;
//     }

//     audioElement.play();
// 	if (selectedAlphabet === 'E' || selectedAlphabet === 'T') {
// 		setTimeout(() => {
// 			audioElement.play();
// 		  }, 100);
// 	  }
//   } else {
//     audioElement.pause();
//     audioElement.currentTime = 0;
//   }
// }








function morseCode() {
const element = document.querySelector('.out2'); // Get the element with class "out"

let morseCodeMapping = {
'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 'F': '..-.', 'G': '--.', 'H': '....',
'I': '..', 'J': '.---', 'K': '-.-', 'L': '.-..', 'M': '--', 'N': '-.', 'O': '---', 'P': '.--.',
'Q': '--.-', 'R': '.-.', 'S': '...', 'T': '-', 'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-',
'Y': '-.--', 'Z': '--..',
'a': '.-', 'b': '-...', 'c': '-.-.', 'd': '-..', 'e': '.', 'f': '..-.', 'g': '--.', 'h': '....',
'i': '..', 'j': '.---', 'k': '-.-', 'l': '.-..', 'm': '--', 'n': '-.', 'o': '---', 'p': '.--.',
'q': '--.-', 'r': '.-.', 's': '...', 't': '-', 'u': '..-', 'v': '...-', 'w': '.--', 'x': '-..-',
'y': '-.--', 'z': '--..'
};

const selectedAlphabet = getSelectedAlphabet();

const currentTime = new Date().getTime();
const clickDelay = currentTime - lastClickTime;

// Clear any previous Morse code display
clearTimeout(morseCodeTimer);

if (isMorseCodeAnimating) {
clearTimeout(morseCodeTimer);
togglePlayButton(false);
isMorseCodeAnimating = false;
toggleAudio(false);
// element.innerHTML = "";
element.innerHTML = "";
} 
// Clear any previous Morse code display and start a new animation
// element.innerHTML = "";
else {
// Clear any previous Morse code display and start a new animation
element.innerHTML = "";
}


if (morseCodeMapping.hasOwnProperty(selectedAlphabet)) {
const morseCode = morseCodeMapping[selectedAlphabet];
currentMorseCode = morseCode;
isMorseCodeAnimating = true;
togglePlayButton(true);
toggleAudio(true);

let i = 0;

function animateMorseCode() {



const character = morseCode[i];
const customDelay = customDelays[selectedAlphabet] || 100;
//   element.innerHTML += character;
if (i === 0) {
element.innerHTML = ""; // Clear the entire Morse code display at the beginning
setTimeout(() => {
    if (character) {
        element.innerHTML += character;
      }
  i++;
  morseCodeTimer = setTimeout(animateMorseCode, customDelay);
}, 70); // Add a delay of 100 milliseconds for the first character
} else {
if (character) {
    element.innerHTML += character;
  }
i++;

if (i <= morseCode.length) {
morseCodeTimer = setTimeout(animateMorseCode, customDelay);
} 

else {
// element.innerHTML = "";

togglePlayButton(false);
isMorseCodeAnimating = false;
toggleAudio(false);
}
}
}

animateMorseCode();
}


lastClickTime = currentTime;
}





function handlePlayButtonClick() {
if (!isMorseCodeAnimating) {
morseCode();
}
}





let customDelays = {
'A': 800, 'B': 750, 'C': 700, 'D': 550, 'E': 500, 'F': 700, 'G': 800, 'H': 700,
'I': 700, 'J': 800, 'K': 1000, 'L': 900, 'M': 1200, 'N': 1000, 'O': 700, 'P': 1000,
'Q': 850, 'R': 700, 'S': 800, 'T': 500, 'U': 900, 'V': 500, 'W': 700, 'X': 650,
'Y': 700, 'Z': 600,
'a': 800, 'b': 750, 'c': 700, 'd': 550, 'e': 500, 'f': 700, 'g': 800, 'h': 700,
'i': 700, 'j': 800, 'k': 1000, 'l': 900, 'm': 1200, 'n': 1000, 'o': 700, 'p': 1000,
'q': 850, 'r': 700, 's': 800, 't': 500, 'u': 900, 'v': 500, 'w': 700, 'x': 650,
'y': 700, 'z': 600
// Add custom delays for other letters as needed
};

// document.querySelector('#btn2').onclick = handlePlayButtonClick;
// document.addEventListener("DOMContentLoaded", function () {
//   document.querySelector('#btn2').onclick = handlePlayButtonClick;
// });


// // Handle double-click
// document.addEventListener('DOMContentLoaded', function () {
// document.querySelector('#btn2').addEventListener('dblclick', function () {
//   if (!isMorseCodeAnimating) {
//     morseCode();
//   }
// });
// });






function getOptionaud(){
selectElement =document.querySelector('#alphabetInput');
output=selectElement.value;
document.querySelector('.output2').textContent= output;
}





// function playMorseCode() {
// 	const selectedAlphabet = document.querySelector('#alphabetInput').value.toUpperCase();

// 	const audioA = document.getElementById("audioA");
// 	const audioB = document.getElementById("audioB");
// 	const audioElement = document.getElementById(`audio${selectedAlphabet}`);

// 	if (selectedAlphabet === '') {
// 		audioElement.playbackRate = 0.22;
// 		audioA.play();	
// 	} 
// else if (selectedAlphabet === 'B') {
// 	audioElement.playbackRate = 0.15;
// 	audioB.play();
// } 	
// else if (selectedAlphabet === 'C') {
// 	audioElement.playbackRate = 0.2;
// 	audioC.play();
// }
//  	else if (selectedAlphabet === 'D') {
// 		audioElement.playbackRate = 0.2;
// 	audioD.play();
// }
//   	else if (selectedAlphabet === 'E') {
// 		audioElement.playbackRate = 1.0;
// 		audioE.play();
// }
// 	else if (selectedAlphabet === 'F') {
// 		audioElement.playbackRate = 0.25;
// 	audioF.play();
// }
// else if (selectedAlphabet === 'G') {
// 	audioElement.playbackRate = 0.25;
// 	audioG.play();
// }
// else if (selectedAlphabet === 'H') {
// 	audioElement.playbackRate = 0.2;
// 	audioH.play();
// }else if (selectedAlphabet === 'I') {
// 	audioElement.playbackRate = 0.2;
// 	audioI.play();
// }
// else if (selectedAlphabet === 'J') {
// 	audioElement.playbackRate = 0.2;
// 	audioJ.play();
// }
// else if (selectedAlphabet === 'K') {
// 	audioElement.playbackRate = 0.23;
// 	audioK.play();
// }
// else if (selectedAlphabet === 'L') {
// 	audioElement.playbackRate = 0.2;
// 	audioL.play();
// }else if (selectedAlphabet === 'M') {
// 	audioElement.playbackRate = 3.0;
// 	audioM.play();
// }
// else if (selectedAlphabet === 'N') {
// 	audioElement.playbackRate = 0.2;
// 	audioN.play();
// }
// else if (selectedAlphabet === 'O') 
// {
// 	audioElement.playbackRate = 0.4;
// 	audioO.play();
// }
// else if (selectedAlphabet === 'P') {
// 	audioElement.playbackRate = 0.2;
// 	audioP.play();
// }
// else if (selectedAlphabet === 'Q') {
// 	audioElement.playbackRate = 0.25;
// 	audioQ.play();
// }
// else if (selectedAlphabet === 'R') {
// 	audioElement.playbackRate = 0.3;
// 	audioR.play();
// }
// else if (selectedAlphabet === 'S') {
// 	audioElement.playbackRate = 0.15;
// 	audioS.play();
// }
// else if (selectedAlphabet === 'T') {
// 	audioElement.playbackRate = 0.2;
// 	audioT.play();
// }
// else if (selectedAlphabet === 'U') {
// 	audioElement.playbackRate = 0.15;
// 	audioU.play();
// }
// else if (selectedAlphabet === 'V') {
// 	audioElement.playbackRate = 0.15;
// 	audioW.play();
    
// }
// else if (selectedAlphabet === 'W') {
// 	audioElement.playbackRate = 0.3;
// 	audioW.play();
// }
// else if (selectedAlphabet === 'X') {
// 	audioElement.playbackRate = 0.2;
// 	audioX.play();
// }
// else if (selectedAlphabet === 'Y') {
// 	audioElement.playbackRate = 0.25;
// 	audioY.play();
// }
// else if (selectedAlphabet === 'Z') {
// 	audioElement.playbackRate = 0.2;
// 	audioZ.play();
// }



// 	function displayMorseCharacter(character) {
//   const morseContainer = document.getElementById('morse-container');

//   currentIndex = 0;

//   function displayNextSymbol() {
//     if (currentIndex < character.length) {
//       const char = character[currentIndex];
//       if (char === '.') {
//         setTimeout(() => {
//           const dot = document.createElement('div');
// 		  dot.className = 'dot';
//           morseContainer.appendChild(dot);
//           dot.style.opacity = '1';
//           currentIndex++;
//           displayNextSymbol();
//         }, 1000); // 1-second delay for dots
//       } else if (char === '-') {
//         setTimeout(() => {
//           const dash = document.createElement('div');
//           dash.className = 'dash';
//           morseContainer.appendChild(dash);
//           dash.style.opacity = '1';
//           currentIndex++;
//           displayNextSymbol();
//         }, 900); // 1-second delay for dashes
//       } else if (char === ' ') {
//         currentIndex++;
//         setTimeout(() => displayNextSymbol());
//       }
//     } else {
//       // All symbols have been displayed, clear the Morse code container
//       setTimeout(() => {
//         morseContainer.innerHTML = '';
//       }, 1000); // 1-second delay before clearing the container
//     }
//   }

//   displayNextSymbol();
// }

// document.addEventListener('DOMContentLoaded', function () {
// document.getElementById('displayButton').addEventListener('click', () => {
//   const alphabetInput = document.getElementById('alphabetInput').value.toUpperCase();
//   if (morseCode[alphabetInput]) {
//     const morseMessage = morseCode[alphabetInput];
//     displayMorseCharacter(morseMessage);
//   } else {
//     alert('Please enter a valid alphabet (A to Z).');
//   }
// });
// });



// 


function getOption9() {
const selectElement = document.querySelector('#alphabetInput');
const output = selectElement.value.toUpperCase();
const imageContainer = document.querySelector('.outputImg');

// const playbackRates = {
//     V: 0.2, // Set a custom playback rate for "V"
// };
// const nameContainer = document.querySelector('.outputName');
// displayHintImages();


// Define image sources for each alphabet
// const imageSources = {
//     A: ["./img/A (Archery)/1.PNG", "./img/A (Archery)/2.PNG", "./img/A (Archery)/3.PNG"],
//     B: ["./img/B (Banjo)/1.PNG", "./img/B (Banjo)/2.PNG", "./img/B (Banjo)/3.PNG","./img/B (Banjo)/4.PNG","./img/B (Banjo)/5.PNG"],
// 	C: ["./img/C (Candy)/1.PNG","./img/C (Candy)/2.PNG","./img/C (Candy)/3.PNG","./img/C (Candy)/4.PNG","./img/C (Candy)/5.PNG"],
//     D: ["./img/D (Dog)/1.PNG", "./img/D (Dog)/2.PNG", "./img/D (Dog)/3.PNG", "./img/D (Dog)/4.PNG"],
// 	E: ["./img/E (Eye)/1.PNG","./img/E (Eye)/2.PNG"],
// 	F: ["./img/F (Firetruck)/1.PNG","./img/F (Firetruck)/2.PNG","./img/F (Firetruck)/2.PNG","./img/F (Firetruck)/3.PNG","./img/F (Firetruck)/4.PNG","./img/F (Firetruck)/5.PNG"],
// 	G: ["./img/G (Giraffe)/1.PNG","./img/G (Giraffe)/2.PNG","./img/G (Giraffe)/3.PNG","./img/G (Giraffe)/4.PNG"],
// 	H: ["./img/H (Hippo)/1.PNG","./img/H (Hippo)/2.PNG","./img/H (Hippo)/3.PNG","./img/H (Hippo)/4.PNG","./img/H (Hippo)/5.PNG"],
// 	I: ["./img/I (Insect)/1.PNG","./img/I (Insect)/2.PNG","./img/I (Insect)/3.PNG"],
// 	J: ["./img/J (Jet)/1.PNG","./img/J (Jet)/2.PNG",'./img/J (Jet)/3.PNG','./img/J (Jet)/4.PNG','./img/J (Jet)/5.PNG'],
// 	K: ["./img/K (Kite)/1.PNG","./img/K (Kite)/2.PNG","./img/K (Kite)/3.PNG","./img/K (Kite)/4.PNG"],
// 	L: ["./img/L (Laboratory)/1.PNG","./img/L (Laboratory)/2.PNG","./img/L (Laboratory)/3.PNG","./img/L (Laboratory)/4.PNG","./img/L (Laboratory)/5.PNG"],
// 	M: ["./img/M (Mustache)/1.PNG","./img/M (Mustache)/2.PNG","./img/M (Mustache)/3.PNG"],
// 	N: ["./img/N (Net)/1.PNG","./img/N (Net)/2.PNG","./img/N (Net)/3.PNG"],
// 	O: ["./img/O (Orchestra)/1.PNG","./img/O (Orchestra)/2.PNG","./img/O (Orchestra)/3.PNG","./img/O (Orchestra)/4.PNG"],
// 	P: ["./img/P (Paddle)/1.PNG","./img/P (Paddle)/2.PNG","./img/P (Paddle)/3.PNG","./img/P (Paddle)/4.PNG","./img/P (Paddle)/5.PNG"],
// 	Q: ["./img/Q (Quarterback)/1.PNG","./img/Q (Quarterback)/2.PNG","./img/Q (Quarterback)/3.PNG","./img/Q (Quarterback)/4.PNG","./img/Q (Quarterback)/5.PNG"],
// 	R: ["./img/R (Robot)/1.PNG","./img/R (Robot)/2.PNG","./img/R (Robot)/3.PNG","./img/R (Robot)/4.PNG"],
// 	S: ["./img/S (Submarine)/1.PNG","./img/S (Submarine)/2.PNG","./img/S (Submarine)/3.PNG","./img/S (Submarine)/4.PNG"],
// 	T: ["./img/T (Tape)/1.PNG","./img/T (Tape)/2.PNG"],
// 	U: ["./img/U (Unicorn)/1.PNG","./img/U (Unicorn)/2.PNG","./img/U (Unicorn)/3.PNG","./img/U (Unicorn)/4.PNG"],
// 	V: ["./img/V (Vacuum)/1.PNG","./img/V (Vacuum)/2.PNG","./img/V (Vacuum)/3.PNG","./img/V (Vacuum)/4.PNG","./img/V (Vacuum)/5.PNG"],
// 	W: ["./img/W (Wand)/1.PNG","./img/W (Wand)/2.PNG","./img/W (Wand)/3.PNG","./img/W (Wand)/4.PNG"],
// 	X: ["./img/X (X-ray)/1.PNG","./img/X (X-ray)/2.PNG","./img/X (X-ray)/3.PNG","./img/X (X-ray)/4.PNG","./img/X (X-ray)/5.PNG"],
// 	Y: ["./img/Y (Yard)/1.PNG","./img/Y (Yard)/2.PNG","./img/Y (Yard)/3.PNG","./img/Y (Yard)/4.PNG","./img/Y (Yard)/5.PNG"],
//     Z: ["./img/Z (Zebra)/1.PNG", "./img/Z (Zebra)/2.PNG", "./img/Z (Zebra)/3.PNG"],
// };


// const audioSources = {
// 	A: "../Audio/morse a.wav",
// 	B: "../Audio/morse b.wav",
// 	C: "../Audio/morse c.wav",
// 	D: "../Audio/morse d.wav",
// 	E: "../Audio/morse e.wav",
// 	F: "../Audio/morse f.wav",
// 	G: "../Audio/morse g.wav",
// 	H: "../Audio/morse h.wav",
// 	I: "../Audio/morse i.wav",
// 	J: "../Audio/morse j.wav",
// 	K: "../Audio/morse k.wav",
// 	L: "../Audio/morse l.wav",
// 	M: "../Audio/morse m.wav",
// 	N: "../Audio/morse n.wav",
// 	O: "../Audio/morse o.wav",
// 	P: "../Audio/morse p.wav",
// 	Q: "../Audio/morse q.wav",
// 	R: "../Audio/morse r.wav",
// 	S: "../Audio/morse s.wav",
// 	T: "../Audio/morse t.wav",
// 	U: "../Audio/morse u.wav",
// 	V: "../Audio/morse v.wav",
// 	W: "../Audio/morse w.wav",
// 	X: "../Audio/morse x.wav",
// 	Y: "../Audio/morse y.wav",
// 	Z: "../Audio/morse z.wav",
// };



const letterNames = {
A: "Archery",
B: "Banjo",
C: "Candy",
D: "Dog",
E: "Eye",
F: "Firetruck",
G: "Giraffe",
H: "Hippo",
I: "Insect",
J: "Jet",
K: "Kite",
L: "Laboratory",
M: "Mustache",
N: "Net",
O: "Orchestra",
P: "Paddle",
Q: "Quarterback",
R: "Robot",
S: "Submarine",
T: "Tape",
U: "Unicorn",
V: "Vacuum",
W: "Wand",
X: "X-ray",
Y: "Yard",
Z: "Zebra",
};




if (imageSources[output]) {
// Clear the previous content
while (imageContainer.firstChild) {
    imageContainer.removeChild(imageContainer.firstChild);
}

let currentIndex = 0;

// Create an img element
const image = document.createElement('img');
image.src = imageSources[output][currentIndex];
image.alt = `Image for ${output}`;

image.style.width = '245px'; // Set the width to 200px
image.style.height = '290px'; // Set the height to 200px
image.style.margin = '-55px';	 
image.style.marginLeft='340px'
// image.style.marginBottom='50px'

// image.style.marginLeft="400px"
// image.style.marginBottom="-300px"


 var button = document.getElementById("hintButton");
  button.style.display = "none";


// Function to change images every 1 second
imageRotationInterval =setInterval(function () {
    currentIndex = (currentIndex + 1) % imageSources[output].length;
    image.src = imageSources[output][currentIndex];
}, 900);

setTimeout(function(){
    clearInterval(imageRotationInterval);
},3600);

nameContainer.textContent = letterNames[output];

} else {
// If no image found for the selected alphabet, display an error or placeholder image
imageContainer.textContent = 'Image not found';
}
}

document.addEventListener('DOMContentLoaded', function () {
document.getElementById('hintButton').addEventListener('click', getOption9);
});






function displayHintImages() {
const selectElement = document.querySelector('#alphabetInput');
const output = selectElement.value.toUpperCase();
const imageContainer = document.querySelector('.outputImg');
const nameContainer = document.querySelector('.outputName');

const letterNames = {
A: "Archery",
B: "Banjo",
C: "Candy",
D: "Dog",
E: "Eye",
F: "Firetruck",
G: "Giraffe",
H: "Hippo",
I: "Insect",
J: "Jet",
K: "Kite",
L: "Laboratory",
M: "Mustache",
N: "Net",
O: "Orchestra",
P: "Paddle",
Q: "Quarterback",
R: "Robot",
S: "Submarine",
T: "Tape",
U: "Unicorn",
V: "Vacuum",
W: "Wand",
X: "X-ray",
Y: "Yard",
Z: "Zebra",
};

// Define image sources for each alphabet
const imageSources = {
A: ["./img/A (Archery)/1.PNG", "./img/A (Archery)/2.PNG", "./img/A (Archery)/3.PNG"],
B: ["./img/B (Banjo)/1.PNG", "./img/B (Banjo)/2.PNG", "./img/B (Banjo)/3.PNG","./img/B (Banjo)/4.PNG","./img/B (Banjo)/5.PNG"],
C: ["./img/C (Candy)/1.PNG","./img/C (Candy)/2.PNG","./img/C (Candy)/3.PNG","./img/C (Candy)/4.PNG","./img/C (Candy)/5.PNG"],
D: ["./img/D (Dog)/1.PNG", "./img/D (Dog)/2.PNG", "./img/D (Dog)/3.PNG", "./img/D (Dog)/4.PNG"],
E: ["./img/E (Eye)/1.PNG","./img/E (Eye)/2.PNG"],
F: ["./img/F (Firetruck)/1.PNG","./img/F (Firetruck)/2.PNG","./img/F (Firetruck)/2.PNG","./img/F (Firetruck)/3.PNG","./img/F (Firetruck)/4.PNG","./img/F (Firetruck)/5.PNG"],
G: ["./img/G (Giraffe)/1.PNG","./img/G (Giraffe)/2.PNG","./img/G (Giraffe)/3.PNG","./img/G (Giraffe)/4.PNG"],
H: ["./img/H (Hippo)/1.PNG","./img/H (Hippo)/2.PNG","./img/H (Hippo)/3.PNG","./img/H (Hippo)/4.PNG","./img/H (Hippo)/5.PNG"],
I: ["./img/I (Insect)/1.PNG","./img/I (Insect)/2.PNG","./img/I (Insect)/3.PNG"],
J: ["./img/J (Jet)/1.PNG","./img/J (Jet)/2.PNG",'./img/J (Jet)/3.PNG','./img/J (Jet)/4.PNG','./img/J (Jet)/5.PNG'],
K: ["./img/K (Kite)/1.PNG","./img/K (Kite)/2.PNG","./img/K (Kite)/3.PNG","./img/K (Kite)/4.PNG"],
L: ["./img/L (Laboratory)/1.PNG","./img/L (Laboratory)/2.PNG","./img/L (Laboratory)/3.PNG","./img/L (Laboratory)/4.PNG","./img/L (Laboratory)/5.PNG"],
M: ["./img/M (Mustache)/1.PNG","./img/M (Mustache)/2.PNG","./img/M (Mustache)/3.PNG"],
N: ["./img/N (Net)/1.PNG","./img/N (Net)/2.PNG","./img/N (Net)/3.PNG"],
O: ["./img/O (Orchestra)/1.PNG","./img/O (Orchestra)/2.PNG","./img/O (Orchestra)/3.PNG","./img/O (Orchestra)/4.PNG"],
P: ["./img/P (Paddle)/1.PNG","./img/P (Paddle)/2.PNG","./img/P (Paddle)/3.PNG","./img/P (Paddle)/4.PNG","./img/P (Paddle)/5.PNG"],
Q: ["./img/Q (Quarterback)/1.PNG","./img/Q (Quarterback)/2.PNG","./img/Q (Quarterback)/3.PNG","./img/Q (Quarterback)/4.PNG","./img/Q (Quarterback)/5.PNG"],
R: ["./img/R (Robot)/1.PNG","./img/R (Robot)/2.PNG","./img/R (Robot)/3.PNG","./img/R (Robot)/4.PNG"],
S: ["./img/S (Submarine)/1.PNG","./img/S (Submarine)/2.PNG","./img/S (Submarine)/3.PNG","./img/S (Submarine)/4.PNG"],
T: ["./img/T (Tape)/1.PNG","./img/T (Tape)/2.PNG"],
U: ["./img/U (Unicorn)/1.PNG","./img/U (Unicorn)/2.PNG","./img/U (Unicorn)/3.PNG","./img/U (Unicorn)/4.PNG"],
V: ["./img/V (Vacuum)/1.PNG","./img/V (Vacuum)/2.PNG","./img/V (Vacuum)/3.PNG","./img/V (Vacuum)/4.PNG","./img/V (Vacuum)/5.PNG"],
W: ["./img/W (Wand)/1.PNG","./img/W (Wand)/2.PNG","./img/W (Wand)/3.PNG","./img/W (Wand)/4.PNG"],
X: ["./img/X (X-ray)/1.PNG","./img/X (X-ray)/2.PNG","./img/X (X-ray)/3.PNG","./img/X (X-ray)/4.PNG","./img/X (X-ray)/5.PNG"],
Y: ["./img/Y (Yard)/1.PNG","./img/Y (Yard)/2.PNG","./img/Y (Yard)/3.PNG","./img/Y (Yard)/4.PNG","./img/Y (Yard)/5.PNG"],
Z: ["./img/Z (Zebra)/1.PNG", "./img/Z (Zebra)/2.PNG", "./img/Z (Zebra)/3.PNG" ,"./img/Z (Zebra)/4.PNG","./img/Z (Zebra)/5.PNG"],
};

const audioSources = {
A: "",
B: "",
C: "",
D: "",
E: "",
F: "",
G: "",
H: "",
I: "",
J: "",
K: "",
L: "",
M: "",
N: "",
O: "",
P: "",
Q: "",
R: "",
S: "",
T: "",
U: "",
V: "",
W: "",
X: "",
Y: "",
Z: "",
};


const alphabetTimings = {
A: { interval: 700, timeout: 1700,},
B: { interval: 660, timeout: 2800, },
C: { interval: 700, timeout: 2800,  },
D: { interval: 700, timeout: 2100, },
E: { interval: 220, timeout: 500,  },
F: { interval: 630, timeout: 2700 },
G: { interval: 700, timeout: 2100},
H: { interval: 600, timeout: 2600 },
I: { interval: 700, timeout: 1600 },
J: { interval: 600, timeout: 2500 },
K: { interval: 700, timeout: 2100 },
L: { interval: 600, timeout: 2600 },
M: { interval: 600, timeout: 1500 },
N: { interval: 600, timeout: 1600, },
O: { interval: 550, timeout: 2000 },
P: { interval: 600, timeout: 2500, },
Q: { interval: 650, timeout: 2600 },
R: { interval: 650, timeout: 2000 },
S: { interval: 600, timeout: 2000 },
T: { interval: 700, timeout: 1000 },
U: { interval: 660, timeout: 2200 },
V: { interval: 690, timeout: 2760 },
W: { interval: 520, timeout: 2000 },
X: { interval: 680, timeout: 2900 },
Y: { interval: 600, timeout: 2500 },
Z: { interval: 550, timeout: 2700 },
};



// const alphabetTimings = {
// 	A: { interval: 800, timeout: 2400,},
// 	B: { interval: 700, timeout: 2800, },
// 	C: { interval: 700, timeout: 2800,  },
// 	D: { interval: 500, timeout: 1500, },
// 	E: { interval: 250, timeout: 250,  },
// 	F: { interval: 450, timeout: 2250 },
// 	G: { interval: 500, timeout: 1500},
// 	H: { interval: 500, timeout: 2000 },
// 	I: { interval: 550, timeout: 1100 },
// 	J: { interval: 650, timeout: 2600 },
// 	K: { interval: 800, timeout: 2400 },
// 	L: { interval: 500, timeout: 2000 },
// 	M: { interval: 750, timeout: 1500 },
// 	N: { interval: 550, timeout: 1100, },
// 	O: { interval: 650, timeout: 1950 },
// 	P: { interval: 750, timeout: 3000,  },
// 	Q: { interval: 650, timeout: 2600 },
// 	R: { interval: 450, timeout: 1350 },
// 	S: { interval: 500, timeout: 1500 },
// 	T: { interval: 500, timeout: 500 },
// 	U: { interval: 660, timeout: 1980 },
// 	V: { interval: 690, timeout: 2760 },
// 	W: { interval: 700, timeout: 2100 },
// 	X: { interval: 950, timeout: 3850 },
// 	Y: { interval: 750, timeout: 3150 },
// 	Z: { interval: 600, timeout: 2400 },
// };

const audioContext = new (window.AudioContext || window.webkitAudioContext)();

const morseCode = getMorseCodeForAlphabet(output);
let morseIndex = 0;

let startsWithDot = false;
if (morseCode.charAt(0) === '.') {
startsWithDot = true;
}

// Clear the previous content
while (imageContainer.firstChild) {
imageContainer.removeChild(imageContainer.firstChild);
}

// Create a function to play a dot sound
// function playDot() {
// 	const oscillator = audioContext.createOscillator();
// 	oscillator.type = 'sine';
// 	oscillator.frequency.setValueAtTime(800, audioContext.currentTime); // Adjust the frequency as needed for a dot
// 	oscillator.connect(audioContext.destination);
// 	oscillator.start();
// 	oscillator.stop(audioContext.currentTime + 0.1); // Adjust the duration of the dot
// }

// // Create a function to play a dash sound
// function playDash() {
// 	const oscillator = audioContext.createOscillator();
// 	oscillator.type = 'sine';
// 	oscillator.frequency.setValueAtTime(800, audioContext.currentTime); // Adjust the frequency as needed for a dash
// 	oscillator.connect(audioContext.destination);
// 	oscillator.start();
// 	oscillator.stop(audioContext.currentTime + 0.3); // Adjust the duration of the dash
// }

// Clear the previous content
hideHintButton();


if (imageSources[output]) {
let currentIndex = 0// Start with dot or dash



const containerDiv = document.createElement('div');
containerDiv.style.textAlign = 'center';
// Create an img element
const image = document.createElement('img');
image.src = imageSources[output][currentIndex];
image.alt = `Image for ${output}`;

image.style.width = '245px'; // Set the width
image.style.height = '230px'; // Set the height
image.style.margin = '-45px'; // Adjust margin as needed
image.style.marginLeft = '80px';
image.style.paddingLeft = '140px';



function changeImage() {
    image.src = imageSources[output][currentIndex];
    currentIndex = (currentIndex + 1) % imageSources[output].length;

}
// Append the image to the container
imageContainer.appendChild(image);
const nameDiv = document.createElement('div');
nameDiv.textContent = `${letterNames[output]}`;
// nameDiv.style.textAlign = 'center'; // Center the text horizontally
nameDiv.style.textAlign='left'
nameDiv.style.marginLeft = '275px';



// Append the name div to the container	
imageContainer.appendChild(nameDiv);
nameDiv.style.fontSize='18px'
nameDiv.style.fontWeight = 'bold';
nameDiv.style.padding='25px'

imageContainer.appendChild(nameDiv);
imageContainer.appendChild(containerDiv);
// const audio = audioSources[output];

// const imageChangeInterval = setInterval(changeImage, 500);
//     // Clear the interval after a timeout (e.g., alphabetTimings[output].timeout)
// 	setTimeout(function () {
// 		clearInterval(imageChangeInterval);
// 		const restartButton = document.querySelector('#resetButton');
// 		restartButton.style.display = 'block';
// 	}, alphabetTimings[output].timeout);
const intervalsForF = [400, 380, 480, 420];

let imageChangeInterval = null;
if (output === 'F') {
    let intervalIndex = 0;
    imageChangeInterval = setInterval(function() {
        changeImage();
        intervalIndex = (intervalIndex + 1) % intervalsForF.length;
        
    }, intervalsForF[intervalIndex]); // 320 milliseconds for "F"
    
} 


else {
imageChangeInterval = setInterval(changeImage, 500); // 500 milliseconds for others
}

// Clear the interval after a timeout
setTimeout(function () {
clearInterval(imageChangeInterval);
const restartButton = document.querySelector('#resetButton');
// restartButton.style.display = 'block';
}, alphabetTimings[output].timeout);
    

function playNextMorseCharacter() {
    if (morseIndex < morseCode.length) {
        const symbol = morseCode[morseIndex];
        if (symbol === '.') {
            playDot(); // Play dot sound
        } else if (symbol === '-') {
            playDash(); // Play dash sound
        }
        morseIndex++;
    } else {
        morseIndex = 0;
        currentIndex = (currentIndex + 1) % imageSources[output].length;
        image.src = imageSources[output][currentIndex];
        playSpace();
    }
}

function playSpace() {
    // Add code here to play a pause or space sound
    // You can adjust the duration as needed
    const oscillator = audioContext.createOscillator();
    oscillator.type = 'sine';
    oscillator.frequency.setValueAtTime(0, audioContext.currentTime); // Frequency 0 for a pause
    oscillator.connect(audioContext.destination);
    oscillator.start();
    oscillator.stop(audioContext.currentTime + 0.2); // Adjust the duration of the space
}


const morseInterval = setInterval(playNextMorseCharacter, alphabetTimings[output].interval);

setTimeout(function () {
    clearInterval(morseInterval);
    setTimeout(function () {
        const restartButton = document.querySelector('#resetButton');
        restartButton.style.display = 'block';
    }, 1000);
}, alphabetTimings[output].timeout);
} else {
// If no image found for the selected alphabet, display an error or placeholder message
imageContainer.textContent = 'Image not found';
nameContainer.textContent = '';
}

// Create a function to play a dot sound
// Create a function to play a sound with a given frequency and duration
function playAudio(frequency, duration) {
const oscillator = audioContext.createOscillator();
oscillator.type = 'sine';
oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime);
oscillator.connect(audioContext.destination);
oscillator.start();
oscillator.stop(audioContext.currentTime + duration);
}

// Create a function to play a dot sound
function playDot() {
playAudio(600, 0.45); // Frequency 1200 Hz, Duration 0.3 seconds
}

// Create a function to play a dash sound
function playDash() {
playAudio(600, 0.5); // Frequency 800 Hz, Duration 0.6 seconds
}

// function playFDot() {
//     playAudio(500, 0.5); // Custom Frequency and Duration for "F" dot
// }
console.log("hint images are displayed")
// // Define the playFDash function for letter "F"
// function playFDash() {
//     playAudio(700, 0.5); // Custom Frequency and Duration for "F" dash
// }


}

// Define Morse code sequences for each alphabet
function getMorseCodeForAlphabet(alphabet) {
const morseCodes = {
A: '.-',     // Morse code for A
B: '-...',   // Morse code for B
C: '-.-.',   // Morse code for C
D: '-..',    // Morse code for D
E: '.',      // Morse code for E
F: '..-.',   // Morse code for F
G: '--.',    // Morse code for G
H: '....',   // Morse code for H
I: '..',      // Morse code for I
J: '.---',   // Morse code for J
K: '-.-',    // Morse code for K
L: '.-..',   // Morse code for L
M: '--',     // Morse code for M
N: '-.',     // Morse code for N
O: '---',    // Morse code for O
P: '.--.',   // Morse code for P
Q: '--.-',   // Morse code for Q
R: '.-.',    // Morse code for R
S: '...',    // Morse code for S
T: '-',      // Morse code for T
U: '..-',    // Morse code for U
V: '...-',   // Morse code for V
W: '.--',    // Morse code for W
X: '-..-',   // Morse code for X
Y: '-.--',   // Morse code for Y
Z: '--..'    // Morse code for Z
};


return morseCodes[alphabet] || '';
}









// Function to display images after clicking the "Hint to remember" button
function getOption9() {
const selectElement = document.querySelector('#alphabetInput');
const output = selectElement.value.toUpperCase();
const imageContainer = document.querySelector('.outputImg');
const nameContainer = document.querySelector('.outputName');

// const playbackRates = {
//     V: 0.2 // Set a custom playback rate for "V"
// };


}



// Function to reset to Step One
function resetToStepOne() {
document.getElementById('canvas1').style.visibility = 'visible';
document.getElementById('canvas2').style.visibility = 'hidden';
document.getElementById('alphabetInput').value = ''; 
// Clear the stored user input	
// clearStepTwo();
document.getElementById('errorText').textContent = '';

const selectedAlphabetElement = document.querySelector('.output');
const morseOutputElement = document.querySelector('.out');


selectedAlphabetElement.textContent = '';
morseOutputElement.textContent='';

// hideImages();
console.log("repeat button is clicked")
hideHintButton();
clearMorseCode()
const submitButton = document.getElementById('nextButton1');
submitButton.disabled = true;
}


function hideImages() {
// Add code here to hide any previously displayed images
// For example:
const imageElements = document.querySelectorAll('.outputImg'); // Replace with the actual class used for images
for (const imageElement of imageElements) {
imageElement.style.display = 'none';
}
}

function hideHintButton() {
const hintButton = document.getElementById('hintButton');
hintButton.style.display = 'none';


}





function showHintButton() {
const hintButton = document.getElementById('hintButton');
hintButton.style.display = 'block';
}

function clearImages() {
const imageContainer = document.querySelector('.outputImg');
while (imageContainer.firstChild) {
imageContainer.removeChild(imageContainer.firstChild);
}
}

function clearName() {

const nameContainer = document.querySelector('.outputName');
nameContainer.textContent = ''; // Clear the text content
}



function clearMorseCode() {

// const morseCodeContainer = document.querySelector('.out2');
// morseCodeContainer.textContent = ''; // Clear the text content
document.getElementById("morseOutput").textContent = "";
console.log("clearMorseCode is clicked")

}


// Function to submit Step One

function submitStepOne() {
console.log("submitStepOne called");
clickCount = 0;
const alphabetInput = document.getElementById('alphabetInput').value;
clearImages();
clearName();
clearMorseCode();

const restartButton =document.querySelector('#resetButton');
restartButton.style.display='none';

showHintButton();

const submitButton = document.getElementById('nextButton1');



if (alphabetInput.length === 1 && /^[a-zA-Z]+$/.test(alphabetInput)) {
userInput=alphabetInput;
document.getElementById('canvas1').style.visibility = 'hidden';
document.getElementById('canvas2').style.visibility = 'visible';

// Initialize the audio context here
if (!audioContext) {
    audioContext = new (window.AudioContext || window.webkitAudioContext)();
}
preloadAudio();
morseIndex = 0;
//   submitButton.disabled = false;
} else {
document.getElementById('errorText').textContent = 'Please enter a single alphabet.';
submitButton.disabled = true;
return;
}

}




function initializeAudioContext() {
audioContext = new (window.AudioContext || window.webkitAudioContext)();
}

// Function to preload audio
function preloadAudio() {
if (!audioContext) {
initializeAudioContext();
}

// Create a silent audio buffer
const buffer = audioContext.createBuffer(1, 1, audioContext.sampleRate);
const source = audioContext.createBufferSource();
source.buffer = buffer;

source.connect(audioContext.destination);
source.start();
source.stop(audioContext.currentTime + 0.001); // Very short silent audio
}


//    let userInput = '';
//   let isButtonClicked = false;
//   function displayStepTwo() {

// 	console.log("hi displayStepTwo called");
// 	// clearMorseCode();
//     const selectedAlphabetElement = document.querySelector('.output');

//     selectedAlphabetElement.textContent = userInput;
// 	const morseOutputElement = document.querySelector('.out');
// 	morseOutputElement.textContent=userInput;

// 	// document.getElementById('out2').textContent = "";
// 	const submitButton = document.getElementById('nextButton1');

// 	if (userInput.length !== 1 || !/^[a-zA-Z]+$/.test(userInput)) {
//         submitButton.disabled = true; // Disable the button if userInput is not a single alphabet
//     }

// 	// hideImages();
// 	// showHintButton();
// 	const restartButton =document.querySelector('#resetButton');
// 	restartButton.style.display='none';

// 	// setTimeout(function (){
// 	// 	const restartButton =document.querySelector('#resetButton');
// 	// 	restartButton.style.display='block'
// 	// },2000);


// }



function playMorseCode2() {
const selectedAlphabet = document.querySelector('#alphabetInput').value.toUpperCase();
const audioElement = document.getElementById(`audio${selectedAlphabet}`);

// Define playback rate values and delays for each alphabet


// const playbackRates = {
// 	'A': { rate: 0.28, delay: 800 },
// 	'B': { rate: 0.2, delay: 400 },
// 	'C': { rate: 0.25, delay: 600 },
// 	'D': { rate: 0.33, delay: 600 },
// 	'E': { rate: 0.5, delay: 600 },
// 	'F': { rate: 0.315, delay: 700 },
// 	'G': { rate: 0.4, delay: 300 },
// 	'H': { rate: 0.25, delay:500 },
// 	'I': { rate: 0.25, delay: 500 },
// 	'J': { rate: 0.3, delay: 500 },
// 	'K': { rate: 0.25, delay: 500 },
// 	'L': { rate: 0.32, delay: 500 },
// 	'M': { rate: 0.25, delay: 700 },
// 	'N': { rate: 0.42, delay: 550 },
// 	'O': { rate: 0.4, delay: 800 },
// 	'P': { rate: 0.25, delay: 600 },
// 	'Q': { rate: 0.3, delay: 600 },
// 	'R': { rate: 0.325, delay: 400 },
// 	'S': { rate: 0.2, delay: 400 },
// 	'T': { rate: 0.9, delay: 400 },
// 	'U': { rate: 0.2, delay: 500 },
// 	'V': { rate: 0.7, delay: 500 },
// 	'W': { rate: 0.3, delay: 700 },
// 	'X': { rate: 0.18, delay: 500 },
// 	'Y': { rate: 0.24, delay: 800 },
// 	'Z': { rate: 0.33, delay: 600 },
//   };


// Define delays for specific alphabets
// const delays = {
//   'A': 500, // 300 milliseconds delay for 'A'
//   // Add delays for other alphabets as needed
// };

// Check if the selected alphabet has a defined playback rate
if (playbackRates.hasOwnProperty(selectedAlphabet)) {
const { rate, delay } = playbackRates[selectedAlphabet];
const audioElement = document.getElementById(`audio${selectedAlphabet}`);

// Calculate the delay based on the playback rate or use the predefined delay
//   const delay = delays.hasOwnProperty(selectedAlphabet) ? delays[selectedAlphabet] : (playbackRate * 1000); // Multiply by 1000 to convert to milliseconds
audioElement.playbackRate = rate;

// Use setTimeout to play the audio with the specified delay
setTimeout(function () {
audioElement.play();
}, delay);
}
}









// Define your charToMorse dictionary and other variables here
const charToMorse = {
'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 'F': '..-.', 'G': '--.', 'H': '....', 'I': '..', 'J': '.---',
'K': '-.-', 'L': '.-..', 'M': '--', 'N': '-.', 'O': '---', 'P': '.--.', 'Q': '--.-', 'R': '.-.', 'S': '...', 'T': '-',
'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-', 'Y': '-.--', 'Z': '--..',
'a': '.-', 'b': '-...', 'c': '-.-.', 'd': '-..', 'e': '.', 'f': '..-.', 'g': '--.', 'h': '....', 'i': '..', 'j': '.---',
'k': '-.-', 'l': '.-..', 'm': '--', 'n': '-.', 'o': '---', 'p': '.--.', 'q': '--.-', 'r': '.-.', 's': '...', 't': '-',
'u': '..-', 'v': '...-', 'w': '.--', 'x': '-..-', 'y': '-.--', 'z': '--..'
};

// Function to play audio for a specified duration (milliseconds)
// function playAudio(duration, frequency) {
//     const audioContext = new (window.AudioContext || window.webkitAudioContext)();
//     const oscillator = audioContext.createOscillator();
//     const gainNode = audioContext.createGain();

//     oscillator.type = 'sine';
//     oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime); // Adjust the frequency as needed (lower frequency for lighter tone)
//     oscillator.connect(gainNode);
//     gainNode.connect(audioContext.destination);

//     oscillator.start();
//     gainNode.gain.setValueAtTime(1.5, audioContext.currentTime);
//     gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + duration / 1000); // Adjust the duration as needed

//     oscillator.stop(audioContext.currentTime + duration / 1000);
// }

const audioContext = new (window.AudioContext || window.webkitAudioContext)();



// Define the playAudio function
function playAudio(frequency, duration) {
const oscillator = audioContext.createOscillator();
const gainNode = audioContext.createGain();
oscillator.type = 'sine';
oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime);
oscillator.connect(gainNode);
oscillator.connect(audioContext.destination);

// gainNode.gain.setValueAtTime(0, audioContext.currentTime); // Set initial volume to 0
oscillator.start();
// oscillator.start(audioContext.currentTime);
// gainNode.gain.linearRampToValueAtTime(1, audioContext.currentTime + 0.01); 
gainNode.gain.setValueAtTime(1, audioContext.currentTime);
oscillator.stop(audioContext.currentTime + duration);
}




// Define the playDot function
function playDot() {
playAudio(600, 0.3); // Frequency 400 Hz, Duration 0.3 seconds for a dot
}

// Define the playDash function
function playDash() {
playAudio(600, 0.5); // Frequency 400 Hz, Duration 0.6 seconds for a dash
}


function playFDot() {
playAudio(600, 0.3); // Custom Frequency and Duration for "F" dot
}

// Define the playFDash function for letter "F"
function playFDash() {
playAudio(600, 0.5); // Custom Frequency and Duration for "F" dash
}



function checkInput() {
const alphabetInput = document.getElementById('alphabetInput').value;
const submitButton = document.getElementById('nextButton1');

if (alphabetInput.length === 1 && alphabetInput.match(/[a-zA-Z]/)) {
submitButton.disabled = false;


} else {
submitButton.disabled = true;
}

}

document.addEventListener("DOMContentLoaded", function() {
var input =document.getElementById("alphabetInput")
var submitButton = document.getElementById("nextButton1");
input.addEventListener("keypress",function(event){
if(event.key === "Enter"){
event.preventDefault();

 // Check the content of the input field
 var alphabetInputValue = input.value;
 if (alphabetInputValue.length !== 1 || !/^[a-zA-Z]+$/.test(alphabetInputValue)) {
    // Input doesn't meet the criteria, so disable the button
    document.getElementById("nextButton1").disabled = true;
  }
// document.getElementById("nextButton1").click();
else {
    // Input meets the criteria, so enable the button
    document.getElementById("nextButton1").disabled = false;
    document.getElementById("nextButton1").click();
  }
}
})
input.addEventListener("input", function() {
var alphabetInputValue = input.value;
if (alphabetInputValue.length !== 1 || !/^[a-zA-Z]+$/.test(alphabetInputValue)) {
// Input doesn't meet the criteria, so disable the button
document.getElementById("nextButton1").disabled = true;
} else {
document.getElementById("nextButton1").disabled = false;
}
});

});

// Define the playMorseSequence function
// let firstCharacter = true;
let isPlaying = false;
let isFirstCharacter = true;
let isAnimationCompleted = true;
let fullMorse = '';
let clickCount = 0; 
let currentCharIndex = 0;
// let isFirstClick = true;
// let isRestarted = false;

async function playMorseSequence() {
if (isPlaying) return; // Return if Morse code is already playing
isPlaying = true; // 

const userInput = document.querySelector('#alphabetInput').value.toUpperCase();
const morseOutput = document.querySelector('#morseOutput');
fullMorse = '';
morseOutput.textContent = '';
currentCharIndex = 0; // Clear the previous Morse code

// const firstCharacterDelay = isFirstCharacter ? 600 : 70;
const characterDelay = isFirstCharacter ? 600 : 600;// Delay for the first character is 600ms or 200ms, then 120ms
// let fullMorse = ''; 
let i = currentCharIndex;

async function animateMorseCode() {
const char = userInput[i];
if (char in charToMorse) {
  const morseChar = charToMorse[char];

for (let j = 0; j < morseChar.length; j++) {
    const symbol = morseChar[j];
    if (symbol === '.') {

        fullMorse += '.';		
        if (char === 'F' || char === 'f') {
            playFDot(); // Play the custom sound for "F" dot
        } else {
            playDot(); // Play a short sound for dot
        } // Play a short sound for dot with a frequency of 500 Hz
    }	
    
     else if (symbol === '-') {
            fullMorse += '-'; // Append dash to the Morse code
            if (char === 'F' || char === 'f') {
                playFDash(); // Play the custom sound for "F" dash
            } else {
                playDash(); // Play a longer sound for dash
            }
        // Adjust the dash size as needed
   
         // Play a longer sound for dash with a frequency of 700 Hz
     }
     morseOutput.textContent = fullMorse;
     if (isFirstCharacter) {
        // await sleep(isAnimationCompleted ? 600 : 600);
        // isFirstCharacter = false;
        await sleep(characterDelay);
        
        
    }
    // else {
    // 	await sleep(characterDelay);
    // }
}
// 			fullMorse += ' '; // Add a space between characters in the full Morse code
//             morseOutput.textContent = fullMorse; // Update the display with the full Morse code

//     } else {
//         // Handle invalid characters
//         morseOutput.textContent += 'Invalid character: ' + char;
// 		await sleep(characterDelay);
//     }
console.log("morsecode playbutton is called")
// }
// isRestarted = true;
// isPlaying = false;
// isAnimationCompleted = true;
// // isFirstCharacter = true;

// }

currentCharIndex = i + 1;
i++;
fullMorse += ' '; // Add a space between characters in the full Morse code
morseOutput.textContent = fullMorse;

if (i < userInput.length) {
setTimeout(animateMorseCode, 0); // Start the next character immediately
} else {
// Reset the flags and stop playing
isFirstCharacter = true;
isPlaying = false;
currentCharIndex = 0;
document.getElementById("playButton").disabled = false;
}
}

}
if (clickCount >= 1 ) {

document.getElementById("playButton").disabled = true;

setTimeout(() => {
isFirstCharacter = true; // Reset isFirstCharacter after a 100ms delay
isAnimationCompleted = false;
morseOutput.innerHTML = `<span class="morse-char-initial">${fullMorse.charAt(0)}</span>${fullMorse.substring(1)}`;
setTimeout(() => {
morseOutput.innerHTML = fullMorse;
document.getElementById("playButton").disabled = false; // Re-enable the play button after 100ms
}, 32);
}, 100);
}
clickCount++;
animateMorseCode();
}

// Add an event listener to the Play Morse Code button
document.addEventListener("DOMContentLoaded", function () {
document.getElementById("playButton").addEventListener("click", () => {
if (!isPlaying) {
document.getElementById("playButton").disabled = true;
playMorseSequence();
}
});
});

function sleep(ms) {
return new Promise(resolve => setTimeout(resolve, ms));
}




// // Add an event listener to the Play Morse Code button
// document.getElementById("playButton").addEventListener("click", () => {
// 	document.getElementById("playButton").disabled = true;
// 	if (!isPlaying) {
//         if (clickCount >= 1) {
//             setTimeout(() => {
//                 isFirstCharacter = true; // Reset isFirstCharacter after 300ms delay
//                 isAnimationCompleted = false;
//             },100 );
//         }
//         clickCount++;
//       playMorseSequence().then(() => {
//             setTimeout(() => {
//                 isFirstCharacter = false; // Hide the first character after 100ms
// 				morseOutput.innerHTML = `<span class="morse-char-initial">${fullMorse.charAt(0)}</span>${fullMorse.substring(1)}`;
//                 setTimeout(() => {
// 					morseOutput.innerHTML = `<span class="morse-char-initial">${fullMorse.charAt(0)}</span>${fullMorse.substring(1)}`;
//                     document.getElementById("playButton").disabled = false; // Re-enable the first character after 100ms
//                 }, 100);
//             }, 100);
//         });
//     }
// });

// function sleep(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
// }


