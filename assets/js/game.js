const keyboard = document.querySelector('#keyboard');

const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

function displayLetters() {
    for (let i = 0; i < alphabet.length; i++) {
        const letter = document.createElement('button');
        letter.textContent = alphabet[i];
        keyboard.appendChild(letter);
    };
};

displayLetters();