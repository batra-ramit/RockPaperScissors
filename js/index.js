
let SCORE = 0;
function PickUserHand(hand) {
    console.log(hand);
    
    let hands = document.querySelector(".hands");
    hands.style.display = "none";

    let contest = document.querySelector(".contest");
    contest.style.display = "flex";


    if (hand == "rock")
        document.getElementById("userPickImage").src = "/assets/Rock.png";
    else if (hand == "paper")
        document.getElementById("userPickImage").src = "/assets/Paper.png";
    else
        document.getElementById("userPickImage").src = "/assets/Scissors.png";
    let cphand = PickComputerHand();
    referee(hand, cphand);
}

function PickComputerHand() {

    let hands = ["rock", "paper", "scissors"];
    console.log(hands[1]);

    let cphand = hands[Math.floor(Math.random() * 3)]
    
    if (cphand == "rock")
        document.getElementById("computerPickImage").src = "/assets/Rock.png";
    else if (cphand == "paper")
        document.getElementById("computerPickImage").src = "/assets/Paper.png";
    else
        document.getElementById("computerPickImage").src = "/assets/Scissors.png";
    return cphand;
}
function referee(userHand, cpHand) {
    
    if (userHand == "paper" && cpHand == "scissors") {
        setDecision("YOU LOSE!");
      }
      if (userHand == "paper" && cpHand == "rock") {
        setDecision("YOU WIN!");
        setScore(SCORE + 1);
      }
      if (userHand == "paper" && cpHand == "paper") {
        setDecision("It's a tie!");
      }
      if (userHand == "rock" && cpHand == "scissors") {
        setDecision("YOU WIN!");
        setScore(SCORE + 1);
      }
      if (userHand == "rock" && cpHand == "paper") {
        setDecision("YOU LOSE!");
      }
      if (userHand == "rock" && cpHand == "rock") {
        setDecision("It's a tie!");
      }
      if (userHand == "scissors" && cpHand == "scissors") {
        setDecision("It's a tie!");
      }
      if (userHand == "scissors" && cpHand == "rock") {
        setDecision("YOU LOSE!");
      }
      if (userHand == "scissors" && cpHand == "paper") {
        setDecision("YOU WIN!");
        setScore(SCORE + 1);
      }
    
}

function setDecision(result) {
    // console.log(result);
    document.querySelector(".decision h1").innerText = result;
}

function setScore(score) {
    // console.log(score);
    SCORE = score;
    document.querySelector(".score h1").innerText = score;
}

function restart() {
     
    let hands = document.querySelector(".hands");
    hands.style.display = "flex";

    let contest = document.querySelector(".contest");
    contest.style.display = "none";
}