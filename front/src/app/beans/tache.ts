export class tache {
  id_tache: string = '';
  libelle: string = '';
  description: string = '';
  tempsEstime: string = '';
  isFixe: boolean = false;
  jourFixe: string = '';
  heureFixeDebut: string = '';
  heureFixeFin: string = '';
  date: string = '';
  heureDebut: string = '';
  heureFin: string = '';
  idType: string = '';
  idPriorite: string = '';
  idUtilisateur: string = '';
  dateAjout: string = '';
  heureAjout: string = '';
  estAlerteMail: boolean = false;
  estTermine: boolean = false;

  constructor(init?: Partial<tache>) {
    Object.assign(this, init);
}
}