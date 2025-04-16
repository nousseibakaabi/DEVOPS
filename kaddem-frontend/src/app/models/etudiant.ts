import { Option } from './option.enum';
import { Contrat } from './contrat';
import { Departement } from './departement';
import { Equipe } from './equipe';

export interface Etudiant {
  idEtudiant: number;
  nomE: string;
  prenomE: string;
  op: Option;
  contrats?: Contrat[];
  departement?: Departement;
  equipes?: Equipe[];
}