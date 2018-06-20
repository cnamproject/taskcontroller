export class commentaire {
    id_commentaire : string;
    text: string;
    date: string;
    isRapportCloture: string;
    
  
    constructor(init?: Partial<commentaire>) {
      Object.assign(this, init);
  }
  }