import TileMap from "./TileMap.js";
const tileSize = 32;
let velocity = 3;


const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

const tileMap = new TileMap(tileSize);
const hero = tileMap.getHero(velocity);

let remainingTime = tileMap.remainingTime;
let actualTime = 0;
let coverVisible = false;
let pauseGame = true;

// KEY INPUT SENSING

document.addEventListener("keydown", handleKeyDown);
document.addEventListener("keyup", handleKeyUp);

let keyState = {}; // Object to store the state of each key

// handle keydown and keyup with event.code to get physical key code

function handleKeyDown(event) {
  keyState[event.code] = true;

  //Start game action
  if (keyState["KeyN"]) {
    startGameLoop();
  }

}

function handleKeyUp(event) {
  keyState[event.code] = false;
}

// START GAME ACTION
let gameRunning = false;

const startButton = document.querySelector("#startButton");
startButton.addEventListener("click", startGameLoop);

//check if game loop is already running
function startGameLoop() {
  if (!gameRunning) {
    gameRunning = true;
    startButton.style.visibility = "hidden";
    gameLoop();
    // Hide the button
  }
}

//TIMER
function updateTimer() {
  if (coverVisible === true){
  const remainingTimeElement = document.getElementById("remainingTime");
  remainingTimeElement.textContent = Math.ceil(remainingTime);
  document.getElementById("timer").style.visibility = "visible"
  } else {
  document.getElementById("timer").style.visibility = "hidden";
}
}

// OTHER ELEMENTS AND BUTTONS

const helpButton = document.querySelector("#helpButton");
const help = document.querySelector(".help");

helpButton.addEventListener("click", handleHelp);
const computedStyle = getComputedStyle(help);

function handleHelp() {
  if (computedStyle.visibility === "hidden") {
    helpButton.style.background = "transparent";
    help.style.visibility = "visible";
  } else {
    helpButton.style.background = "white";
    help.style.visibility = "hidden";
  }
}

const continueButton = document.querySelector("#continueButton");
continueButton.addEventListener("click", handleContinue);

function handleContinue() {
  gameRunning = false;
  continueButton.style.visibility = "hidden";
  startButton.style.visibility = "visible";
}

// WIN AND LOSE ACTIONS

document.addEventListener('winEvent', handleWin);
let win = 0;


function handleWin(event) {
  win = 1;
  pauseGame = true;
  continueButton.style.visibility = "visible";
  console.log('Event received:', event.detail.message);
}

// GAME LOOP

function gameLoop() {
  
  tileMap.drawInitial(canvas, ctx);

  if (gameRunning) {


  
    //key actions
    
    if (pauseGame === false){
    if (keyState["ArrowUp"]) {
      // Perform action when ArrowUp key is pressed
      console.log("move_up");
      hero.moveUp();
    }


    if (keyState["ArrowDown"]) {
      // Perform action when ArrowDown key is pressed
      console.log("move_down");
      hero.moveDown();
    }

    if (keyState["ArrowRight"]) {
      // Perform action when ArrowDown key is pressed
      console.log("move_right");
      hero.moveRight();
    }

    if (keyState["ArrowLeft"]) {
      // Perform action when ArrowDown key is pressed
      console.log("move_left");
      hero.moveLeft();
    }
    
    remainingTime -= 1 / 60;

  }

    //draw map and hero layers

    tileMap.draw(canvas, ctx);
    hero.draw(ctx);
    hero.winCondition();
    hero.surfaceBehaviour();
    hero.uncoverTile();

    //timer

    actualTime += 1 / 60;

    updateTimer();
    
    if (remainingTime <= 0) {
      console.log("Time's up!");
      gameRunning = false;
      startButton.style.visibility = "visible";
      remainingTime = tileMap.remainingTime;
      actualTime = 0;
    }

    if (actualTime >= 5 && win === 0) {
      coverVisible = true;
      pauseGame = false;
    }

    console.log("cover" + coverVisible)

    if (coverVisible === true) {
      tileMap.drawcover(ctx);
    }

    console.log("actual time: " + Math.ceil(actualTime));
    console.log("remaining time: " + Math.ceil(remainingTime));
    console.log("pause: "+ pauseGame);
  }
}

setInterval(gameLoop, 1000 / 60);



