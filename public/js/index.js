import Components from '../components/Components.js';
import { register } from './requests.js';

$(function () {
    bindEvents();
    Components.GetCard();
});

function bindEvents() {
    $('.flip').on('click', function () {
        $('.front, .back').toggleClass('rotate');
    });

    $('#register-form').on('submit', function (e) {
        const response = register($(this).serializeObject());

        //Success
        if (response.status === 200) {
            Components.GetSuccessAlert(response.message)
            $('.flip.return').trigger('click');
        } else {
            Components.GetErrorAlert(response.message);
        };
        e.preventDefault();
    });
}