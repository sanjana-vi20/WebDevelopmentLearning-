function start() {
  console.log("Game Started");
  document.getElementById("dice1").disabled = false;
  document.getElementById("restart").disabled = false;
  document.getElementById("start").disabled = true;
}

function restart() {
  window.location.reload();
}

function p1Play() {
  const DF = Math.floor(Math.random() * 6) + 1;
  document.getElementById("image1").src = `${DF}.svg`;
  console.log(DF);
  let Score = Number(document.getElementById("score1").innerText);

    if(Score == 100)
    {
      alert("Player1 is Win");
    }
    else if (DF == 6 ) {
    document.getElementById("dice2").disabled = false;
    document.getElementById("dice1").disabled = true;

  } else {
    Score = Score + DF;


    document.getElementById("score1").innerText = Score;
    
  }
}

function p2Play() {
 const DF = Math.floor(Math.random() * 6) + 1;
 document.getElementById("image2").src = `${DF}.svg`;
 console.log(DF);
  let Score2 = Number(document.getElementById("score2").innerText);

  if(Score2 == 100)
    {
      alert("Player2 is Win");
    }
    else if (DF == 6 ) {
    document.getElementById("dice2").disabled = true;
    document.getElementById("dice1").disabled = false;
  } else {

    Score2 = Score2 + DF;
    document.getElementById("score2").innerText = Score2;
    
  }
}
