import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EtudiantService } from 'src/app/services/etudiant.service';

@Component({
  selector: 'app-etudiant-form',
  templateUrl: './etudiant-form.component.html',
  styleUrls: ['./etudiant-form.component.css']
})
export class EtudiantFormComponent implements OnInit{





  etudiantForm: FormGroup;
  options = Object.values(Option); // Import Option from your model

  constructor(
    private fb: FormBuilder,
    private etudiantService: EtudiantService,
    private router: Router
  ) {
    this.etudiantForm = this.fb.group({
      nomE: ['', Validators.required],
      prenomE: ['', Validators.required],
      op: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.etudiantForm.valid) {
      this.etudiantService.addEtudiant(this.etudiantForm.value).subscribe({
        next: () => this.router.navigate(['/etudiants']),
        error: (err) => console.error('Error adding student:', err)
      });
    }
  }


  navigateToEtudiants() {
    this.router.navigate(['/etudiants']);}

}
