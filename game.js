import TileMap from "./TileMap.js";
const tileSize = 32;
const velocity = 1;

const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

const tileMap = new TileMap(tileSize);
const hero = tileMap.getHero(velocity);

function gameLoop() {
  tileMap.draw(canvas, ctx);
  hero.draw(ctx)
  }

setInterval(gameLoop, 1000 / 60);

