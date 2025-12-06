function input(char) {
  if (char === "=") {
   try
   {
     let exp = document.getElementById("display").value;
    document.getElementById("display").value = eval(exp);
   }
    catch(error)
    {
        alert("Invalid Expression");
        document.getElementById("display").value="";
    }
  } else if (char === "C") {
    document.getElementById("display").value = "";
  } else {
    let exp = document.getElementById("display").value;
    exp = exp + char;
    document.getElementById("display").value = exp;
  }
}

document.addEventListener("keydown" ,(a) => {
  if(a.key == "Enter")
  {
    input("=");
  }
  else if(
    a.key == "1"||
    a.key =="2"||
    a.key =="3"||
    a.key == "4"||
    a.key =="5"||
    a.key =="6"||
    a.key =="7"||
    a.key =="8"||
    a.key =="9"||
    a.key =="0"||
    a.key =="+"||
    a.key =="-"||
    a.key =="."||
    a.key =="*"||
    a.key =="/"
  )
  {
    input(a.key);
  }
  else if(a.key === "Backspace")
  {
    input("C");
  }
  
})
