import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Etudiant } from 'src/app/models/etudiant';
import { EtudiantService } from 'src/app/services/etudiant.service';

@Component({
  selector: 'app-etudiant-details',
  templateUrl: './etudiant-details.component.html',
  styleUrls: ['./etudiant-details.component.css']
})
export class EtudiantDetailsComponent implements OnInit {
  etudiant!: Etudiant;

  constructor(
    private etudiantService: EtudiantService,
    private route: ActivatedRoute,
    public router: Router
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.params['id'];
    this.etudiantService.getEtudiantById(id).subscribe({
      next: (data) => this.etudiant = data,
      error: (err) => console.error('Error fetching student details:', err)
    });
  }

  goBack(): void {
    this.router.navigate(['/etudiants']);
  }

}
