function search() {
  const place = document.getElementById("states").value;

  switch (place) {
    case `${place}`:
      document.getElementById(`${place}`).style.visibility = "visible";
      const audio =  document.getElementById("flagSound");
      audio.currentTime = 0;
      audio.play();
      document.getElementById("flagSound").play() ;
      const a = document.getElementById(`${place}`);
      a.title = `State: ${place}`;
      break;
  }
}

function viewAll() {
  const icons = document.querySelectorAll(".icon");

  icons.forEach((i) => {
    i.style.visibility = "visible";
    i.title = `State : ${i.id}`;

    const audio =  document.getElementById("flagSound");
      audio.currentTime = 0;
      audio.play();
  });
}

function clearAll() {
  const icons = document.querySelectorAll(".icon");

  icons.forEach((i) => {
    i.style.visibility = "hidden";
  });
}