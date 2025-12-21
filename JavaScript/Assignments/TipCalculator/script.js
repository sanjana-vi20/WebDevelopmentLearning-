function calculate() {
  const bill = document.getElementById("bill").value;
  const service = document.getElementById("services").value;
  const person = document.getElementById("person").value;

  const tip =  bill*(service/100);
  finalTip = (tip/person);
  console.log(tip);
  console.log(finalTip);
  
  
  

  document.getElementById("tip").innerText = `Tip Amount ${finalTip}per each`;
}
