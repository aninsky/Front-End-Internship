const form = document.getElementById('form');
const username = document.getElementById('username');
const password = document.getElementById('password');

form.addEventListener('submit', (e) => 
    {

        e.preventDefault();

        checkInputs();
});

function checkInputs() {
    const usernameValue = username.value;
    const passowrdValue = password.value;

    if(usernameValue === '') {
        //show error
        //add error class
        setErrorFor(username, 'Username cannot be blank');
    }
    else {
        //add success class
        setSuccessFor(username);
    }

    if(passowrdValue === '') {
        //show error
        //add error class
        setErrorFor(password, 'Password cannot be blank');
    }
    else {
        //add success class
        setSuccessFor(password);
    }
}

function setErrorFor(input,message){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    //add error mmessage into small
    small.innerText = message;

    formControl.className = 'form-control error';
}

function setSuccessFor(input)
{
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}


