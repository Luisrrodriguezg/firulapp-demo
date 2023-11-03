// First page login
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); 
     //Constructor object:
     function userCredentials(username,password) {
        this.username = username;
        this.password = password;
        this.check =  function check(authentication) {;
            //Just for now, the authentication will always be true
            if (authentication == true/* For now always go to the pet admin */) {
                window.location.href = "petadmin.html"; // Going to pet admin
            } else {
                // Failed, (Sofy's backend)
                alert("Login failed. Please check your credentials.");
            }
        }
        console.log (username);
     }

    // User data
    var usernameCheck = document.getElementById("username").value;
    var passwordCheck = document.getElementById("password").value;
    //Abstraction
    let currentUser = new userCredentials(usernameCheck,passwordCheck);
    currentUser.check(true);

});