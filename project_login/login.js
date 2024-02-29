document.addEventListener('DOMContentLoaded', function () {
    var loginForm = document.querySelector('.SignInForm_form');
    if (loginForm) {
        loginForm.onsubmit = loginValidate;
    }
});

function loginValidate() {
    var idField = document.querySelector('.idField').value;
    var passwordField = document.querySelector('.passwordField').value;
    
    if (idField === '') {
        alert('아이디를 입력해 주세요.');
        return false;
    }

    if (passwordField === '') {
        alert('비밀번호를 입력해 주세요.');
        return false;
    }

    return
}