export class Type {


    id_type: string;
    libelle: string;

    constructor(init?: Partial<Type>) {
        Object.assign(this, init);
    }
}