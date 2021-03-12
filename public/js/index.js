import Components from '../components/Components.js';

$(function() {
    bindEvents();
    Components.GetCard();
});

function bindEvents() {
    $('.flip').on('click', function() {
        $('.front, .back').toggleClass('rotate');
    });

    $('#register').on('click', function() {
        Components.GetSuccessAlert();

        $('.flip.return').trigger('click');
    });
}