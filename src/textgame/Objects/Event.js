import { ButtonGrid } from '../Components';

export class Event {
    #name;
    #description;
    #actions;
    #data;
    #loaded;

    constructor(name, description, actions, data) {
        this.name = name;
        this.description = description;
        this.actions = actions;
        this.data = data;
        this.loaded = false;
    }

    componentDidUpdate(prevState, prevProps) {
        this.loaded = true;
    }

    getName() {
        return this.name;
    }

    getDescription() {
        return this.description;
    }

    getActions() {
        return this.actions;
    }

    getResponse(action) {
        return this.actions[action];
    }

    getdata() {
        return this.data;
    }

    getDatum(datum) {
		if(this.data[datum])
			return this.data[datum];
        return null;
    }

    setDatum(key, val) {
        this.data[key] = val;
    }

    display(statearr) {
        return (
            <div>
                {this.getDescription()}
                <ButtonGrid buttonWidth="100" buttonHeight="10" width="40vw" rows={1} statearr={statearr} type="eventAction" options={this.getActions()} />
            </div>);
    }
}