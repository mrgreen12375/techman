const instructionEl = document.querySelector('#insructionEl');
const typeSound = document.querySelector('#typeSound');
const btn = document.querySelector('#btn');
const playBtn = document.querySelector('#playBtn');
const arrows = document.querySelector('.arrows');



const instructions = 'Techman is just hangman, but the secret words will be centered around technology. Please enjoy Techman!';

function displayInstructions() {
  let letterCount = 0;

  const instructionInterval = setInterval(function () {

    if (letterCount >= instructions.length) {
      clearInterval(instructionInterval);
      return;
    }

    instructionEl.textContent += instructions[letterCount];
    typeSound.play();
    letterCount++;

  }, 100);
}

function playSound(event){
    event.preventDefault();

    btn.innerHTML = '';
    arrows.style.cssText = "background-image: none;";

    typeSound.play().then(() => {
        typeSound.pause();
        typeSound.currentTime = 0;
    
        displayInstructions();
    
        setTimeout(() => {
          window.location.href = "./game.html";
        }, instructions.length * 100 + 500);
    
      });
}

playBtn.addEventListener('click', playSound);
