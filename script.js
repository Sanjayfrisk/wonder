document.getElementById("registrationform").addEventListener("submit", function(event){
    event.preventDefault();
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const phonenumber = document.getElementById("phonenumber").value;
    const password = document.getElementById('password').value;
    registeruser(username, email, phonenumber, password);
});