
const board = document.querySelector(".board");
const movesDisplay = document.getElementById("moves");
const resetBtn = document.getElementById("resetBtn");

let cards = [];
let openCards = [];
let moveCount = 0;
let isChecking = false;

// Fisher-Yates shuffle
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function updateMoves() {
  if (movesDisplay) movesDisplay.textContent = `Moves: ${moveCount}`;
}

function checkFinish() {
  const matched = document.querySelectorAll(".card.matched").length;
  if (matched === cards.length) {
    setTimeout(() => alert(`🎉 بازی تمام شد! تعداد حرکت‌ها: ${moveCount}`), 200);
  }
}

function handleClick() {
  if (isChecking) return;
  const card = this;
  if (card.classList.contains("show") || card.classList.contains("matched")) return;

  card.classList.add("show");
  openCards.push(card);

  if (openCards.length === 2) {
    moveCount++;
    updateMoves();
    isChecking = true;

    const a = openCards[0].dataset.value;
    const b = openCards[1].dataset.value;

    if (a === b) {
      openCards[0].classList.add("matched");
      openCards[1].classList.add("matched");
      openCards = [];
      isChecking = false;
      checkFinish();
    } else {
      openCards[0].classList.add("unmatched");
      openCards[1].classList.add("unmatched");
      setTimeout(() => {
        openCards[0].classList.remove("show", "unmatched");
        openCards[1].classList.remove("show", "unmatched");
        openCards = [];
        isChecking = false;
      }, 1000);
    }
  }
}

function showAllAtStart(duration = 2000) {
  board.classList.add("disabled");
  isChecking = true;
  cards.forEach(c => c.classList.add("show"));
  setTimeout(() => {
    cards.forEach(c => c.classList.remove("show"));
    board.classList.remove("disabled");
    isChecking = false;
  }, duration);
}

function startGame() {
  moveCount = 0;
  updateMoves();
  openCards = [];
  isChecking = false;

  const original = Array.from(document.querySelectorAll(".board .card"));
  const shuffled = shuffle(original.slice());

  board.innerHTML = "";
  cards = [];

  shuffled.forEach(card => {
    const newCard = card.cloneNode(true);
    newCard.classList.remove("show", "matched", "unmatched");
    newCard.addEventListener("click", handleClick);
    board.appendChild(newCard);
    cards.push(newCard);
  });

  showAllAtStart(3000);
}

resetBtn.addEventListener("click", startGame);
window.addEventListener("load", startGame);
