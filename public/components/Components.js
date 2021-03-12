import Card from './card.js';
import {SuccessAlert, ErrorAlert} from './alert.js';

export default class Components {
    static GetCard(json) {
        return Card(json);
    };

    static GetSuccessAlert(message) {
        return SuccessAlert(message);
    }

    static GetErrorAlert(message) {
        return ErrorAlert(message);
    }
}