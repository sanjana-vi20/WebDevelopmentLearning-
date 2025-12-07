function formSubmit()
{
    const name = document.getElementById("name").value;
    document.getElementById("form").inputMode = "";
    alert(`Thank you for Enrolling, ${name} !`)
}

function contactSubmit()
{
    const name = document.getElementById("contactName").value;

    document.getElementById("contactName").value= "";
    document.getElementById("contactEmail").value= "";
    document.getElementById("contactMsg").value= ""; 

    alert(`Thank you for contacting us, ${name}!`)


}