let password;
function updatePassword(){
    var update = document.getElementById('password-r');
    password = update.value;
    console.log(password); // DELETE THIS LINE WHEN YOU VERIFY THAT IT WORKS!!!!!!!!
    localStorage.set('password', password)
}

let username;
function updateUsername(){
    var update = document.getElementById('username-r');
    username = update.value;
    console.log(username); // DELETE THIS LINE WHEN YOU VERIFY THAT IT WORKS!!!!!!!!
    localStorage.set('username', username);
}

let email;
function updateEmail(){
    var update = document.getElementById('email');
    email = update.value;
    console.log(email); // DELETE THIS LINE WHEN YOU VERIFY THAT IT WORKS!!!!!!!!
    localStorage.set('email', email);
}