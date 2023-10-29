export class Enemy {
    #name;
    #description;
    #stats;
    #abilities;
    #responses;

    constructor(name, description, stats, abilities, responses) {
        this.name = name;
        this.description = description;
        this.stats = stats;
        this.abilities = abilities;
        this.responses = responses;
    }

    getName() {
        return this.name;
    }

    getDescription() {
        return this.description;
    }

    getStats() {
        return this.stats;
    }

    getAbilities() {
        return this.abilities;
    }

    getResponses() {
        return this.responses;
    }
}