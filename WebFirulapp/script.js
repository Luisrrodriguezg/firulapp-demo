// First page login
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    // User data
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    let authentication = true;
    // Authentication is always true (Sofy must figure out a way to check if the authentication is true)
   if (authentication == true/* For now always go to the pet admin */) {
    window.location.href = "petadmin.html"; // Going to pet admin
} else {
    // Failed, (Sofy's backend)
    alert("Login failed. Please check your credentials.");
}
});