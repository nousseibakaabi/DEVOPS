import { Etudiant } from './etudiant';

export interface Departement {
  idDepart: number;
  nomDepart: string;
  etudiants?: Etudiant[];
}