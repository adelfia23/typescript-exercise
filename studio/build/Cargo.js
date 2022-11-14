export class Cargo {
    constructor(massKg, material) {
        this.massKg = massKg;
        this.material = material;
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
    get material() {
        return this._material;
    }
    set material(value) {
        if (value !== "") {
            this._material = value;
        }
        else {
            throw new Error('Please insert a valid material');
        }
    }
}
//# sourceMappingURL=Cargo.js.map