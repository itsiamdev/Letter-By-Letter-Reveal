const textContainer = document.querySelector(".text-container");
const phrases = ["Awesome", "Fun", "Challenging", "Fantastic"];
let phraseIndex = 0;
let letterIndex = 0;
function typeEffect() {
  letterIndex++;
  const currentPhrase = phrases[phraseIndex];
  textContainer.innerHTML = `<h1>Coding is ${currentPhrase.slice(
    0,
    letterIndex
  )}</h1>`;
  if (letterIndex === currentPhrase.length) {
    phraseIndex = (phraseIndex + 1) % phrases.length;
    letterIndex = 0;
    setTimeout(typeEffect, 1000);
  } else {
    setTimeout(typeEffect, 300);
  }
}
typeEffect();
