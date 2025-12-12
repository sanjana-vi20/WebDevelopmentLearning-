function submit()
{
    const fullName = document.getElementById("userName").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phoneNumber").value;
    const date = document.getElementById("dob").value;


    if(!/^[A-Za-z ]+$/.test(fullName))
    {
        alert("Invalid name");
        return;
    }

    if(!/^[\w\.]+@(gmail|outlook|ricr|yahoo)\.(com|in|co.in)$/.test(email))
    {
        alert("invalid email");
        return;
        
    }

    if(!/^[6-9]\d{9}$/.test(phone))
    {
        alert("Invalid phoneNumber");
        return;
    }


    const data = {
        fullName : fullName,
        Email : email,
        phoneNo : phone,
        DOB: date,
    };

    console.log(data);
}