import { Payload } from './Payload.js';
export class Astronaut implements Payload {
    private _massKg: number;
    private _name: string;

    constructor(massKg: number, name: string) {
        this.name = name;
        this.massKg = massKg;
    }

    get massKg() {
        return this._massKg;
    }

    set massKg(value: number) {
        if (value > 0) {
            this._massKg = value;
        } else {
            throw new Error('Please insert a valid weight')
        }
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
}