document.getElementById('btn-submit').addEventListener('click', e => {
    console.log("Clicked!");
});

document.querySelector('#form-login').addEventListener('mouseenter', e => {
    console.log("Entered!");
});

document.querySelector('#form-login').addEventListener('mouseleave', e => {
    console.log("Leaved!");
});

document.querySelector("#form-login").addEventListener('submit', e => {
    e.preventDefault();

    let email = document.querySelector("#email").value;
    let password = document.querySelector("#password").value;
    
    let json = {
        email,
        password
    }

    if(!json.email) {
        console.error("E-mail field must be filled!");
    } else if(!json.password) {
        console.error("Password must be filled");
    } else {
        console.log("Success!");
    }
});