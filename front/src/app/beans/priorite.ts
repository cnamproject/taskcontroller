export class Priorite {

    objectKeys = Object.keys;
    id_priorite: string;
    valeur: string;


    constructor(init?: Partial<Priorite>) {
        Object.assign(this, init);
    }



    getValue(key) {
        console.log(key)
        return Object.values(key);
    }
}