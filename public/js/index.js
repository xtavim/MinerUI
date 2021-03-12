$(function() {
    bindEvents();
});

function bindEvents() {
    $('.flip').on('click', function() {
        $('.front, .back').toggleClass('rotate');
    });
}