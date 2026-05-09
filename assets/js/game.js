const keyboard = document.querySelector('#keyboard');
const secret = document.querySelector('#secret');

const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

const secretWords = ["COMPUTER", "SMART PHONE", "CODING", "MEGABITE", "APPLICATION", ];

function randomSecretWord(){
    const index = Math.floor(Math.random() * secretWords.length);
    word = secretWords[index];

    secret.innerHTML = `<h2>${word}</h2>`;
}

function displayLetters() {
    for (let i = 0; i < alphabet.length; i++) {
        const letter = document.createElement('button');
        letter.textContent = alphabet[i];
        keyboard.appendChild(letter);
    };
};

displayLetters();
randomSecretWord();