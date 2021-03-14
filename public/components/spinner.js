export function Spinner(id) {
    const spinner = `<span class="spinner-border spinner-border-sm mx-1" role="status" aria-hidden="true"></span>`;

    $('#' + id).prepend(spinner);
}

export function RemoveSpinner(id) {
    $(`#${id} span`).remove();
}