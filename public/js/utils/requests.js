import Components from '../../components/Components.js';
import { getAccessToken, setAccessToken } from './accessToken.js';

const SERVER_URL = 'http://localhost:5000';

export function register(data) {
    callRegister('/user/register', data);
}

export function login(data) {
    callLogin('/user/login', data);
}

export async function auth() {
    return new Promise((resolve, reject) => {
        $.ajax({
            headers: {
                authorization: getAccessToken()
            },
            type: "GET",
            contentType: "application/json",
            url: SERVER_URL + '/main/',
            dataType: 'json',
            xhrFields: {
                withCredentials: true
            },
            success: function (response) {
                resolve(response)
            },
            error: function (response) {
                reject(response)
            }
        });
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
                console.log('success')
            if (data.status === 200) {
                console.log($('.flip.return'))
                Components.GetSuccessAlert(data.responseText);
                $('.flip.return').trigger('click');
                console.log($('.flip.return'))
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
}