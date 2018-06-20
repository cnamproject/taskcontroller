export class utilisateur {
    id_utilisateur: string;
    nom: string;
    prenom: string;
    adresseMail: string;
    motDePasse: string;
    
  
    constructor(init?: Partial<utilisateur>) {
      Object.assign(this, init);
  }
  }