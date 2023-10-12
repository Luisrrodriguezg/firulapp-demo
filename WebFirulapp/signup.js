// signup.js
document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // User data
    var fullName = document.getElementById("fullName").value;
    var email = document.getElementById("email").value;
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Sign up process


    // Display data (Chechking functionalities)
    alert("Full Name: " + fullName + "\nEmail: " + email + "\nUsername: " + username + "\nPassword: " + password);
});