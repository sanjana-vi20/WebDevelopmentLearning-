function submit() {
  const fullName = document.getElementById("fullName").value.trim();
  const email = document.getElementById("email").value.trim();
  const contact = document.getElementById("contact").value.trim();
  const dob = document.getElementById("dob").value.trim();
  const qualification = document.getElementById("qualification").value.trim();
  const grade = document.getElementById("Grade").value.trim();
  const address = document.getElementById("address").value.trim();
  const city = document.getElementById("city").value.trim();
  const pinCode = document.getElementById("PinCode").value.trim();
  const guardianName = document.getElementById("Gname").value.trim();
  const guardianContact = document.getElementById("Gnumber").value.trim();
  const sources = document.getElementById("source").value.trim();
  const course = document.getElementById("course").value.trim();


  document.querySelectorAll(".errors").forEach((element) => {
    element.innerHTML = "";
  });

  if (!fullName) {
    document.getElementById("nameError").innerText = "Required";
  } else if (!/^[A-Za-z ]+$/.test(fullName)) {
    document.getElementById("nameError").innerText =
      "Please enter a valid name";
    return;
  }
  if (!email) {
    document.getElementById("emailError").innerText = "Required";
  } else if (!/^[\w\.]+@(gmail|outlook|ricr)\.(com|in|co.in)$/.test(email)) {
    document.getElementById("emailError").innerText =
      "Please enter a valid email address";
    return;
  }

  if (!contact) {
    document.getElementById("contactError").innerText = " Required";
  } else if (!/^[6-9]\d{9}$/.test(contact)) {
    document.getElementById("contactError").innerText =
      "Enter a 10-digit Indian mobile number";
    return;
  }

  if (!dob) {
    document.getElementById("doberror").innerText = "Required";
  } else {
    const curr = new Date().getFullYear();
    const birth = Number(dob.split("-")[0]);
    if (curr - birth < 14) {
      document.getElementById("doberror").innerText =
        "You must be at least 15 years old";
      return;
    }
  }

  if (!qualification) {
    document.getElementById("qError").innerText =
      "Please select a qualification";
  }

  if (!course) {
    document.getElementById("cError").innerText =
      "Please select a course";
  }

  if (!grade) {
    document.getElementById("gError").innerText =
      "Enter a valid percentage or grade";
  }

  if (!pinCode) {
    document.getElementById("pinError").innerText = "Required";
  } else if (!/^\d{6$/.test(pinCode)) {
    document.getElementById("pinError").innerText =
      "Enter a valid 6-digit pin code";
    return;
  }

  if (!address) {
    document.getElementById("aError").innerText =
      "Enter your full address";
  }

  if (!city) {
    document.getElementById("cityError").innerText =
      "Please enter a valid city name";
  }
 
  if (!guardianName) {
    document.getElementById("GnameError").innerText =
      "Enter guradian's full name";
  }
  else if (!/^[A-Za-z ]+$/.test(guardianName)) {
    document.getElementById("GnameError").innerText =
      "Please enter a valid name";
    
  }
  if (!guardianContact) {
    document.getElementById("GcontactError").innerText = " Required";
  } else if (!/^[6-9]\d{9}$/.test(guardianContact)) {
    document.getElementById("GcontactError").innerText =
      "Enter a 10-digit Indian mobile number";
    return;
  }
  if (!sources) {
    document.getElementById("sourceError").innerText =
      "Select an Option";
  }
}
