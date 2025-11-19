function login(){
    console.log("Login button Clicked");

    const em = document.getElementById("EmailField").value;
    console.log(em);

    const pass = document.getElementById("Password").value;
    console.log(pass);

    alert("Login Done");

    document.getElementById("EmailField").value = "";
    document.getElementById("Password").value = "";
    

    const firstname = document.getElementById("firstName").value;
    const  lastname = document.getElementById("lastName").value;
    const date = document.getElementById("date").value;

    console.log(firstname);
    console.log(lastname);
    console.log(date);

    

    
}