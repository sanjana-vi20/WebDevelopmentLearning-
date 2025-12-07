function On() {
  document.getElementById("bulb").style.backgroundColor = "yellow";
}

function Off() {
  document.getElementById("bulb").style.backgroundColor = "white";
}

function red() {
  document.getElementById("bulb").style.backgroundColor = "red";
}

function blue() {
  document.getElementById("bulb").style.backgroundColor = "blue";
}
function green() {
  document.getElementById("bulb").style.backgroundColor = "green";
}

// let userColor = document.getElementById("color");
// userColor.addEventListener("change" ,() => changeColor(userColor.value))

function changeColor(color){
    document.getElementById("bulb").style.backgroundColor = color;
}

function SB_Control()
{
    const btn = document.getElementById("sb_btn");
    if(btn.innerText === "on")
    {
        document.getElementById("sb_btn").innerText = "off";
        document.getElementById("smartBulb").classList.add('on');
    }
    else
    {
        document.getElementById("sb_btn").innerText = "on";
        document.getElementById("smartBulb").classList.remove('on');
    }
}

// let Bgcolor = document.getElementById('Bgcolor');
// Bgcolor.addEventListener("change" , ()=> changeBg(Bgcolor.value))

// function changeBg(color) 
// {
//     document.getElementById('text').style.backgroundColor = color;
// }

// let hColor = document.getElementById('headColor');
// hColor.addEventListener("change" ,()=> changeHead(hColor.value));

// function changeHead(color)
// {
//         document.getElementById('Heading').style.color = color;
// }

// let pColor = document.getElementById('paraColor');
// pColor.addEventListener("change" ,()=> changePara(pColor.value))

// function changePara(color)
// {
//     document.getElementById('para').style.color = color;
// }

document.getElementById("c1").addEventListener("mouseover" , () => {
  fillcolor("red");
});

document.getElementById("c1").addEventListener("mouseleave", () => {
  fillcolor("white");
});

document.getElementById("c2").addEventListener("mouseover" , () => {
  fillcolor("green");
});
document.getElementById("c3").addEventListener("mouseover" , () => {
  fillcolor("blue");
});
document.getElementById("c4").addEventListener("mouseover" , () => {
  fillcolor("yellow");
});
document.getElementById("c5").addEventListener("mouseover" , () => {
  fillcolor("orange");
});
document.getElementById("c6").addEventListener("mouseover" , () => {
  fillcolor("violet");
});
document.getElementById("c7").addEventListener("mouseover" , () => {
  fillcolor("indigo");
});

function fillcolor(color)
{
  document.getElementById("bulb").style.backgroundColor = color;
}
