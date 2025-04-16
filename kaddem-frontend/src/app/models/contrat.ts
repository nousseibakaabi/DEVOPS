import { Specialite } from './specialite.enum';
import { Etudiant } from './etudiant';

export interface Contrat {
  idContrat: number;
  dateDebutContrat: Date | string;
  dateFinContrat: Date | string;
  specialite: Specialite;
  archive: boolean;
  montantContrat: number;
  etudiant?: Etudiant;
}