import { postMain } from '../js/utils/requests.js';

export default function RenderMain() {
    const html =
            `<div class="bg-image"></div>

            <div class="dash-toggler">
                <button id="toggler" class="btn btn-lg btn-primary btn-block" type="button">
                    <i class="fas fa-angle-down"></i>
                </button>
            </div>
            <div class="dashboard">
                <div class="main-dash">
                    <div class="banner">
                        <img src="./assets/avatar.png" width="72">
                        <h3>Name Last Name</h3>
                        <p>Username</p>
                    </div>
                    <div class="links">
                        <button type="button" class="btn link" value="home">
                            <i class="fas fa-home"></i>
                            <span>Home</span>
                        </button>
                        <button type="button" class="btn link" value="charts">
                            <i class="fas fa-chart-line"></i>
                            <span>Charts</span>
                        </button>
                        <button type="button" class="btn link" value="leaderboard">
                            <i class="fas fa-trophy"></i>
                            <span>Leaderboard</span>
                        </button>
                        <button type="button" class="btn link" value="settings">
                            <i class="fas fa-cogs"></i>
                            <span>Settings</span>
                        </button>
                        <button type="button" class="btn link" value="help">
                            <i class="fas fa-life-ring"></i>
                            <span>Help</span>
                        </button>

                        <form id="logout" action="index.html" hidden></form>
                        <button class="btn btn-danger btn-logout btn-lg link" type="submit" form="logout">
                            Sign Out
                            <i class="fas fa-sign-out-alt"></i>
                        </button>
                    </div>
                </div>
            </div>

            <div class="main row">
            <div id="home" class="row" hidden></div>
            <div id="charts" class="row" hidden></div>
            <div id="leaderboard" class="row" hidden></div>
            <div id="settings" class="row" hidden></div>
            <div id="help" class="row" hidden></div>
        </div>`;

    $('body').html(html);

    bindEvents();
}

function bindEvents() {
    const mobileW = 700;

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

        postMain()

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