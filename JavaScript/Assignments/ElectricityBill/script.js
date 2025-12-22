function calculate() {
  let unit = document.getElementById("units").value;
  let rupees = 0;
  let usedUnit1  =0 , usedUnit2 = 0  , usedUnit3  = 0, usedUnit4 = 0;
  let a = 0, b =0  , c = 0 , d = 0;
  if(unit === "" || unit < 0)
  {
    document.getElementById("error").innerText = "please enter a valid unit";
    return;
  }
  if (unit > 0) {
     usedUnit1 = Math.min(unit, 50);
     a = usedUnit1 * 0.5;
    rupees = rupees + a;
    unit = unit - usedUnit1;
    console.log(`rupees : ${rupees}`);
    console.log(`total :${a}`);
    console.log(unit);
  }

  if (unit > 0) {
     usedUnit2 = Math.min(unit, 150);
     b = usedUnit2 * 0.75;
    rupees = rupees + b;
    unit = unit - usedUnit2;
    console.log(`rupees : ${rupees}`);
    console.log(`total :${b}`);
    console.log(unit);
  }

  if (unit > 0) {
     usedUnit3 = Math.min(unit, 250);
     c = usedUnit3 * 1.20;
    rupees = rupees + c;
    unit = unit - usedUnit3;
    console.log(`rupees : ${rupees}`);
    console.log(`total :${c}`);
    console.log(unit);
  }
  if (unit > 0) {
     usedUnit4 = unit
     d = usedUnit4 * 1.50;
    rupees = rupees + d;
    unit = unit - usedUnit4;
    console.log(`rupees : ${rupees}`);
    console.log(`total :${d}`);
    console.log(unit);
  }

  const surcharge = rupees * 0.20;

  const final = rupees + surcharge;

  document.getElementById("units").value = '';

  document.getElementById("result").innerHTML = `
            <h4>Electricity BreakDown</h4>
            <hr>

            <p>First 50 units (₹0.50/unit)</p>
            <p>Units:${usedUnit1} </p>
            <p>Charge: ₹${a}</p>
            <hr>

            <p>Next 150 units (₹0.75/unit)</p>
            <p>Units:${usedUnit2}</p>
            <p>Charge: ₹${b}</p>
            <hr>
            <p>Next 250 units (₹1.20/unit)</p>
            <p>Units:${usedUnit3}</p>
            <p>Charge: ₹${c.toFixed(2)}</p>
            <hr>
            <p>Above 450 units (₹1.50/unit)</p>
            <p>Units:${usedUnit4}</p>
            <p>Charge: ₹${d}</p>
            <hr>
            <p>Subtotal: ₹${rupees.toFixed(2)}</p>
            <p>Surcharge (20%): ₹${surcharge.toFixed(2)}</p>
            <hr>
            <h6>Final Total : ₹${final.toFixed(2)} </h4>
        
        <button class="btn btn-outline-primary" onclick="clearResult()">Clear</button>`;


}

function clearResult()
{
    document.getElementById("result").innerHTML = "";
}
