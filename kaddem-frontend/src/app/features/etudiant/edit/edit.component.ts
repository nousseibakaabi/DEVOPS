import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EtudiantService } from 'src/app/services/etudiant.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit{



  etudiantForm: FormGroup;
  options = Object.values(Option);
  etudiantId!: number;

  constructor(
    private fb: FormBuilder,
    private etudiantService: EtudiantService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.etudiantForm = this.fb.group({
      idEtudiant: [''],
      nomE: ['', Validators.required],
      prenomE: ['', Validators.required],
      op: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.etudiantId = +this.route.snapshot.params['id'];
    this.etudiantService.getEtudiantById(this.etudiantId).subscribe({
      next: (etudiant) => this.etudiantForm.patchValue(etudiant),
      error: (err) => console.error('Error fetching student:', err)
    });
  }

  onSubmit(): void {
    if (this.etudiantForm.valid) {
      this.etudiantService.updateEtudiant(this.etudiantForm.value).subscribe({
        next: () => this.router.navigate(['/etudiants']),
        error: (err) => console.error('Error updating student:', err)
      });
    }
  }


  navigateToEtudiants() {
    this.router.navigate(['/etudiants']);}

}
