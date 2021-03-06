//basic form validation

const form=document.getElementById('form');
const username=document.getElementById('username');
const email=document.getElementById('email');const password=document.getElementById('password');
const password2=document.getElementById('password2');

//Show input error message
function showError(input, message){
    const formControl=input.parentElement;
    formControl.className='form-control error';
    const small=formControl.querySelector('small');
    small.innerText=message;
}

//Show input success
function showSuccess(input){
    const formControl=input.parentElement;
    formControl.className='form-control success';
}

//check email validity
function isValidEmail(email)
{
    const re=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(String(email).toLowerCase());
}

//Event Listener
form.addEventListener('submit', function(e){
    e.preventDefault();
    if(username.value===''){
        showError(username, 'Username is required');
    }
        else {
            showSuccess(username);
        }
})

form.addEventListener('submit', function(e){
    e.preventDefault();
    if(email.value===''){
        showError(email, 'Email is required');
    }
    else if(!isValidEmail(email.value))
    {
        showError(email, 'Email is not valid');
    }
        else {
            showSuccess(email);
        }
})

form.addEventListener('submit', function(e){
    e.preventDefault();
    if(password.value===''){
        showError(password, 'Password is required');
    }
        else {
            showSuccess(password);
        }
})

form.addEventListener('submit', function(e){
    e.preventDefault();
    if(password2.value===''){
        showError(password2, 'Confirm Password is required');
    }
        else {
            showSuccess(password2);
        }
})