const animationTime = 400;  //Miliseconds
const disappearTime = 5000; //Miliseconds
var existingTimeout;

export function SuccessAlert(message) {
    var alert = `<div class="alert alert-success alert-dismissible" role="alert">${message ? message : 'Success!'}
                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="alert" aria-label="Close"></button>             
                </div>`;
    alertBehaviour(alert);
}

export function ErrorAlert(message) {
    var alert = `<div class="alert alert-danger alert-dismissible" role="alert">${message ? message : 'An error has occured!'}
                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="alert" aria-label="Close"></button>    
                </div>`;
    alertBehaviour(alert);
}

/***Utils ***/
function alertBehaviour(alert) {
    if ($('.alert').length !== 0) {
        clearTimeout(existingTimeout);
        removeExisting(alert);
    } else {
        showAlert(alert);
    }
}

function removeExisting(alert) {
    hideAlert();

    setTimeout(function () {
        showAlert(alert);
    }, animationTime);
}

function showAlert(alert) {
    $('body').append(alert);

    //Show Alert
    setTimeout(function () {
        $('.alert').addClass('show-alert');
    }, 1); //Wait 1ms or doesnt do animation

    //Disappear automatically   
    existingTimeout = setTimeout(function () {
        hideAlert();
    }, disappearTime);

    //Btn close
    $('.btn-close').on('click', function () {
        hideAlert();
    });
}

function hideAlert() {
    $('.alert').removeClass('show-alert');

    //Wait 0.5s to remove
    setTimeout(function () {
        $('.alert').remove();
    }, animationTime);
}