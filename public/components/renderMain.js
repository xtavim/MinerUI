export default function RenderMain() {
    return `<div class="noclick">
                <span class="spinner-border" role="status" aria-hidden="true"></span>
            </div>
            <div class="bg-image"></div>

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
}