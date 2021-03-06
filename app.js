let subZeroScore = 0;
let goroScore = 0;
const subZeroScore_span = document.querySelector("#sub-zero-score");
const goroScore_span = document.querySelector("#goro-score");

const scores_div = document.querySelector(".scores");
const outcome_p = document.querySelector(".outcome > p");
const player_choice = document.querySelector(".player-choice");
const computer_choice = document.querySelector(".computer-choice");

const rock_div = document.querySelector("#rock");
const paper_div = document.querySelector("#paper");
const scissor_div = document.querySelector("#scissor");

const finishHim_h1 = document.querySelector(".finish-him > h1");
const fatality_img = document.querySelector("#fatality > img")
const fatality_iframe = document.querySelector("#fatality > iframe")


//This randomizes the computer (goro's) selection

function getGoroSelection() {
  const selection = ["rock", "paper", "scissor"];
  const randNum = Math.floor(Math.random() * 3);
  return selection[randNum];
}

//Play the SFX

function introPlay() {
  let audio = new Audio("./sfx/fight.wav");
  audio.play();
}

function flawlessPlay() {
  let audio = new Audio("./sfx/flawless.wav");
  audio.play();
}

function finishPlay() {
  let audio = new Audio("./sfx/finish-him.wav");
  audio.play();
}

function subPlay() {
  let audio = new Audio("./sfx/subzero.wav");
  audio.play();
}

function goroPlay() {
  let audio = new Audio("./sfx/goro.wav");
  audio.play();
}

function friendPlay() {
  let audio = new Audio("../sfx/friendship.mp3");
  audio.play();
}

//Utilities to add inner HTMLs
// make score from text into integer 
function convertScore() {
  goroScore_span.innerHTML = parseInt(goroScore_span.innerHTML)
  console.log("current scorre is" + goroScore_span.innerHTML)
}

//Finish Him
function finishHim() {
  finishPlay();
  finishHim_h1.innerHTML = "FINISH HIM!!"
  fatality_img.src = "./Images/subzero1loop.gif"
  // fatality_iframe.src = "./Images/subzerofatality-clip.mp4"

  window.setTimeout(function () { showFatality(); }, 100)
}
// autoscrolls to the bottom of page when fatality activated
function showFatality() {
  document.getElementById("bottom").scrollIntoView();
}


//Subzero inner
function addSubZeroInner(subZeroSelection, goroSelection) {
  subZeroScore_span.innerHTML = subZeroScore;
  goroScore_span.innerHTML = goroScore;
  goroScore_span.innerHTML === "0" ? outcome_p.innerHTML = "Flawless Victory" : outcome_p.innerHTML = "Subzero wins";;
  subZeroScore_span.innerHTML === "5" ? finishHim() : outcome_p.innerHTML = "SubZero wins";
  player_choice.innerHTML = subZeroSelection + " " + "defeats";
  computer_choice.innerHTML = goroSelection;
}


//When player(subzero) wins

function win(subZeroSelection, goroSelection) {
  subZeroScore++;
  // If subzero wins while Goro's score is still 0 then we get flawless victory
  goroScore_span.innerHTML === "0" ? flawlessPlay() : subPlay();
  addSubZeroInner(subZeroSelection, goroSelection);
}

//when player (subzero) loses

function lose(subZeroSelection, goroSelection) {
  goroScore++;
  goroPlay();
  subZeroScore_span.innerHTML = subZeroScore;
  goroScore_span.innerHTML = goroScore;
  outcome_p.innerHTML = "Goro wins";
  player_choice.innerHTML = subZeroSelection + " " + "loses to";
  computer_choice.innerHTML = goroSelection;
}

//In the event of a tie

function friendship(subZeroSelection, goroSelection) {
  friendPlay();
  outcome_p.innerHTML = "Its a tie. Friendship.";
  player_choice.innerHTML = subZeroSelection + " " + "="
  computer_choice.innerHTML = goroSelection;
}

//the players selection + goro selection + outcome logic

function game(subZeroSelection) {
  const goroSelection = getGoroSelection();
  switch (subZeroSelection + goroSelection) {
    case "rockscissor":
    case "paperrock":
    case "scissorpaper":
      win(subZeroSelection, goroSelection);
      break;
    case "rockpaper":
    case "paperscissor":
    case "scissorrock":
      lose(subZeroSelection, goroSelection);
      break;
    case "rockrock":
    case "paperpaper":
    case "scissorscissor":
      friendship(subZeroSelection, goroSelection);
      break;
  }
}

//player selection event listeners

function main() {
  rock_div.addEventListener("click", function () {
    console.log("you be clicking DW Johnson");
    game("rock");
  });

  paper_div.addEventListener("click", function () {
    console.log("you be clicking papel");
    game("paper");
  });

  scissor_div.addEventListener("click", function () {
    console.log("you be clicking edward S.");
    game("scissor");
  });
}

main();
