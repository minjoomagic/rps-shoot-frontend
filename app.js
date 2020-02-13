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

//When player(subzero) wins

function win(subZeroSelection, goroSelection) {
  subZeroScore++;
  subPlay();
  subZeroScore_span.innerHTML = subZeroScore;
  goroScore_span.innerHTML = goroScore;
  outcome_p.innerHTML = "Subzero wins";
  player_choice.innerHTML = subZeroSelection + " " + "defeats";
  computer_choice.innerHTML = goroSelection;

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

function friendship() {
  friendPlay();
  outcome_p.innerHTML = "Its a tie. Friendship.";
  player_choice.innerHTML = "I want to be your friend.";
  computer_choice.innerHTML = "";

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

game();

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
