import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtudiantDetailsComponent } from './etudiant-details.component';

describe('EtudiantDetailsComponent', () => {
  let component: EtudiantDetailsComponent;
  let fixture: ComponentFixture<EtudiantDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EtudiantDetailsComponent]
    });
    fixture = TestBed.createComponent(EtudiantDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
