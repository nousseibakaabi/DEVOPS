import { Niveau } from './niveau.enum';
import { Etudiant } from './etudiant';
import { DetailEquipe } from './detail-equipe';

export interface Equipe {
  idEquipe: number;
  nomEquipe: string;
  niveau: Niveau;
  etudiants?: Etudiant[];
  detailEquipe?: DetailEquipe;
}