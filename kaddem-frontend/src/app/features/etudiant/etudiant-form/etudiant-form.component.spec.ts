import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtudiantFormComponent } from './etudiant-form.component';

describe('EtudiantFormComponent', () => {
  let component: EtudiantFormComponent;
  let fixture: ComponentFixture<EtudiantFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EtudiantFormComponent]
    });
    fixture = TestBed.createComponent(EtudiantFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
