// ADD YOUR CARDS HERE --------------------------------------
const cards = [
  { front: "img/front1.png", back: "img/back1.png" },
  { front: "img/front2.png", back: "img/back2.png" },
  { front: "img/front3.png", back: "img/back3.png" },
  { front: "img/front4.png", back: "img/back4.png" },
  { front: "img/front5.png", back: "img/back5.png" },
  { front: "img/front6.png", back: "img/back6.png" },
  { front: "img/front7.png", back: "img/back7.png" },
  { front: "img/front8.png", back: "img/back8.png" },
  { front: "img/front9.png", back: "img/back9.png" },
  { front: "img/front10.png", back: "img/back10.png" },
  { front: "img/front11.png", back: "img/back11.png" },
  { front: "img/front12.png", back: "img/back12.png" },
  { front: "img/front13.png", back: "img/back13.png" },
  { front: "img/front14.png", back: "img/back14.png" },
  { front: "img/front15.png", back: "img/back15.png" },
  { front: "img/front16.png", back: "img/back16.png" },
  { front: "img/front17.png", back: "img/back17.png" },
  { front: "img/front18.png", back: "img/back18.png" },
  { front: "img/front19.png", back: "img/back19.png" },
  { front: "img/front20.png", back: "img/back20.png" },
  // ...
  // 20 cards total
];

// SCREEN MANAGEMENT -----------------------------------------
function show(screenId) {
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  document.getElementById(screenId).classList.add("active");
}

// DRAW A NEW CARD -------------------------------------------
function drawCard() {
  // Pick a random card
  const card = cards[Math.floor(Math.random() * cards.length)];

  // Reset animation state
  const cardEl = document.getElementById("card");
  cardEl.classList.remove("flipped");
  cardEl.style.animation = "none";
  void cardEl.offsetWidth; // Force reset
  cardEl.style.animation = "";

  // Update images
  document.getElementById("card-front").src = card.front;
  document.getElementById("card-back").src = card.back;

  // UI updates
  document.getElementById("draw-again").classList.add("hidden");
  document.getElementById("choices").classList.remove("hidden");

  // Show card screen
  show("card-screen");
}

// FLIP TO REVEAL FUTURE -------------------------------------
function flipCard() {
  const card = document.getElementById("card");
  card.classList.add("flipped");

  // Hide yes/no choices
  document.getElementById("choices").classList.add("hidden");

  // Show draw again button
  document.getElementById("draw-again").classList.remove("hidden");
}
