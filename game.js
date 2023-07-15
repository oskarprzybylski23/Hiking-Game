import TileMap from "./TileMap.js";
const tileSize = 32;
let velocity = 2;

const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

const tileMap = new TileMap(tileSize);
const hero = tileMap.getHero(velocity);

const uncoveredTime = 5; // time before map is covered
let remainingTime = tileMap.targetTime; // map time target
let gameTime = 0; // in game time
let coverVisible = false;
let pauseGame = true;

// === KEY INPUT SENSING ===

document.addEventListener("keydown", handleKeyDown);
document.addEventListener("keyup", handleKeyUp);

let keyState = {}; // Object to store the state of each key


// handle keydown and keyup with event.code to get physical key code
function handleKeyDown(event) {
  keyState[event.code] = true;

  if (keyState["KeyN"]) {
    startGame();
  }
}

function handleKeyUp(event) {
  keyState[event.code] = false;
}

// === START GAME ACTION ===

let gameRunning = false; //set to false on page launch

const startButton = document.querySelector("#startButton");
startButton.addEventListener("click", startGame);
const timerBox = document.querySelector(".timer-container");
const timerDigits = document.getElementById("timer");

function startGame() //initialise gameplay and start gameloop
{
  if (!gameRunning) {
    gameRunning = true;
    startButton.style.display = "none";
    help.style.visibility = "hidden";
    helpButton.style.background = "white";
    timerBox.style.visibility = "visible";
    timerDigits.style.visibility = "visible";
    gameLoop();
  }
}

// === TIMER ===

function updateTimer() //timer formatting and countdown start when map is covered
{
  if (coverVisible === true) {
    timerDigits.textContent = Math.ceil(remainingTime);
    const minutes = Math.floor(remainingTime / 60);
    const seconds = Math.floor(remainingTime % 60);
    const formattedTime = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
    timerDigits.textContent = formattedTime;

  } else {
    const timerDigits = document.getElementById("timer");
    timerDigits.textContent = "00:00";
  }
}

// === OTHER ELEMENTS AND BUTTONS ===

//help button and content navigation
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

function updateNavigationButtons() // update the navigation buttons based on the current page index
{
  prevButton.disabled = currentPageIndex === 0;
  nextButton.disabled = currentPageIndex === pages.length - 1;
}

function showCurrentPage() // show the current page and hide the rest
{
  pages.forEach((page, index) => {
    if (index === currentPageIndex) {
      page.style.display = "block";
    } else {
      page.style.display = "none";
    }
  });
}

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

// On launch update the navigation buttons and show the first page
updateNavigationButtons();
showCurrentPage();

// help close button
const closeButton = document.querySelector('.close-button');

closeButton.addEventListener("click", () => {
  help.style.visibility = "hidden";
  helpButton.style.background = "white";
});

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
  gameTime = 0;
  winorlose = false;
}

//try again button
const restartButton = document.querySelector("#restartButton");
restartButton.addEventListener("click", handleRestart);

function handleRestart() {
  gameRunning = false;
  coverVisible = false;
  continueButton.style.display = "none";
  restartButton.style.display = "none";
  startButton.style.display = "block";
  banner.style.visibility = "hidden";
  tileMap.resetcover();
  hero.findStartPosition();
  remainingTime = tileMap.targetTime;
  gameTime = 0;
  winorlose = false;
}

//start again button
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
  continueButton.style.display = "block";
  restartButton.style.display = "block";
  banner.style.visibility = "visible";
  let playerTime = (tileMap.targetTime - remainingTime).toFixed(2); //get game completion time up to 2 decimal places
  bannerHeading.textContent = "YOU'VE MADE IT!!!";
  bannerMessageOne.textContent = "Well Done! You reached the destination in " + playerTime + " seconds.";
  bannerMessageTwo.textContent = "Continue to the next adventure, or repeat your hike to see if you can improve your time."

}

//lose
function loseGame() {
  winorlose = true;
  pauseGame = true;
  coverVisible = true;
  restartButton.style.display = "block";
  banner.style.visibility = "visible";
  bannerHeading.textContent = "Time's Up!";
  bannerMessageOne.textContent = "You didn't manage to get to the destination before the night. You have to camp in the wild.";
  bannerMessageTwo.textContent = "Don't give up, try again, or take a break and try later!"
}

//game complete
document.addEventListener('gameCompleteEvent', handleGameComplete);

function handleGameComplete() {
  continueButton.style.display = "block";
  startButton.style.display = "none";
  banner.style.visibility = "visible";
  timerBox.style.visibility = "hidden";
  timerDigits.style.visibility = "hidden";
  bannerHeading.textContent = "CONGRATULATIONS!";
  bannerMessageOne.textContent = "You have conquered all the trails! Keep playing to see if you can improve your time! Unfortunately, Sarah has probably done better than you anyway (unless you're Sarah then keep smashing it!). ";
  bannerMessageTwo.textContent = "If you feel particularly adventurous, visit the github repo and add your own maps."
}

// === GAME LOOP ===

function gameLoop() {

  tileMap.drawInitial(canvas, ctx);

  if (gameRunning) //block to be only executed if gameplay is underway 
  {
    if (pauseGame === false) //prevent character movement and time countdown when gameplay is on pause
    {
      if (keyState["ArrowUp"]) {
        // Perform action when ArrowUp key is pressed
        hero.moveUp();
      }

      if (keyState["ArrowDown"]) {
        // Perform action when ArrowDown key is pressed
        hero.moveDown();
      }

      if (keyState["ArrowRight"]) {
        // Perform action when ArrowRight key is pressed
        hero.moveRight();
      }

      if (keyState["ArrowLeft"]) {
        // Perform action when ArrowLeft key is pressed
        hero.moveLeft();
      }

      remainingTime -= 1 / 60; // player time countdown
    }

    //draw map layers
    tileMap.draw(canvas, ctx);
    hero.draw(ctx);
    hero.winCondition();
    hero.surfaceBehaviour();
    hero.uncoverTile();

    gameTime += 1 / 60; //in-game time count
    updateTimer();

    if (remainingTime <= 0) // trigger lose condition
    {
      timerDigits.textContent = "00:00";
      loseGame();
    }

    if (gameTime >= uncoveredTime && winorlose === false) // trigger map cover
    {
      coverVisible = true;
      pauseGame = false;
    }

    if (coverVisible === true) // show "start again" button
    {
      tileMap.drawcover(ctx);
      startAgainButton.style.display = "block";
    } else {
      startAgainButton.style.display = "none";
    }
  }
}

setInterval(gameLoop, 1000 / 60);



