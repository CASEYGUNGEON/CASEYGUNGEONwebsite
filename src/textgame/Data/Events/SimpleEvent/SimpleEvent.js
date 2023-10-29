import { Event } from '../../../Objects/Event';

export class SimpleEvent extends Event {

    getDescription() {
        var output = this.description;
        if ('extraDesc' in this.data) {
            output += this.data['extraDesc'];
        }
        return output;
    }

    clearExtraDesc() {
        this.data['extraDesc'] = '';
    }

    addExtraDesc(str) {
        this.data['extraDesc'] +=  '\n' + str;
    }

    replaceExtraDesc(str) {
        this.data['extraDesc'] = '\n' + str;
    }

    display(stateArr) {
        return this.description + this.data['extraDesc'];
    }
}