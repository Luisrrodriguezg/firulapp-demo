// First page login
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    // User data
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Authentication which we don't know yet (Sofy must figure out a way to comunicate with the database)
    
    //Variables alert
    alert("Username: " + username + "\nPassword: " + password);
});