import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EtudiantDetailsComponent } from './features/etudiant/etudiant-details/etudiant-details.component';
import { EtudiantFormComponent } from './features/etudiant/etudiant-form/etudiant-form.component';
import { EtudiantListComponent } from './features/etudiant/etudiant-list/etudiant-list.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddContratComponent } from './features/contart/add-contrat/add-contrat.component';
import { HttpClientModule } from '@angular/common/http';
import { EditComponent } from './features/etudiant/edit/edit.component';

@NgModule({
  declarations: [
    AppComponent,
    EtudiantListComponent,
    EtudiantFormComponent,
    EtudiantDetailsComponent,
    AddContratComponent,
    EditComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
