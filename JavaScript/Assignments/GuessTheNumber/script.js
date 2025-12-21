
let numbers = Math.floor(Math.random() * 11);

function number()
{
   numbers = Math.floor(Math.random() * 11);
}

function submit() {
  
  console.log(numbers);

  const guess = document.getElementById("guess").value;

  if (numbers == guess) {
    document.getElementById("guesses").innerText = "You guessed right!";
    document.getElementById("start").style.visibility = "hidden" ; 

    document.getElementById("again").style.visibility = "visible";

     
  } else if (numbers < guess) {
    alert("Guess the smaller number");
  }
  else{
    alert("Guess the larger number");
  }

 document.getElementById("guess").value = "";

}

function startAgain()
{
  document.getElementById("guesses").style.visibility = "hidden";
    document.getElementById("again").style.visibility = "hidden"; 
    document.getElementById("start").style.visibility = "visible" ; 



}
