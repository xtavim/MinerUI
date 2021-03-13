import Components from '../components/Components.js';
const SERVER_URL = 'http://localhost:5000/user/';

export function register(data) {
    callRegister('register', data);
}

export function login(data) {
    callLogin('login', data);
}

function callRegister(path, data) {
    $.ajax({
        type: "POST",
        contentType: "application/json",
        url: SERVER_URL + path,
        data: JSON.stringify(data),
        dataType: 'json',
        complete: function (data, textStatus) {
            //Success
            if (data.status === 200) {
                Components.GetSuccessAlert(data.responseText.message);                
                $('.flip.return').trigger('click');
            } else {
                Components.GetErrorAlert(data.responseText.message);
            }
        }
    });
}

function callLogin(path, data) {
    $.ajax({
        type: "POST",
        contentType: "application/json",
        url: SERVER_URL + path,
        data: JSON.stringify(data),
        dataType: 'json',
        complete: function (data, textStatus) {
            //Success
            if (data.status === 200) {
                window.location.href = "/main.html";
            } else {
                Components.GetErrorAlert(data.responseText);
                //token
            }
        }
    });
}