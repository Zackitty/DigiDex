import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigimonDetailsComponent } from './digimon-details.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('DigimonDetailsComponent', () => {
  let component: DigimonDetailsComponent;
  let fixture: ComponentFixture<DigimonDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DigimonDetailsComponent ],
      imports: [ HttpClientTestingModule ]

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
