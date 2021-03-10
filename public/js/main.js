$(function() {
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
});