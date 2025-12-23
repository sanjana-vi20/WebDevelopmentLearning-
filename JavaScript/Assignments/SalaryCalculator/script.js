function calculate() {
  let basicSalary = Number(document.getElementById("salary").value);
  let grossSalary = 0;
  let HRA = 0,
    DA = 0;

  if (basicSalary == "" || basicSalary < 0) {
    document.getElementById("error").innerText = "please enter your salary ";
    document.getElementById("salary").value = "";
    return;
  }

  HRA = Number(basicSalary * 0.25);
  DA = Number(basicSalary * 0.20);

  grossSalary = basicSalary + HRA + DA;

  document.getElementById("salary").value = "";

  document.getElementById("result").innerHTML = `
            <h4>Salary breakdown</h4>
            <hr>
            <p>Basic Salary : ₹${basicSalary} </p>
            <p>HRA (25%) : ₹${HRA.toFixed(2)} </p>
            <p>DA (20%) : ₹${DA.toFixed(2)} </p>
            <hr>
            
            <h6>Total Salary : ₹${grossSalary.toFixed(2)} </h4>
        
        <button class="btn btn-outline-primary" onclick="clearResult()">Clear</button>`;
}

function clearResult() {
  document.getElementById("result").innerHTML = "";
}
