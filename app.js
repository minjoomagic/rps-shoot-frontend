let subZeroScore = 0;
let goroScore = 0;
const subZeroScore_span = document.querySelector("#sub-zero-score");
const goroScore_span = document.querySelector("#goro-score");

const scores_div = document.querySelector(".scores");
const outcome_p = document.querySelector(".outcome > p");
const rock_div = document.querySelector("#rock");
const paper_div = document.querySelector("#paper");
const scissor_div = document.querySelector("#scissor");

function getGoroSelection() {
  const selection = ["rock", "paper", "scissor"];
  const randNum = Math.floor(Math.random() * 3);
  return selection[randNum];
}
getGoroSelection();

function win() {
  subZeroScore++;
  subZeroScore_span.innerHTML = subZeroScore;
  goroScore_span.innerHTML = goroScore;
  outcome_p.innerHTML = "Subzero wins";
}

function lose() {
  goroScore++;
  subZeroScore_span.innerHTML = subZeroScore;
  goroScore_span.innerHTML = goroScore;
  outcome_p.innerHTML = "Goro wins";
}

function friendship() {
  outcome_p.innerHTML = "Friendship. Friendship.";
}

function game(subZeroSelection) {
  const goroSelection = getGoroSelection();
  switch (subZeroSelection + goroSelection) {
    case "rockscissor":
    case "paperrock":
    case "scissorpaper":
      win();
      break;
    case "rockpaper":
    case "paperscissor":
    case "scissorrock":
      lose();
      break;
    case "rockrock":
    case "paperpaper":
    case "scissorscissor":
      friendship();
      break;
  }
}

game();

function main() {
  rock_div.addEventListener("click", function() {
    console.log("you be clicking DW Johnson");
    game("rock");
  });

  paper_div.addEventListener("click", function() {
    console.log("you be clicking papel");
    game("paper");
  });

  scissor_div.addEventListener("click", function() {
    console.log("you be clicking edward S.");
    game("scissor");
  });
}

main();
