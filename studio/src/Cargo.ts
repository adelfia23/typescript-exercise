import { Payload } from './Payload';
export class Cargo implements Payload {
    private _massKg: number;
    private _material: string;

    constructor(massKg: number, material: string) {
        this.massKg = massKg;
        this.material = material;
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

    get material() {
        return this._material;
    }

    set material(value: string) {
        if (value !== "") {
            this._material = value;
        } else {
            throw new Error('Please insert a valid material')
        }
    }
}