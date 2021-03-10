import GetCard from '../components/card.js';

$(function() {
    /*Temp*/
    var temp = '';
    for (let index = 0; index < 9; index++) {
        temp += GetCard();
    }
    $('.main').append(temp)
    /*Temp*/
    bindEvents();
});

function bindEvents() {
    $('#toggler').on('click', async function() {
        var top = $('.dashboard').css('top');

        top === '0px' ? top = "-100%" : top = "0px";
        $('.dashboard').css('top', top);

        $('#toggler i').toggleClass("up"); 

        $(this).css('pointer-events', 'none');
        setTimeout(function() {
            $('#toggler').css('pointer-events', 'all');
        }, 700);
    });

    $('.link:not(.btn-logout)').on('click', function() {
        $('.link').removeClass('active');

        $(this).addClass('active');
    });
}