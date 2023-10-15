// signup.js
document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission behavior
    //user factory
    function create_user(fullName,email,username,password){
        return fullName,email,username,password
    }

    // User data
    var fullName = document.getElementById("fullName").value;
    var email = document.getElementById("email").value;
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    // Sign up process


    // Display data (Chechking functionalities)
    alert("Full Name: " + fullName + "\nEmail: " + email + "\nUsername: " + username + "\nPassword: " + password);

    //User data object
    let user = create_user(fullName,email,username,password)
});

document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault();

    /* Sofy must search for the way to check if the email isn't duplicated, for now, let's assume it's always true so it goes right to login*/
    window.location.href = "index.html"; 
});