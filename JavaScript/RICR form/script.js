function submitt()
{

    const name = document.getElementById("person").value || "";
    const contact = document.getElementById("contact").value || "";
    const email = document.getElementById("email").value || "";
    const qualification = document.getElementById("Qualification").value || "";
    const collegeName = document.getElementById("collegeName").value || "";
    const year = document.getElementById("year").value || "";
    const branch = document.getElementById("branch").value || "";
    const course = document.getElementById("course").value || "";
    const source = document.getElementById("source").value || "";

    console.log(name);
    console.log(contact);
    console.log(email);
    console.log(qualification);
    console.log(collegeName);
    console.log(year);
    console.log(branch);
    console.log(course);
    console.log(source);
    alert("Form Submitted Successfully!");
}