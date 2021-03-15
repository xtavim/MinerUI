import Components from '../components/Components.js';
import { register, login } from './utils/requests.js';
$(function () {
    bindEvents();
    
    Components.ToggleOverlay();
});

function bindEvents() {
    $('.flip').on('click', function () {
        $('.front, .back').toggleClass('rotate');
    });

    $('#register-form').on('submit', function (e) {
        register($(this).serializeObject());

        e.preventDefault();
    });

    $('#login-form').on('submit', function(e) {
        login($(this).serializeObject());

        e.preventDefault();
    });
}