function calculate()
{
    const curr = document.getElementById("currentDate").value;
    const birth = document.getElementById("birthdate").value;

const curryear = Number(curr.split("-")[0]);
const birthyear = Number(birth.split("-")[0]);
const currDate = Number(curr.split("-")[2]);
const birthDate = Number(birth.split("-")[2]);
const currMonth = Number(curr.split("-")[1]);
const birthMonth = Number(birth.split("-")[1]);

const year = curryear-birthyear;
console.log(year);

if(birthyear > curryear)
{
    document.getElementById("error").innerText = "PLease enter a valid date";
}
else{
    if(currDate >= birthDate || currMonth >=birthMonth)
    {
        document.getElementById("years").innerText = `Your age is ${year} years`;
    }
    else{
        document.getElementById("years").innerText = `Your age is ${year-1} years`
    }
}
}

