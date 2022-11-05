import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigimonDetailsComponent } from './digimon-details.component';

describe('DigimonDetailsComponent', () => {
  let component: DigimonDetailsComponent;
  let fixture: ComponentFixture<DigimonDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DigimonDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DigimonDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
