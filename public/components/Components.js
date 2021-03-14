import Card from './card.js';
import {SuccessAlert, ErrorAlert} from './alert.js';
import {Spinner, RemoveSpinner} from './spinner.js';

export default class Components {
    static ToggleOverlay () {
        if($('.noclick').length !== 0) {
            $('.noclick').remove();
            return;
        }

        const overlay = `<div class="noclick"></div>`;
        $('body').append(overlay);
    };

    static GetCard(json) {
        return Card(json);
    }

    static GetSuccessAlert(message) {
        SuccessAlert(message);
    }

    static GetErrorAlert(message) {
        ErrorAlert(message);
    }

    static GetSpinner(id) {
        Spinner(id);
    }

    static RemoveSpinner(id) {
        RemoveSpinner(id);
    }
}