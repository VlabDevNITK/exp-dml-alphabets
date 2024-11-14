let simsubscreennum = 0;
let temp = 0;

function navNext() {
  for (temp = 0; temp < 2; temp++) {
    document.getElementById("canvas" + temp).style.display = "none";
  }

  simsubscreennum += 1;
  //
  document.getElementById("canvas" + simsubscreennum).style.display = "block";
  document.getElementById("nextButton").style.display = "none";
  // magic();
}

function animatearrow() {
  if (document.getElementById("arrow1").style.visibility == "hidden")
    document.getElementById("arrow1").style.visibility = "visible";
  else document.getElementById("arrow1").style.visibility = "hidden";
}

function myStopFunction() {
  clearInterval(myInt);
  document.getElementById("arrow1").style.visibility = "hidden";
}

function validateInput() {
  const inputField = document.getElementById("alphabetInput");
  const errorText = document.getElementById("errorText");
  const hintButton = document.getElementById("hintButton");
  const morseOutput = document.getElementById("morseOutput");
  const outputImg = document.querySelector(".outputImg");
  const playButton = document.getElementById("playButton");
  const hintColumn = document.querySelector(".hintColumn");
  const imageContainer = document.querySelector(".imageContent");

  let alphabetInput = inputField.value.toUpperCase();
  alphabetInput = alphabetInput.replace(/[^A-Z]/g, "");
  inputField.value = alphabetInput;

  document.querySelector(".output").textContent = alphabetInput;
  document.querySelector(".out").textContent = alphabetInput;

  if (alphabetInput.length === 1) {
    errorText.textContent = "";
    hintButton.style.visibility = "visible";
    outputImg.style.visibility = "hidden";
    hintColumn.style.display = "grid";
    hintButton.style.display = "grid";
    imageContainer.style.display = "none";

    morseOutput.style.visibility = "hidden";
    updateMorseOutput(alphabetInput, true);
    playButton.disabled = false;
  } else {
    if (alphabetInput.length > 0) {
      errorText.textContent = "Please enter a single alphabet from A to Z.";
      hintColumn.style.display = "none";
    } else {
      errorText.textContent = "";
      //   hintColumn.style.display ="none";
    }
    hintButton.style.visibility = "hidden";
    outputImg.style.visibility = "hidden";
    morseOutput.style.visibility = "hidden";
    playButton.disabled = true;
  }
}

function handleInputChange() {
  const input = document.getElementById("alphabetInput");
  const hintButton = document.getElementById("hintButton");
  const isAlphabetic = /^[a-zA-Z]$/.test(input.value);

  if (isAlphabetic) {
    hintButton.style.display = "block";
  } else {
    hintButton.style.display = "none";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const inputField = document.getElementById("alphabetInput");
  const hintButton = document.getElementById("hintButton");

  // Initialize the input field value and update output elements
  inputField.value = "";
  // document.querySelector(".output").textContent = "";
  document.querySelector(".out").textContent = "";

  validateInput();
});


//================================//

// let isPlaying = false;

// async function playMorseSequence() {
//   if (isPlaying) return;
//   isPlaying = true;

//   const inputField = document.getElementById("alphabetInput");
//   inputField.disabled = true;

//   const userInput = inputField.value.toUpperCase();
//   const morseOutput = document.querySelector("#morseOutput");
//   morseOutput.textContent = "";
//   let currentCharIndex = 0;

//   const intervalDuration = 800;
//   const context = new (window.AudioContext || window.webkitAudioContext)();

//   // Ensure audio context is resumed before starting playback
//   await context.resume();

//   let oscillator;
//   let isFirstSymbol = true; // Flag to track the first Morse code symbol

//   async function animateMorseCode() {
//     if (currentCharIndex < userInput.length) {
//       const char = userInput[currentCharIndex];
//       if (char in charToMorse) {
//         const morseChar = charToMorse[char];
//         let morseIndex = 0;

//         async function playSymbol() {
//           if (morseIndex < morseChar.length) {
//             const symbol = morseChar[morseIndex];

//             // Introduce 1000ms delay only for the first Morse code symbol
//             if (isFirstSymbol) {
//               await sleep(600);
//               isFirstSymbol = false; // After the first symbol, set the flag to false
//             }

//             oscillator = context.createOscillator();
//             oscillator.frequency.value = 600;
//             oscillator.connect(context.destination);
//             oscillator.start();

