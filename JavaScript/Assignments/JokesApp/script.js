async function getJokes() {
  const response = await fetch(
    "https://official-joke-api.appspot.com/jokes/random"
  );

  const data = await response.json();
  document.getElementById("joke").innerText = data.setup;
  document.getElementById("punchLine").innerText = data.punchline;
}
