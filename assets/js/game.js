const keyboard = document.querySelector('#keyboard');
const secret = document.querySelector('#secret');

const hangmanParts = ["head", "body", "leftArm", "rightArm", "leftLeg", "rightLeg"];

const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

const secretWords = ["COMPUTER", "SOFTWARE", "CODING", "MEGABYTE", "DATABASE", "WEBSITE", "HARDWARE", "KEYBOARD", "MONITOR", "SPYWARE", "TERMINAL"];

let word = "";
let guessedLetters = [];
let wrongGuesses = 0;

const modal = document.querySelector("#modal");
const modalMessage = document.querySelector("#modalMessage");
const playAgainBtn = document.querySelector("#playAgainBtn");
const noThanksBtn = document.querySelector("#noThanksBtn");

function showModal(message) {
    modalMessage.textContent = message;
    modal.classList.remove("hidden");
}

function randomSecretWord(){
    const index = Math.floor(Math.random() * secretWords.length);
    word = secretWords[index];

    displaySecretWord();
}

function displaySecretWord() {

  let hiddenLetter = "";

  for (let i = 0; i < word.length; i++) {

    const secretLetter = word[i];

    if (secretLetter === " ") {
        hiddenLetter += " ";
    } else if (guessedLetters.includes(secretLetter)) {
        hiddenLetter += secretLetter;
    } else {
        hiddenLetter += "_";
    }

    hiddenLetter += " ";
  }

  secret.innerHTML = `<h2>${hiddenLetter}</h2>`;
}

function displayLetters() {
    for (let i = 0; i < alphabet.length; i++) {
        const letter = document.createElement('button');
        letter.textContent = alphabet[i];
        keyboard.appendChild(letter);

        letter.addEventListener("click", () => {
            const clickedLetter = alphabet[i];
            letter.disabled = true;
            guessedLetters.push(clickedLetter);
        
            if (!word.includes(clickedLetter)) {
                wrongGuesses++;
    
                const partToShow = hangmanParts[wrongGuesses - 1];
        
                if (partToShow) {
                    document.getElementById(partToShow).style.display = "block";
                }
            }
        
            displaySecretWord();
            result();
        });
    };
};

function result() {
    let won = true;

    for (let i = 0; i < word.length; i++) {
        const secretLetter = word[i];

        if (secretLetter !== " " && !guessedLetters.includes(secretLetter)) {
            won = false;
        }
    }

    if (won) {
        setTimeout(() => {
            showModal("You Win!");

        }, 50);
        return;
    }

    if (wrongGuesses >= 6) {
        setTimeout(() => {
            showModal("You Lose!");
        }, 50);
    }
}

displayLetters();
randomSecretWord();

playAgainBtn.addEventListener("click", () => {
    location.reload();
});

noThanksBtn.addEventListener("click", () => {
    location.href = "./index.html";
});
