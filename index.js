function throwDice() {

  // I need two separate variables for the comparison
  var number1 = Math.floor(Math.random() * 6 + 1);
  var number2 = Math.floor(Math.random() * 6 + 1);

  // Query selector for the h1, so I avoid typing it three times in the comparison output
  var title = document.querySelector(".container h1");

  // Randomize the two dice
  document.querySelector(".img1").src = "images/dice" + number1 + ".png";
  document.querySelector(".img2").src = "images/dice" + number2 + ".png";

  // Comparison to see who won
  if(number1 > number2) {
    title.innerHTML = "🥊 Player 1 won";
  } else if (number2 > number1){
    title.innerHTML = "Player 2 won 🥊";
  } else {
    title.innerHTML = "It's a draw!";
  }

}

document.getElementById('throwDice').addEventListener("click", throwDice);
