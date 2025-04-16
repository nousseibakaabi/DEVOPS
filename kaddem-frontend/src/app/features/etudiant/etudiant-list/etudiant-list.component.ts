import { Component, OnInit } from '@angular/core';
import { EtudiantService } from '../../../services/etudiant.service';
import { Etudiant } from '../../../models/etudiant';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-etudiant-list',
  templateUrl: './etudiant-list.component.html',
  styleUrls: ['./etudiant-list.component.css']
})

export class EtudiantListComponent implements OnInit {
  etudiants: Etudiant[] = [];
  filteredEtudiants: Etudiant[] = [];
  searchTerm = '';

  constructor(private etudiantService: EtudiantService,     public router: Router
  ) { }

  ngOnInit(): void {
    this.loadEtudiants();
  }



  loadEtudiants(): void {
    this.etudiantService.getAllEtudiants().subscribe({
      next: (data) => {
        this.etudiants = data;
        this.filteredEtudiants = data;
      },
      error: (err) => {
        console.error('Failed to load students:', err);
      }
    });
  }

  search(): void {
    this.filteredEtudiants = this.etudiants.filter(e => 
      e.nomE.toLowerCase().includes(this.searchTerm.toLowerCase()) || 
      e.prenomE.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  deleteEtudiant(id: number): void {
    if (confirm('Are you sure you want to delete this student?')) {
      this.etudiantService.deleteEtudiant(id).subscribe(() => {
        this.loadEtudiants();
      });
    }
  }

  navigateToAdd() {
    this.router.navigate(['/add']);}
}