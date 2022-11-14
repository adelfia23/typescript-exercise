export class Astronaut {
    constructor(massKg, name) {
        this.name = name;
        this.massKg = massKg;
    }
    get massKg() {
        return this._massKg;
    }
    set massKg(value) {
        if (value > 0) {
            this._massKg = value;
        }
        else {
            throw new Error('Please insert a valid weight');
        }
    }
    get name() {
        return this._name;
    }
    set name(value) {
        if (value !== "") {
            this._name = value;
        }
        else {
            throw new Error('Please insert a valid name');
        }
    }
}
//# sourceMappingURL=Astronaut.js.map