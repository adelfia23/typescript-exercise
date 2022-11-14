export class Rocket {
    constructor(name, totalCapacityKg) {
        this.cargoItems = [];
        this.astronauts = [];
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
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
    get totalCapacityKg() {
        return this._totalCapacityKg;
    }
    set totalCapacityKg(value) {
        if (value > 0) {
            this._totalCapacityKg = value;
        }
        else {
            throw new Error('Please insert a valid capacity');
        }
    }
    sumMass(items) {
        const sum = items.reduce((acc, item) => acc + item.massKg, 0);
        return sum;
    }
    currentMassKg() {
        const sumAstronauts = this.astronauts.reduce((acc, astronaut) => acc + astronaut.massKg, 0);
        const cargoItems = this.cargoItems.reduce((acc, cargoItem) => acc + cargoItem.massKg, 0);
        return sumAstronauts + cargoItems;
    }
    canAdd(item) {
        if (this.currentMassKg() + item.massKg <= this.totalCapacityKg) {
            return true;
        }
        else {
            return false;
        }
    }
    addCargo(cargo) {
        if (this.canAdd(cargo) === true) {
            this.cargoItems.push(cargo);
            return true;
        }
        else {
            return false;
        }
    }
    addAstronaut(astronaut) {
        if (this.canAdd(astronaut) === true) {
            this.astronauts.push(astronaut);
            return true;
        }
        else {
            return false;
        }
    }
}
//# sourceMappingURL=Rocket.js.map