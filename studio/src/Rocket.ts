import { Payload } from './Payload.js';
import { Astronaut } from './Astronaut.js';
import { Cargo } from './Cargo.js';
export class Rocket {
    private _name: string;
    private _totalCapacityKg: number;
    public cargoItems: Cargo[] = [];
    public astronauts: Astronaut[] = [];


    constructor(name: string, totalCapacityKg: number) {
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }

    get name() {
        return this._name;
    }

    set name(value: string) {
        if (value !== "") {
            this._name = value;
        } else {
            throw new Error('Please insert a valid name')
        }
    }

    get totalCapacityKg() {
        return this._totalCapacityKg;
    }

    set totalCapacityKg(value: number) {
        if (value > 0) {
            this._totalCapacityKg = value;
        } else {
            throw new Error('Please insert a valid capacity')
        }
    }

    sumMass(items: Payload[]): number {
        const sum: number = items.reduce(
            (acc: number, item: Payload) => acc + item.massKg,
            0
          );
        return sum;
    }

    currentMassKg(): number {

        const sumAstronauts: number = this.astronauts.reduce(
            (acc: number, astronaut: Astronaut) => acc + astronaut.massKg,
            0
          );

        const cargoItems: number = this.cargoItems.reduce(
        (acc: number, cargoItem: Cargo) => acc + cargoItem.massKg,
        0
        );

        return sumAstronauts + cargoItems;
    }

    canAdd(item: Payload): boolean {
        if (this.currentMassKg() + item.massKg <= this.totalCapacityKg) {
            return true;
        } else {
            return false;
        }
    }

    addCargo(cargo: Cargo): boolean {
        
        if (this.canAdd(cargo) === true) {
            this.cargoItems.push(cargo);
            return true;
        } else {
            return false;
        }
    }

    addAstronaut(astronaut: Astronaut): boolean {
        if (this.canAdd(astronaut) === true) {
            this.astronauts.push(astronaut);
            return true;
        } else {
            return false;
        }
    }

}