function checkAgeOfMembers(event) {
    event.preventDefault(); // Prevent form submission
    const age = parseInt(document.getElementById("date").value);
    if (age >= 18) {
        console.log("Login successfully");+3
        
    } else {
        console.log("Access denied");
    }
}

document.querySelector(".signin-form").addEventListener("submit", checkAgeOfMembers);
