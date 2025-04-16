import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EtudiantListComponent } from './features/etudiant/etudiant-list/etudiant-list.component';
import { EtudiantFormComponent } from './features/etudiant/etudiant-form/etudiant-form.component';
import { EditComponent } from './features/etudiant/edit/edit.component';
import { EtudiantDetailsComponent } from './features/etudiant/etudiant-details/etudiant-details.component';

const routes: Routes = [
  { path: 'etudiants', component: EtudiantListComponent },
  { path: '', redirectTo: '/etudiants', pathMatch: 'full' },
  { path: 'add', component : EtudiantFormComponent },
  { path: 'edit/:id', component : EditComponent },
  { path: 'details/:id', component : EtudiantDetailsComponent },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
