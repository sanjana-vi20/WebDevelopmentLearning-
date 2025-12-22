function calculate() {
  let kilo = document.getElementById("kilometer").value;
  let rupees = 0;
  let usedUnit1  =0 , usedUnit2 = 0  , usedUnit3  = 0, usedUnit4 = 0;
  let a = 0, b =0  , c = 0 , d = 0;
  if(kilo === "" || kilo < 0)
  {
    
    document.getElementById("error").innerText = "please enter a valid distance ";
    document.getElementById("kilometer").value = "";
    return;
  }
  if (kilo > 0) {
     usedUnit1 = Math.min(kilo, 10);
     a = usedUnit1 * 11;
    rupees = rupees + a;
    kilo = kilo - usedUnit1;
    console.log(`rupees : ${rupees}`);
    console.log(`total :${a}`);
    console.log(kilo);
  }

  if (kilo > 0) {
     usedUnit2 = Math.min(kilo, 40);
     b = usedUnit2 * 10;
    rupees = rupees + b;
    kilo = kilo - usedUnit2;
    console.log(`rupees : ${rupees}`);
    console.log(`total :${b}`);
    console.log(kilo);
  }

//   if (kilo > 0) {
//      usedUnit3 = Math.min(kilo, 250);
//      c = usedUnit3 * 1.20;
//     rupees = rupees + c;
//     kilo = kilo - usedUnit3;
//     console.log(`rupees : ${rupees}`);
//     console.log(`total :${c}`);
//     console.log(kilo);
//   }
  if (kilo > 0) {
     usedUnit4 = kilo
     d = usedUnit4 * 9;
    rupees = rupees + d;
    kilo = kilo - usedUnit4;
    console.log(`rupees : ${rupees}`);
    console.log(`total :${d}`);
    console.log(kilo);
  }

  document.getElementById("kilometer").value = '';

  document.getElementById("result").innerHTML = `
            <h4>Travelbill BreakDown</h4>
            <hr>

            <p>First 10 km (₹11)</p>
            <p>Distance:${usedUnit1} </p>
            <p>Charge: ₹${a}</p>
            <hr>

            <p>Next 40 km (₹10)</p>
            <p>Distance:${usedUnit2}</p>
            <p>Charge: ₹${b}</p>
            <hr>
            <p>Above 40 km (₹9)</p>
            <p>Distance:${usedUnit4}</p>
            <p>Charge: ₹${d}</p>
            <hr>
            <h6>Final Total : ₹${rupees.toFixed(2)} </h4>
        
        <button class="btn btn-outline-primary" onclick="clearResult()">Clear</button>`;


}

function clearResult()
{
    document.getElementById("result").innerHTML = "";
}
