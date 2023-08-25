const { error } = require("console");

function registeruser(username, email, phonenumber, password){
    const apiurl = app.js;
    const userdata ={
        username: username,
        email: email,
        phonenumber: phonenumber,
        password: password
    };
    fetch(apiurl,{
        method:'post',
        headers:{
            'content-type':'application/json',
        },
        body: JSON.stringify(userdata),
    })
    .then(response => {
        if(response.ok){
            console.log('User registered successfully');
        }
        else{
            console.error("user registration failed");
        }

      });
    }