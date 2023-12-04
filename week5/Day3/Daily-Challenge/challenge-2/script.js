const morse = `{
    "0": "-----",
    "1": ".----",
    "2": "..---",
    "3": "...--",
    "4": "....-",
    "5": ".....",
    "6": "-....",
    "7": "--...",
    "8": "---..",
    "9": "----.",
    "a": ".-",
    "b": "-...",
    "c": "-.-.",
    "d": "-..",
    "e": ".",
    "f": "..-.",
    "g": "--.",
    "h": "....",
    "i": "..",
    "j": ".---",
    "k": "-.-",
    "l": ".-..",
    "m": "--",
    "n": "-.",
    "o": "---",
    "p": ".--.",
    "q": "--.-",
    "r": ".-.",
    "s": "...",
    "t": "-",
    "u": "..-",
    "v": "...-",
    "w": ".--",
    "x": "-..-",
    "y": "-.--",
    "z": "--..",
    ".": ".-.-.-",
    ",": "--..--",
    "?": "..--..",
    "!": "-.-.--",
    "-": "-....-",
    "/": "-..-.",
    "@": ".--.-.",
    "(": "-.--.",
    ")": "-.--.-"
  }`
  const toJs = () => {
    return new Promise((resolve, reject) => {
        try {
            const morseObject = JSON.parse(morse);
            if (Object.keys(morseObject).length === 0) {
                throw new Error("Morse JavaScript object is empty");
            }
            resolve(morseObject);
        } catch (error) {
            reject(error.message);
        }
    });
};

// Function to translate a word/sentence to Morse code
const toMorse = (morseJS) => {
    return new Promise((resolve, reject) => {
        const userInput = prompt("Enter a word or sentence:");
        if (!userInput) {
            reject("No input provided");
            return;
        }

        const morseTranslation = userInput.split("").map(char => {
            const lowerCaseChar = char.toLowerCase();
            if (morseJS.hasOwnProperty(lowerCaseChar)) {
                return morseJS[lowerCaseChar];
            } else {
                reject(`Character "${char}" not found in Morse JavaScript object`);
            }
        });

        resolve(morseTranslation);
    });
};

// Function to join Morse translation and display on the DOM
const joinWords = (morseTranslation) => {
    const result = morseTranslation.join("<br>");
    document.body.innerHTML = `<pre>${result}</pre>`;
};

// Chain the three functions
toJs()
    .then(morseJS => toMorse(morseJS))
    .then(morseTranslation => joinWords(morseTranslation))
    .catch(error => console.log(error));