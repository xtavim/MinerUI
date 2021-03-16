import Components from '../components/Components.js';
import { refreshToken } from '../js/utils/requests.js';

$(function () {
    //Refresh Token
    (() => {
        refreshToken();
    })();
});