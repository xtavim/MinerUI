import Components from '../../components/Components.js';
import { getAccessToken, setAccessToken } from './accessToken.js';

const SERVER_URL = 'http://localhost:5000';

export function register(data) {
    callRegister('/user/register', data);
}

export function login(data) {
    callLogin('/user/login', data);
}

export function postMain() {
    $.ajax({
        headers: {
            authorization: `bearer ${getAccessToken()}`
        },
        type: "GET",
        contentType: "application/json",
        url: SERVER_URL + '/main/',
        dataType: 'json',
        xhrFields: {
            withCredentials: true
        },
        success: function (data, textStatus) {
            console.log(data)
        }
    });
}

export function refreshToken() {
    $.ajax({
        type: "POST",
        contentType: "application/json",
        url: SERVER_URL + '/user/refresh_token',
        dataType: 'json',
        xhrFields: {
            withCredentials: true
        },
        complete: function (data, textStatus) {
            if (data.responseJSON.ok) {
                setAccessToken(data.responseJSON.accessToken);
                Components.RenderMain();
            } else {
                Components.RenderIndex();
            }

        }
    });
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
        xhrFields: {
            withCredentials: true
        },
        complete: function (data, textStatus) {
            //Success
            if (data.status === 200) {
                setAccessToken(data.responseJSON.accessToken);
                Components.RenderMain();
            } else {
                Components.GetErrorAlert(data.responseText);
                Components.RemoveSpinner('login');
                //token
            }

            Components.ToggleOverlay();
        }
    });


    /*Temp
    var temp = '';
    for (let index = 0; index < 2; index++) {
        temp += Components.GetCard();
    }
    $('#home, #settings').append(temp);

    $('[value="home"]').trigger('click');
    Temp*/

}