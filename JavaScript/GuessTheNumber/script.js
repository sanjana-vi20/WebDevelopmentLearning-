function submit() {
  const numbers = Math.floor(Math.random() * 11);
  console.log(numbers);

  const guess = document.getElementById("guess").value;

  if (numbers == guess) {
    document.getElementById("guesses").innerText = "You guessed right!";
  } else if (numbers > guess) {
    alert("Guess the smaller number");
  }
  else{
    alert("Guess the larger number");
  }
}
