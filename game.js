import TileMap from "./TileMap.js";
const tileSize = 32;
let velocity = 2;

const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

const tileMap = new TileMap(tileSize);
const hero = tileMap.getHero(velocity);

const uncoveredTime = 0;
let remainingTime = tileMap.targetTime;
let actualTime = 0;
let coverVisible = false;
let pauseGame = true;

// === KEY INPUT SENSING ===

document.addEventListener("keydown", handleKeyDown);
document.addEventListener("keyup", handleKeyUp);

let keyState = {}; // Object to store the state of each key

// handle keydown and keyup with event.code to get physical key code

function handleKeyDown(event) {
  keyState[event.code] = true;

  //Start game action
  if (keyState["KeyN"]) {
    startGame();
  }
}

function handleKeyUp(event) {
  keyState[event.code] = false;
}

// === START GAME ACTION ===

let gameRunning = false; //change to false

const startButton = document.querySelector("#startButton");
startButton.addEventListener("click", startGame);

//check if game loop is already running
function startGame() {
  if (!gameRunning) {
    gameRunning = true;
    startButton.style.display = "none";
    document.querySelector(".timer-container").style.visibility = "visible";
    document.getElementById("timer").style.visibility = "visible";
    gameLoop();
    // Hide the button
  }
}

// === TIMER ===

function updateTimer() {
  if (coverVisible === true) {
    const remainingTimeElement = document.getElementById("timer");
    remainingTimeElement.textContent = Math.ceil(remainingTime);
    const minutes = Math.floor(remainingTime / 60);
    const seconds = Math.floor(remainingTime % 60);
    const formattedTime = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
    remainingTimeElement.textContent = formattedTime;
    
  } else {
    const remainingTimeElement = document.getElementById("timer");
    remainingTimeElement.textContent = "00:00";
  }
}

// === OTHER ELEMENTS AND BUTTONS ===

//help button and content

const helpButton = document.querySelector("#helpButton");
const help = document.querySelector(".help");
helpButton.addEventListener("click", handleHelp);

function handleHelp() {
  const computedStyle = getComputedStyle(help);
  if (computedStyle.visibility === "hidden") {
    helpButton.style.background = "transparent";
    help.style.visibility = "visible";
    
  } else {
    helpButton.style.background = "var(--white)";
    help.style.visibility = "hidden";
  }
}

const prevButton = document.getElementById('help-prev-button');
const nextButton = document.getElementById('help-next-button');
const pages = document.querySelectorAll(".help-content .page");
let currentPageIndex = 0;

// Function to update the navigation buttons based on the current page index
function updateNavigationButtons() {
  prevButton.disabled = currentPageIndex === 0;
  nextButton.disabled = currentPageIndex === pages.length - 1;
}

// Function to show the current page and hide the rest
function showCurrentPage() {
  pages.forEach((page, index) => {
    if (index === currentPageIndex) {
      page.style.display = "block";
    } else {
      page.style.display = "none";
    }
  });
}

 const closeButton = document.querySelector('.close-button');

closeButton.addEventListener("click", () => {
 help.style.visibility = "hidden";
});

// Event listener for previous button click
prevButton.addEventListener("click", () => {
  if (currentPageIndex > 0) {
    currentPageIndex--;
    showCurrentPage();
    updateNavigationButtons();
  }
});

// Event listener for next button click
nextButton.addEventListener("click", () => {
  if (currentPageIndex < pages.length - 1) {
    currentPageIndex++;
    showCurrentPage();
    updateNavigationButtons();
  }
});

// Initially update the navigation buttons and show the first page
updateNavigationButtons();
showCurrentPage();

//continue game button

const continueButton = document.querySelector("#continueButton");
continueButton.addEventListener("click", handleContinue);

function handleContinue() {
  gameRunning = false;
  continueButton.style.display = "none";
  restartButton.style.display = "none";
  startButton.style.display = "block";
  banner.style.visibility = "hidden";
  tileMap.nextMap();
  tileMap.resetcover();
  hero.findStartPosition();
  remainingTime = tileMap.targetTime;
  actualTime = 0;
  winorlose = false;
}

const restartButton = document.querySelector("#restartButton");
restartButton.addEventListener("click", handleRestart);

function handleRestart() {
  gameRunning = false;
  continueButton.style.display = "none";
  restartButton.style.display = "none";
  startButton.style.display = "block";
  banner.style.visibility = "hidden";
  tileMap.resetcover();
  hero.findStartPosition();
  remainingTime = tileMap.targetTime;
  actualTime = 0;
  winorlose = false;
}

const startAgainButton = document.querySelector("#startAgainButton");
startAgainButton.addEventListener("click", handleStartAgain);

function handleStartAgain() {
  winorlose = true;
  pauseGame = true;
  coverVisible = false;
  handleRestart();
}

// === WIN AND LOSE ACTIONS ===

const banner = document.querySelector(".banner-container");
const bannerHeading = document.getElementById("banner-heading");
const bannerMessageOne = document.getElementById("banner-message-1");
const bannerMessageTwo = document.getElementById("banner-message-2");

//win
document.addEventListener('winEvent', handleWin);
let winorlose = false;

function handleWin(event) {
  winorlose = true;
  pauseGame = true;
  coverVisible = false;
  continueButton.style.display = "none";
  restartButton.style.display= "block";
  banner.style.visibility = "visible";
  let playerTime = (tileMap.targetTime - remainingTime).toFixed(2);
  bannerHeading.textContent = "YOU'VE MADE IT!!!";
  bannerMessageOne.textContent = "Congratulations! You reached the destination in " + playerTime + " seconds.";
  bannerMessageTwo.textContent = "Continue to the next adventure, or repeat your hike to see if you can improve your time."

}

//lose
function loseGame() {
  winorlose = true;
  pauseGame = true;
  coverVisible = true;
  restartButton.style.display= "block";
  banner.style.visibility = "visible";
  bannerHeading.textContent = "Time's Up!";
  bannerMessageOne.textContent = "You didn't manage to get to the destination before the night. You have to camp in the wild.";
  bannerMessageTwo.textContent = "Don't give up, try again, or take a break and try later!"
}

//game complete
document.addEventListener('gameCompleteEvent', handleGameComplete);

function handleGameComplete() {
  continueButton.style.display= "block";
  startButton.style.display= "none";
  banner.style.visibility = "visible";
  bannerHeading.textContent = "Congratulations!";
  bannerMessageOne.textContent = "You have conquered all the trails! Keep playing to see if you can improve your time!";
  bannerMessageTwo.textContent = "If you feel particularly adventurous, visit the github repo and add your own maps."
}

// === GAME LOOP ===

function gameLoop() {

  tileMap.drawInitial(canvas, ctx);

  if (gameRunning) { //block to be only executed if gameplay is underway

    //key actions

    if (pauseGame === false) {
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
        // Perform action when ArrowRight key is pressed
        console.log("move_right");
        hero.moveRight();
      }

      if (keyState["ArrowLeft"]) {
        // Perform action when ArrowLeft key is pressed
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
      loseGame();
    }

    if (actualTime >= uncoveredTime+5 && winorlose === false) {
      coverVisible = true;
      pauseGame = false;
    }

    if (coverVisible === true) {
      tileMap.drawcover(ctx);
      startAgainButton.style.display= "block";
    } else {
      startAgainButton.style.display= "none";
    }

    console.log("actual time: " + Math.ceil(actualTime));
    console.log("remaining time: " + Math.ceil(remainingTime));
    console.log("cover" + coverVisible)
    // console.log("pause: " + pauseGame);
  }
}

setInterval(gameLoop, 1000 / 60);



