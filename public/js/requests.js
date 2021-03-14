import Components from '../components/Components.js';
const SERVER_URL = 'http://localhost:5000/user/';

export function register(data) {
    callRegister('register', data);
}

export function login(data) {
    callLogin('login', data);
}

function callRegister(path, data) {
    Components.ToggleOverlay();
    Components.GetSpinner('register');

    $.ajax({
        type: "POST",
        contentType: "application/json",
        url: SERVER_URL + path,
        data: JSON.stringify(data),
        dataType: 'json',
        complete: function (data, textStatus) {
            //Success
            if (data.status === 200) {
                Components.GetSuccessAlert(data.responseText);                
                $('.flip.return').trigger('click');
            } else {
                console.log(data.responseText)
                Components.GetErrorAlert(data.responseText);
            }

            Components.RemoveSpinner('register');
            Components.ToggleOverlay();
        }
    });
}

function callLogin(path, data) {
    Components.ToggleOverlay();
    Components.GetSpinner('login');

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
                Components.RemoveSpinner('login');
                //token
            }

            Components.ToggleOverlay();
        }
    });
}