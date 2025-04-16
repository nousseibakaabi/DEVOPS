import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { Etudiant } from '../models/etudiant';


@Injectable({
  providedIn: 'root'
})
export class EtudiantService {
  // private apiUrl = 'http://localhost:8089/kaddem/etudiant';

  private apiUrl ='/kaddem/etudiant';

  constructor(private http: HttpClient) { }



  getAllEtudiants(): Observable<Etudiant[]> {
    return this.http.get<Etudiant[]>(`${this.apiUrl}/retrieve-all-etudiants`)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          console.error('API Error:', error);
          return throwError('Something went wrong; please try again later.');
        })
      );
  }

  getEtudiantById(id: number): Observable<Etudiant> {
    return this.http.get<Etudiant>(`${this.apiUrl}/retrieve-etudiant/${id}`);
  }

  addEtudiant(etudiant: Etudiant): Observable<Etudiant> {
    return this.http.post<Etudiant>(`${this.apiUrl}/add-etudiant`, etudiant);
  }

  updateEtudiant(etudiant: Etudiant): Observable<Etudiant> {
    return this.http.put<Etudiant>(`${this.apiUrl}/update-etudiant`, etudiant);
  }

  deleteEtudiant(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/remove-etudiant/${id}`);
  }

  assignToDepartement(etudiantId: number, departementId: number): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/affecter-etudiant-departement/${etudiantId}/${departementId}`, {});
  }

  addWithAssignment(etudiant: Etudiant, contratId: number, equipeId: number): Observable<Etudiant> {
    return this.http.post<Etudiant>(`${this.apiUrl}/add-assign-Etudiant/${contratId}/${equipeId}`, etudiant);
  }

  getByDepartement(departementId: number): Observable<Etudiant[]> {
    return this.http.get<Etudiant[]>(`${this.apiUrl}/getEtudiantsByDepartement/${departementId}`);
  }
}