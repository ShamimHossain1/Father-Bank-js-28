// step-1: add click event handler with the submit button

document.getElementById('btn-submit').addEventListener('click', function(){
    // step-2: get the email and pass inside the input fields
    const inputMail = document.getElementById('email');
    const email = inputMail.value;

    const inputPass = document.getElementById('password');
    const password = inputPass.value;

    // step 3 : set condition for login mail and  pass
    if(email === 'bank@mail.com' && password === 'password'){
        // step 4: set the location for valid user
        window.location.href = 'bank.html'
    } 
    else{
        alert("It is not your Father's Bank")
    }
})