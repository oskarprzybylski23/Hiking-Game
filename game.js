import TileMap from "./TileMap.js";
import Character from "./character.js";

const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");
const tileSize = 32;

const tileMap = new TileMap(tileSize);

// Create a character instance
const character = new Character(100, 100, 32, 32, "./images/pacman");
const startingPosition = { x: 100, y: 100 };

function gameLoop() {
  tileMap.draw(canvas, ctx);
    // Update the character
    character.update();
  
    // Draw the character
    character.draw(ctx);
  }

setInterval(gameLoop, 1000 / 60);

