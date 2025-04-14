const gridContainer = document.getElementById("grid-container");

const vw = window.innerWidth;
const vh = window.innerHeight;
const baseTilesAcross = 60; 
const tileSize = Math.floor(vw / baseTilesAcross); 

const cols = Math.ceil(vw / tileSize);
const rows = Math.ceil(vh / tileSize);

gridContainer.style.gridTemplateColumns = `repeat(${cols}, ${tileSize}px)`;
gridContainer.style.gridAutoRows = `${tileSize}px`;

for (let row = 0; row < rows; row++) {
  for (let col = 0; col < cols; col++) {
    const tile = document.createElement("div");
    tile.classList.add("grid-tile");

    if ((row + col) % 2 === 0) {
      tile.classList.add("bg1");
    } else {
      tile.classList.add("bg2");
    }

    tile.style.animationDelay = `${(row + col) * 40}ms`;
    gridContainer.appendChild(tile);
  }
}

const totalDelay = (rows + cols) * 40 + 400;

setTimeout(() => {
  const tiles = document.querySelectorAll('.grid-tile');
  tiles.forEach(tile => tile.classList.add('highlighted'));

  setTimeout(() => {
    tiles.forEach(tile => tile.classList.remove('highlighted'));
  }, 1000);
}, totalDelay);


