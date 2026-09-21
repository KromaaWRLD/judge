// ============================================================
// JUDGE — Game Hub
// Add new games here. Just provide a name, description, icon,
// and the embed URL (GitHub Pages, itch.io, or any public link).
// ============================================================

const GAMES = [
  {
    id: "solitaire",
    name: "Klondike Solitaire",
    description: "Classic draw-1 / draw-3 solitaire",
    icon: "♠️",
    url: "https://kromaawrld.github.io/solitaire/",
  },
  // Add more games below:
  // {
  //   id: "my-other-game",
  //   name: "Cool Game",
  //   description: "Short description",
  //   icon: "🎮",
  //   url: "https://kromaawrld.github.io/cool-game/",
  // },
];

// ------------------------------------------------------------

const gameListEl = document.getElementById("game-list");
const frameEl = document.getElementById("game-frame");
const placeholderEl = document.getElementById("placeholder");
const titleEl = document.getElementById("game-title");
const openNewTabEl = document.getElementById("open-new-tab");
const fullscreenBtn = document.getElementById("fullscreen-btn");
const frameWrapper = document.getElementById("frame-wrapper");

let currentGame = null;

function renderGameList() {
  gameListEl.innerHTML = "";

  GAMES.forEach((game) => {
    const item = document.createElement("div");
    item.className = "game-item";
    item.dataset.id = game.id;
    item.innerHTML = `
      <div class="game-icon">${game.icon}</div>
      <div class="game-info">
        <div class="game-name">${game.name}</div>
        <div class="game-desc">${game.description}</div>
      </div>
    `;
    item.addEventListener("click", () => loadGame(game));
    gameListEl.appendChild(item);
  });
}

function loadGame(game) {
  currentGame = game;

  // Update active state
  document.querySelectorAll(".game-item").forEach((el) => {
    el.classList.toggle("active", el.dataset.id === game.id);
  });

  titleEl.textContent = game.name;
  openNewTabEl.href = game.url;
  openNewTabEl.style.display = "inline-flex";

  placeholderEl.style.display = "none";
  frameEl.style.display = "block";
  frameEl.src = game.url;
}

// Fullscreen support
fullscreenBtn.addEventListener("click", () => {
  if (!document.fullscreenElement) {
    frameWrapper.requestFullscreen?.() ||
      frameWrapper.webkitRequestFullscreen?.();
  } else {
    document.exitFullscreen?.() || document.webkitExitFullscreen?.();
  }
});

// Init
renderGameList();
openNewTabEl.style.display = "none";

// Auto-load first game if only one exists (optional)
if (GAMES.length === 1) {
  loadGame(GAMES[0]);
}