//             if (symbol === ".") {
//               setTimeout(() => {
//                 oscillator.stop();
//                 morseOutput.textContent += ".";
//               }, 100);
//             } else if (symbol === "-") {
//               setTimeout(() => {
//                 oscillator.stop();
//                 morseOutput.textContent += "-";
//               }, 300);
//             }

//             morseIndex++;
//             setTimeout(playSymbol, intervalDuration);
//           } else {
//             currentCharIndex++;
//             setTimeout(animateMorseCode, intervalDuration);
//           }
//         }

//         playSymbol();
//       } else {
//         morseOutput.textContent += "Invalid character: " + char;
//         currentCharIndex++;
//         await sleep(intervalDuration);
//         setTimeout(animateMorseCode, intervalDuration);
//       }
//     } else {
//       isPlaying = false;
//       inputField.disabled = false;
//       document.getElementById("playButton").disabled = false;
//     }
//   }

//   document.getElementById("playButton").disabled = true;
//   animateMorseCode();
// }

// function sleep(ms) {
//   return new Promise((resolve) => setTimeout(resolve, ms));
// }

let isPlaying = false;
let context;
let oscillator;
let isPreloaded = false;

function preloadAudio() {
  if (!isPreloaded) {
    context = new (window.AudioContext || window.webkitAudioContext)();

    // Preload the oscillator to avoid delay
    oscillator = context.createOscillator();
    oscillator.frequency.value = 600;
    oscillator.connect(context.destination);

    isPreloaded = true;
  }
}

