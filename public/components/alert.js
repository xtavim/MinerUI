var disappear;

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

//Utils
function alertBehaviour(alert) {
    if ($('.alert').length !== 0) {
        clearTimeout(disappear);
        removeExisting(alert);
    } else {
        showAlert(alert);
    }
}

function showAlert(alert) {
    $('body').append(alert);

    //Show
    setTimeout(function () {
        $('.alert').addClass('show-alert');
    }, 1);

    //Disappear automatically   
    disappear = setTimeout(function () {
        hideAlert();
    }, 5000);

    //Btn close
    $('.btn-close').on('click', function () {
        hideAlert();
    });
}

function hideAlert() {
    $('.alert').removeClass('show-alert');

    //Wait 1 second to remove
    setTimeout(function () {
        $('.alert').remove();
    }, 1000);
}

function removeExisting(alert) {
    hideAlert();

    setTimeout(function () {
        showAlert(alert);
    }, 1000);
}