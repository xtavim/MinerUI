import { register, login } from '../js/utils/requests.js';

export default function RenderIndex() {
    const html = 
            `<div class="noclick">
                <span class="spinner-border" role="status" aria-hidden="true"></span>
            </div>
            <div class="bg-image"></div>
            <div class="form-login">
                <div class="return-wrapper back rotate">
                    <button class="btn flip return" type="button">
                        <i class="fas fa-reply" aria-hidden="true"></i>
                    </button>
                </div>
                <div class="container-fluid">
                    <!--Front-->
                    <div class="front">
                        <form id="login-form">
                            <i class="fas fa-coins fa-4x mb-4 text-secondary"></i>

                            <h1 class="h3 mb-3 font-weight-normal">MinerUI</h1>

                            <div class="form-floating input-group mb-2">
                                <input type="email" id="inputEmail" name="email" class="form-control" placeholder="Email Address"
                                    maxlength="255" required>
                                <label for="inputEmail">Email Address</label>
                                <span class="input-group-text">
                                    <i class="fas fa-envelope input-icon"></i>
                                </span>
                            </div>
                            <div class="form-floating input-group mb-2">
                                <input type="password" id="inputPassword" name="password" class="form-control" placeholder="Password"
                                    minlength="6" maxlength="1024" required>
                                <label for="inputPassword">Password</label>
                                <span class="input-group-text">
                                    <i class="fas fa-key input-icon"></i>
                                </span>
                            </div>

                            <div class="checkbox mb-3 mt-3">
                                <label class="text-white">
                                    <input class="form-check-input" type="checkbox" value="remember-me" /> Remember Me
                                </label>
                            </div>
                            <div class="row">
                                <div class="btn-group btn-group-index" role="group">
                                    <button id="prompt-register" class="btn btn-lg btn-secondary flip" type="button">
                                        Register
                                    </button>
                                    <button id="login" class="btn btn-lg btn-primary" type="submit">
                                        Login
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>

                    <!--Back-->
                    <div class="back rotate">
                        <form id="register-form">
                            <i class="fas fa-coins fa-4x mb-4 text-secondary"></i>

                            <h1 class="h3 mb-3 font-weight-normal">MinerUI</h1>

                            <div class="form-floating input-group mb-2">
                                <input type="text" id="inputUsername" name="username" class="form-control" placeholder="Username"
                                    minlength="6" maxlength="255" required>
                                <label for="inputUsername">Username</label>
                                <span class="input-group-text">
                                    <i class="fas fa-user input-icon"></i>
                                </span>
                            </div>
                            <div class="form-floating input-group mb-2">
                                <input type="email" id="inputEmailRegister" name="email" class="form-control" placeholder="Email Address"
                                    required maxlength="255">
                                <label for="inputEmailRegister">Email Address</label>
                                <span class="input-group-text">
                                    <i class="fas fa-envelope input-icon"></i>
                                </span>
                            </div>
                            <div class="form-floating input-group mb-2">
                                <input type="password" id="inputPasswordRegister" name="password" class="form-control" placeholder="Password"
                                    minlength="6" maxlength="1024" required>
                                <label for="inputPasswordRegister">Password</label>
                                <span class="input-group-text">
                                    <i class="fas fa-key input-icon"></i>
                                </span>
                            </div>

                            <div class="row">
                                <div class="btn-group btn-group-index" role="group">
                                    <button id="register" class="btn btn-lg btn-secondary" type="submit">
                                        Register
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>`;

    $('body').html(html);

    bindEvents();
}


function bindEvents() {
    $('.flip').on('click', function () {
        $('.front, .back').toggleClass('rotate');
    });

    $(document).on('submit', '#register-form', function (e) {
        register($(this).serializeObject());

        e.preventDefault();
    });

    $(document).on('submit', '#login-form', function(e) {
        login($(this).serializeObject());

        e.preventDefault();
    });
}