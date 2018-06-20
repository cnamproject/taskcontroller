export class Disponibilite {

    heureDebutDispo: string;
    heureDebutPause: string;
    heureFinPause: string;
    heureFinDispo: string;

    constructor(init?: Partial<Disponibilite>) {
        Object.assign(this, init);
    }
}