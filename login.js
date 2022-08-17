// step1 add click event handler with the submit button
document.getElementById('btn-submit').addEventListener('click', function() {

    //step 2 get the email address inside the email input field
    //always remember to use the .value to get text from an input field
    const emailField = document.getElementById('user-email');

    const email = emailField.value;

    // step 3 get password
    // 3.a-set id on the html getElementById
    //3.b get the getElementById
    //3.c set the value

    const passField = document.getElementById('user-password');
    const password = passField.value;

    // Danger:Do not verify email password on the client side
    //step:4 verify and password

    if (email === 'xyz@gmail.com' && password === '1234') {
        window.location.href = 'bank.html';
    } else {
        alert('invalid user');
    }






})