import { Event } from 'textgame/Objects/Event.js';

export class Combat extends Event {
    #enemy;

    constructor(name, description, enemy, actions, data) {
        this.name = name;
        this.description = description;
        this.enemy = enemy;
        this.actions = actions;
        this.data = data;
    }
}