async function playMorseSequence() {
  if (isPlaying) return;
  isPlaying = true;

  const inputField = document.getElementById("alphabetInput");
  inputField.disabled = true;

  const userInput = inputField.value.toUpperCase();
  const morseOutput = document.querySelector("#morseOutput");
  morseOutput.textContent = "";
  let currentCharIndex = 0;

  const intervalDuration = 800;

  // Ensure audio context is resumed before starting playback
  await context.resume();

  let isFirstSymbol = true; // Flag to track the first Morse code symbol

  async function animateMorseCode() {
    if (currentCharIndex < userInput.length) {
      const char = userInput[currentCharIndex];
      if (char in charToMorse) {
        const morseChar = charToMorse[char];
        let morseIndex = 0;

        async function playSymbol() {
          if (morseIndex < morseChar.length) {
            const symbol = morseChar[morseIndex];

            // Introduce 600ms delay only for the first Morse code symbol
            if (isFirstSymbol) {
              await sleep(600);
              isFirstSymbol = false; // After the first symbol, set the flag to false
            }

            oscillator = context.createOscillator(); // Create a new oscillator for each symbol
            oscillator.frequency.value = 600;
            oscillator.connect(context.destination);
            oscillator.start();

            if (symbol === ".") {
              setTimeout(() => {
                oscillator.stop();
                morseOutput.textContent += ".";
              }, 100);
            } else if (symbol === "-") {
              setTimeout(() => {
                oscillator.stop();
                morseOutput.textContent += "-";
              }, 300);
            }

            morseIndex++;
            setTimeout(playSymbol, intervalDuration);
          } else {
            currentCharIndex++;
            setTimeout(animateMorseCode, intervalDuration);
          }
        }

        playSymbol();
      } else {
        morseOutput.textContent += "Invalid character: " + char;
        currentCharIndex++;
        await sleep(intervalDuration);
        setTimeout(animateMorseCode, intervalDuration);
      }
    } else {
      isPlaying = false;
      inputField.disabled = false;
      document.getElementById("playButton").disabled = false;
    }
  }

  document.getElementById("playButton").disabled = true;
  animateMorseCode();
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Preload audio resources when the page loads
window.onload = preloadAudio;


function updateMorseOutput(alphabet, reset = false) {
  const char = alphabet.toUpperCase();
  const morseCodeMapping = {
    A: ".-",
    B: "-...",
    C: "-.-.",
    D: "-..",
    E: ".",
    F: "..-.",
    G: "--.",
    H: "....",
    I: "..",
    J: ".---",
    K: "-.-",
    L: ".-..",
    M: "--",
    N: "-.",
    O: "---",
    P: ".--.",
    Q: "--.-",
    R: ".-.",
    S: "...",
    T: "-",
    U: "..-",
    V: "...-",
    W: ".--",
    X: "-..-",
    Y: "-.--",
    Z: "--..",
  };

  const morseCode = morseCodeMapping[char];
  const morseOutput = document.getElementById("morseOutput");

  if (morseCode) {
    if (reset) {
      morseOutput.textContent = "";
    }
    morseOutput.style.visibility = "visible";
  } else {
    morseOutput.textContent = "";
    morseOutput.style.visibility = "hidden";
  }
}

function updateOutputImg(alphabet) {
  // Implement the logic to show the image for the given alphabet
  const outputImg = document.querySelector(".outputImg");

  // Example logic for updating the image (replace with your actual logic)
  if (alphabet) {
    // Show the image related to the alphabet
    outputImg.style.visibility = "hidden";
  }
}

const charToMorse = {
  A: ".-",
  B: "-...",
  C: "-.-.",
  D: "-..",
  E: ".",
  F: "..-.",
  G: "--.",
  H: "....",
  I: "..",
  J: ".---",
  K: "-.-",
  L: ".-..",
  M: "--",
  N: "-.",
  O: "---",
  P: ".--.",
  Q: "--.-",
  R: ".-.",
  S: "...",
  T: "-",
  U: "..-",
  V: "...-",
  W: ".--",
  X: "-..-",
  Y: "-.--",
  Z: "--..",
  a: ".-",
  b: "-...",
  c: "-.-.",
  d: "-..",
  e: ".",
  f: "..-.",
  g: "--.",
  h: "....",
  i: "..",
  j: ".---",
  k: "-.-",
  l: ".-..",
  m: "--",
  n: "-.",
  o: "---",
  p: ".--.",
  q: "--.-",
  r: ".-.",
  s: "...",
  t: "-",
  u: "..-",
  v: "...-",
  w: ".--",
  x: "-..-",
  y: "-.--",
  z: "--..",
};

function displayHintImages() {
  const selectElement = document.querySelector("#alphabetInput");
  const output = selectElement.value.toUpperCase();
  const imageContent = document.querySelector(".imageContent");
  imageContent.style.display = "flex";

  const imageContainer = document.querySelector(".outputImg");
  imageContainer.style.visibility = "visible";
  const nameContainer = document.querySelector(".outputName");

  //   const nameDiv = document.querySelector(".nameDiv");

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

  const audioContext = new (window.AudioContext || window.webkitAudioContext)();

  const morseCode = getMorseCodeForAlphabet(output);
  let morseIndex = 0;

  // Clear previous content
  while (imageContainer.firstChild) {
    imageContainer.removeChild(imageContainer.firstChild);
  }

  hideHintButton();

  if (images[output]) {
    let currentIndex = 0;

    // Create and style the image element
    const image = document.createElement("img");
    image.src = images[output].normal; // Start with the normal image
    image.alt = `Image for ${output}`;
    image.style.width = "100%";
    image.style.minWidth = "205px"; // Maximum width of 400px
    image.style.height = "auto"; // Auto height to maintain aspect ratio
    image.style.maxHeight = "250px";
    // image.style.margin = "-45px";
    // image.style.marginLeft = "80px";
    // image.style.paddingLeft = "140px";

    // Append the image to the container
    imageContainer.appendChild(image);

    // nameContainer.textContent = letterNames[output] || '';

    const nameDiv = document.createElement("div");
    nameDiv.textContent = letterNames[output];
    nameDiv.className = "nameDiv";

    // Append the name div to the container
    imageContainer.appendChild(nameDiv);

    // Define the timing intervals
    const intervalTime = 800; // Fixed interval for image change

    // Function to play sound
    function playSound(duration) {
      const oscillator = audioContext.createOscillator();
      oscillator.type = "sine";
      oscillator.frequency.setValueAtTime(600, audioContext.currentTime);
      oscillator.connect(audioContext.destination);
      oscillator.start();
      oscillator.stop(audioContext.currentTime + duration / 1000); // Convert duration to seconds
    }

    // Function to change the image
    let dotIndex = 1;
    let dashIndex = 1;

    function changeImage() {
      if (morseIndex < morseCode.length) {
        const symbol = morseCode[morseIndex];
        let imageSrc;

        if (symbol === ".") {
          // Build the image source based on dotIndex
          imageSrc =
            images[output]["dot" + (dotIndex > 1 ? dotIndex : "")] ||
            images[output].dot;
          playSound(100); // Duration for dot

          // Increment dotIndex for the next dot image
          dotIndex++;
        } else if (symbol === "-") {
          // Build the image source based on dashIndex
          imageSrc =
            images[output]["dash" + (dashIndex > 1 ? dashIndex : "")] ||
            images[output].dash;
          playSound(300); // Duration for dash

          // Increment dashIndex for the next dash image
          dashIndex++;
        }

        // Log information for debugging
        console.log(
          "Morse Code Symbol:",
          symbol,
          "Image Src:",
          imageSrc,
          "Current Index:",
          morseIndex
        );

        // Set the image source
        image.src = imageSrc;
        morseIndex++; // Move to the next Morse code symbol

        // Continue to the next image
        setTimeout(changeImage, intervalTime);
      } else {
        // Show the final Morse code image (no reset to normal)
        // setTimeout(function () {
        //     image.src = images[output].normal; // Reset to normal image
        // }, intervalTime);
      }
    }

    // Initialize the counters before starting the image change process
    dotIndex = 1;
    dashIndex = 1;

    // Start the image change process
    setTimeout(changeImage, intervalTime);
  } else {
    // If no image found for the selected alphabet, display an error or placeholder message
    imageContainer.textContent = "Image not found";
    nameContainer.textContent = "";
  }
  // Add event listener to the "Hint to Remember" button
  //  document.querySelector("#hintToRememberButton").addEventListener("click", displayHintImages);
}

function hideHintButton() {
  const hintButton = document.getElementById("hintButton");
  hintButton.style.display = "none";
}

function getMorseCodeForAlphabet(alphabet) {
  const morseCodes = {
    A: ".-", // Morse code for A
    B: "-...", // Morse code for B
    C: "-.-.", // Morse code for C
    D: "-..", // Morse code for D
    E: ".", // Morse code for E
    F: "..-.", // Morse code for F
    G: "--.", // Morse code for G
    H: "....", // Morse code for H
    I: "..", // Morse code for I
    J: ".---", // Morse code for J
    K: "-.-", // Morse code for K
    L: ".-..", // Morse code for L
    M: "--", // Morse code for M
    N: "-.", // Morse code for N
    O: "---", // Morse code for O
    P: ".--.", // Morse code for P
    Q: "--.-", // Morse code for Q
    R: ".-.", // Morse code for R
    S: "...", // Morse code for S
    T: "-", // Morse code for T
    U: "..-", // Morse code for U
    V: "...-", // Morse code for V
    W: ".--", // Morse code for W
    X: "-..-", // Morse code for X
    Y: "-.--", // Morse code for Y
    Z: "--..", // Morse code for Z
  };

  return morseCodes[alphabet] || "";
}

const images = {
  A: {
    normal: "./images/A (Archery)/1.PNG",
    dot: "./images/A (Archery)/2.PNG",
    dash: "./images/A (Archery)/3.PNG",
  },
  B: {
    normal: "./images/B (Banjo)/1.PNG",
    dash: "./images/B (Banjo)/2.PNG",
    dot: "./images/B (Banjo)/3.PNG",
    dot2: "./images/B (Banjo)/4.PNG",
    dot3: "./images/B (Banjo)/5.PNG",
  },
  C: {
    normal: "./images/C (Candy)/1.PNG",
    dash: "./images/C (Candy)/2.PNG",
    dot: "./images/C (Candy)/3.PNG",
    dash2: "./images/C (Candy)/4.PNG",
    dot2: "./images/C (Candy)/5.PNG",
  },
  D: {
    normal: "./images/D (Dog)/1.PNG",
    dash: "./images/D (Dog)/2.PNG",
    dot: "./images/D (Dog)/3.PNG",
    dot2: "./images/D (Dog)/4.PNG",
  },
  E: {
    normal: "./images/E (Eye)/1.PNG",
    dot: "./images/E (Eye)/2.PNG",
  },
  F: {
    normal: "./images/F (Firetruck)/1.PNG",
    dot: "./images/F (Firetruck)/2.PNG",
    dot2: "./images/F (Firetruck)/3.PNG",
    dash: "./images/F (Firetruck)/4.PNG",
    dot3: "./images/F (Firetruck)/5.PNG",
  },
  G: {
    normal: "./images/G (Giraffe)/1.PNG",
    dash: "./images/G (Giraffe)/2.PNG",
    dash2: "./images/G (Giraffe)/3.PNG",
    dot: "./images/G (Giraffe)/4.PNG",
  },
  H: {
    normal: "./images/H (Hippo)/1.PNG",
    dot: "./images/H (Hippo)/2.PNG",
    dot2: "./images/H (Hippo)/3.PNG",
    dot3: "./images/H (Hippo)/4.PNG",
    dot4: "./images/H (Hippo)/5.PNG",
  },
  I: {
    normal: "./images/I (Insect)/1.PNG",
    dot: "./images/I (Insect)/2.PNG",
    dot2: "./images/I (Insect)/3.PNG",
  },
  J: {
    normal: "./images/J (Jet)/1.PNG",
    dot: "./images/J (Jet)/2.PNG",
    dash: "./images/J (Jet)/3.PNG",
    dash2: "./images/J (Jet)/4.PNG",
    dash3: "./images/J (Jet)/5.PNG",
  },
  K: {
    normal: "./images/K (Kite)/1.PNG",
    dash: "./images/K (Kite)/2.PNG",
    dot: "./images/K (Kite)/3.PNG",
    dash2: "./images/K (Kite)/4.PNG",
  },
  L: {
    normal: "./images/L (Laboratory)/1.PNG",
    dot: "./images/L (Laboratory)/2.PNG",
    dash: "./images/L (Laboratory)/3.PNG",
    dot2: "./images/L (Laboratory)/4.PNG",
    dot3: "./images/L (Laboratory)/5.PNG",
  },
  M: {
    normal: "./images/M (Mustache)/1.PNG",
    dash: "./images/M (Mustache)/2.PNG",
    dash2: "./images/M (Mustache)/3.PNG",
  },
  N: {
    normal: "./images/N (Net)/1.PNG",
    dash: "./images/N (Net)/2.PNG",
    dot: "./images/N (Net)/3.PNG",
  },
  O: {
    normal: "./images/O (Orchestra)/1.PNG",
    dash: "./images/O (Orchestra)/2.PNG",
    dash2: "./images/O (Orchestra)/3.PNG",
    dash3: "./images/O (Orchestra)/4.PNG",
  },
  P: {
    normal: "./images/P (Paddle)/1.PNG",
    dot: "./images/P (Paddle)/2.PNG",
    dash: "./images/P (Paddle)/3.PNG",
    dash2: "./images/P (Paddle)/4.PNG",
    dot2: "./images/P (Paddle)/5.PNG",
  },
  Q: {
    normal: "./images/Q (Quarterback)/1.PNG",
    dash: "./images/Q (Quarterback)/2.PNG",
    dash2: "./images/Q (Quarterback)/3.PNG",
    dot: "./images/Q (Quarterback)/4.PNG",
    dash3: "./images/Q (Quarterback)/5.PNG",
  },
  R: {
    normal: "./images/R (Robot)/1.PNG",
    dot: "./images/R (Robot)/2.PNG",
    dash: "./images/R (Robot)/3.PNG",
    dot2: "./images/R (Robot)/4.PNG",
  },
  S: {
    normal: "./images/S (Submarine)/1.PNG",
    dot: "./images/S (Submarine)/2.PNG",
    dot2: "./images/S (Submarine)/3.PNG",
    dot3: "./images/S (Submarine)/4.PNG",
  },
  T: {
    normal: "./images/T (Tape)/1.PNG",
    dash: "./images/T (Tape)/2.PNG",
  },
  U: {
    normal: "./images/U (Unicorn)/1.PNG",
    dot: "./images/U (Unicorn)/2.PNG",
    dot2: "./images/U (Unicorn)/3.PNG",
    dash: "./images/U (Unicorn)/4.PNG",
  },
  V: {
    normal: "./images/V (Vacuum)/1.PNG",
    dot: "./images/V (Vacuum)/2.PNG",
    dot2: "./images/V (Vacuum)/3.PNG",
    dot3: "./images/V (Vacuum)/4.PNG",
    dash: "./images/V (Vacuum)/5.PNG",
  },
  W: {
    normal: "./images/W (Wand)/1.PNG",
    dot: "./images/W (Wand)/2.PNG",
    dash: "./images/W (Wand)/3.PNG",
    dash2: "./images/W (Wand)/4.PNG",
  },
  X: {
    normal: "./images/X (X-ray)/1.PNG",
    dash: "./images/X (X-ray)/2.PNG",
    dot: "./images/X (X-ray)/3.PNG",
    dot2: "./images/X (X-ray)/4.PNG",
    dash2: "./images/X (X-ray)/5.PNG",
  },
  Y: {
    normal: "./images/Y (Yard)/1.PNG",
    dash: "./images/Y (Yard)/2.PNG",
    dot: "./images/Y (Yard)/3.PNG",
    dash2: "./images/Y (Yard)/4.PNG",
    dash3: "./images/Y (Yard)/5.PNG",
  },
  Z: {
    normal: "./images/Z (Zebra)/1.PNG",
    dash: "./images/Z (Zebra)/2.PNG",
    dash2: "./images/Z (Zebra)/3.PNG",
    dot: "./images/Z (Zebra)/4.PNG",
    dot2: "./images/Z (Zebra)/5.PNG",
  },
};

document.addEventListener("click", function (e) {
  e.target.focus();
});
