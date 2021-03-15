import Card from './card.js';
import {SuccessAlert, ErrorAlert} from './alert.js';
import {Spinner, RemoveSpinner} from './spinner.js';
import RenderIndex from './renderIndex.js';
import RenderMain from './renderMain.js';

export default class Components {
    static ToggleOverlay () {
        if($('.noclick').length !== 0) {
            $('.noclick').remove();
            return;
        }

        const overlay = `<div class="noclick transparent"></div>`;
        $('body').append(overlay);
    };

    static GetCard(json) {
        return Card(json);
    }

    /**
     * Renders an Success Alert 
     * @param {Custom message to show on the alert} message
     */
    static GetSuccessAlert(message) {
        SuccessAlert(message);
    }

    /**
     * Renders an Error Alert 
     * @param {Custom message to show on the alert} message
     */
    static GetErrorAlert(message) {
        ErrorAlert(message);
    }

    /**
     * Renders a Spinner Element
     * @param {Id of DOM element to append the spinner} id 
     */
    static GetSpinner(id) {
        Spinner(id);
    }

    /**
     * Removes a Spinner Element
     * @param {Id of DOM element to remove the spinner from} id 
     */
    static RemoveSpinner(id) {
        RemoveSpinner(id);
    }

    /**
     * Renders Index HTML Content
     */
    static RenderIndex() {
        RenderIndex();
        console.log('render')
    }
}