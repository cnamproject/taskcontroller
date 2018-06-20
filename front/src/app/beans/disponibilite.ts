export class disponibilite {
    id_disponibilite: string;
    jour: string;
    heureDebutDispo: string;
    heureFinDispo: string;
    heureDebutPause: string;
    heureFinPause: string;
    
  
    constructor(init?: Partial<disponibilite>) {
      Object.assign(this, init);
  }
  }
