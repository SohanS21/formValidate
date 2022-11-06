console.log('starting project');

let name = document.getElementById('name');
let email = document.getElementById('email');
let phone = document.getElementById('phone');
let submit = document.getElementById('submit');
let success = document.getElementById('success');
let failure = document.getElementById('failure');

let validName = false;
let validEmail = false;
let validPhone = false;
failure.classList.remove('show');
success.classList.remove('show');
// $('#failure').hide();
// $('#success').hide();

name.addEventListener('blur', () => {
    // console.log('entered username');
    //validate username
    let regex = /^[a-zA-Z]([0-9a-zA-Z]){2,10}$/;
    let str = name.value;

    if (regex.test(str)) {
        console.log('enterd username correctly');
        name.classList.remove('is-invalid');
        validName = true;
    }
    else {
        console.log('entered username incorrectly');
        name.classList.add('is-invalid');
        validName = false;


    }
})

email.addEventListener('blur', () => {
    console.log('entered email');
    let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,8}$/;
    let str = email.value;

    if (regex.test(str)) {
        console.log('enterd email correctly');
        email.classList.remove('is-invalid');
        validEmail = true;
    }
    else {
        console.log('entered email incorrectly');
        email.classList.add('is-invalid');
        validEmail = false;

    }
})

phone.addEventListener('blur', () => {
    console.log('entered phone');
    let regex = /^[0-9]{10}$/;
    let str = phone.value;

    if (regex.test(str)) {
        console.log('enterd phone correctly');
        phone.classList.remove('is-invalid');
        validPhone = true;
    }
    else {
        console.log('entered phone incorrectly');
        phone.classList.add('is-invalid');
        validPhone = false;

    }
})
submit.addEventListener('click', (e) => {
    e.preventDefault();

    if (validEmail && validName && validPhone) {
        failure.classList.remove('show');
        success.classList.add('show');
      
        // $('#failure').hide();
        // $('#success').show();

    }
    else {
        success.classList.remove('show');
        failure.classList.add('show');
        let success = document.getElementById('success');
        let failure = document.getElementById('failure');
        // $('#success').hide();
        // $('#failure').show();
    }
})