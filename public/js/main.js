import Components from '../components/Components.js';
import { auth } from './utils/requests.js';
const mobileW = 700;

(async () => {
    auth().then(data => {
        $(function () {
            bindEvents();

            /*Temp*/
            var temp = '';
            for (let index = 0; index < 2; index++) {
                temp += Components.GetCard();
            }
            $('#home, #settings').append(temp);

            $('[value="home"]').trigger('click');
            /*Temp*/

            //Remove Overlay
            Components.ToggleOverlay('noclick');
        });
    }).catch(err => {
        window.location.href = '/';
    });
})();

function bindEvents() {
    $('#toggler').on('click', function () {
        var top = $('.dashboard').css('top');

        top === '0px' ? top = "-100%" : top = "0px";
        $('.dashboard').css('top', top);

        $('#toggler i').toggleClass("up");

        $(this).css('pointer-events', 'none');
        setTimeout(function () {
            $('#toggler').css('pointer-events', 'all');
        }, 700);
    });

    $('.link:not(.btn-logout)').on('click', function () {
        linkHandler(this);

        if (window.innerWidth <= mobileW) {
            $('#toggler').trigger('click');
        }
    });
}

//Utils
function linkHandler(btn) {
    var active = $('.link.active');
    active.removeClass('active');
    $('#' + active.attr('value')).attr('hidden', true);

    $(btn).addClass('active');
    var id = "#" + $(btn).attr('value');

    $(id).attr('hidden', false);
}