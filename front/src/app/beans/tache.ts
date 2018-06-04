export class tache {
  id_tache: string;
  libelle: string;
  description: string;
  tempsEstime: string;
  isFixe: boolean;
  jourFixe: number;
  heureFixeDebut: string;
  heureFixeFin: string;
  date: string;
  heureDebut: string;
  heureFin: string;
  idType: string;
  idPriorite: string;
  idUtilisateur: string;

  constructor(init?: Partial<tache>) {
    Object.assign(this, init);
}
}