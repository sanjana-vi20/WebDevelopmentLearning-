function add() {
  const site = document.getElementById("siteName").value;
  const user = document.getElementById("userName").value;
  const password = document.getElementById("pass").value;

  const Datapacket = {
    website: site,
    userName: user,
    password: password,
  };

  const actualData = JSON.parse(localStorage.getItem("firstPassword")) || [];

  actualData.push(Datapacket);

  localStorage.setItem("firstPassword", JSON.stringify(actualData));

  document.getElementById("siteName").value ="";
  document.getElementById("userName").value = "";
  document.getElementById("pass").value = "";

}

function downloadData() {
  const data = JSON.parse(localStorage.getItem("firstPassword")) || [];

  const headers = Object.keys(data[0]).join(",") + "\n";

  const val = data.map((i) => Object.values(i).join(",")).join("\n");

    const CSVFormat = headers + val;

    const blob = new Blob([CSVFormat],{type:"text/csv"});

    const anchorTag = document.createElement("a");
    anchorTag.href = URL.createObjectURL(blob);
    anchorTag.download = "sanjnaa.csv";
    anchorTag.click();

    localStorage.removeItem("firstPassword");
}
