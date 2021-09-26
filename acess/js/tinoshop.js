

var signUp = document.getElementsByClassName('user__signup');
var modal_signup = document.querySelector('#modal-signup');
var message__box = document.querySelector('.message__box-null');
var logIn = document.getElementsByClassName('user__login');
var modal_login = document.querySelector('#modal-login');
var confirm__return = document.getElementsByClassName('confirm-return');
var modal_box_logIn = document.getElementById('modal-box-logIn');
var modal_box_signUp = document.getElementById('modal-box-signUp');
var notify = document.getElementById('notify');

// notify.onmouseover = function () {
//     message__box.style.display = 'block';
// }
// notify.onmouseout = function () {
//     message__box.style.display = 'none';
// }

signUp[0].onclick = function () {
    modal_signup.style.display = 'block';
    message__box.style.display = 'none';
    modal_signup.style.animation = 'fadeIn ease-in 0.3s';
}
signUp[1].onclick = function () {
    modal_signup.style.display = 'block';
    modal_signup.style.animation = 'fadeIn ease-in 0.3s';
}
confirm__return[0].onclick = function () {
    modal_signup.style.display = 'none';
}

logIn[0].onclick = function () {
    modal_login.style.display = 'block';
    message__box.style.display = 'none';
    modal_login.style.animation = 'fadeIn ease-in 0.3s';
}
logIn[1].onclick = function () {
    modal_login.style.display = 'block';
    modal_login.style.animation = 'fadeIn ease-in 0.3s';
}
confirm__return[1].onclick = function () {
    modal_login.style.display = 'none';
}

modal_box_logIn.onclick = function () {
    modal_signup.style.display = 'none';
    modal_login.style.animation = 'headerHidden ease-in 0.5s';
    modal_login.style.display = 'block';
}

modal_box_signUp.onclick = function () {
    modal_login.style.display = 'none';
    modal_signup.style.animation = 'headerHidden ease-in 0.5s';
    modal_signup.style.display = 'block';
}

var confirm_signup = document.getElementsByClassName('confirm-signup');
var reload;
confirm_signup[0].onclick = function () {
    modal_signup.style.cursor = 'wait';
    reload = setTimeout(function () {
        location.reload();
    },1300);
}

confirm_signup[1].onclick = function () {
    modal_login.style.cursor = 'wait';
    reload = setTimeout(function () {
        location.reload();
    },1300);
}

