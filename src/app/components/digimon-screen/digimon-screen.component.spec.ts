import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigimonScreenComponent } from '../../components/digimon-screen/digimon-screen.component';
import { DigimonService } from '../../services/digimon.service';
import { of } from 'rxjs';
import { Digimon } from '../../models/digimon/digimon'

describe('DigimonScreenComponent', () => {
  let component: DigimonScreenComponent;
  let fixture: ComponentFixture<DigimonScreenComponent>;
  let digimonService: DigimonService;
  const digimonData: Digimon[] = [
    {
      number: 1,
      name: "Kuramon",
      attribute: "Neutral",
      type: "Free",
      stage: "Baby",
      memory: 2,
      img: "https://64.media.tumblr.com/afb67fb5cfd8d6b37cb1716cc62fb435/08882f5e70308cb7-c3/s540x810/f75a120ab49b7f8954bae3c4da5db8daa616a642.jpg",
      equipSlots: 0,
      lv50HP: 590,
      lv50SP: 77,
      lv50Atk: 79,
      lv50Def: 69,
      lv50Int: 68,
      lv50Spd: 95
  },
  {
      number: 2,
      name: "Pabumon",
      attribute: "Neutral",
      type: "Free",
      stage: "Baby",
      memory: 2,
      img: "https://digimon.shadowsmith.com/img/pabumon.jpg",
      equipSlots: 0,
      lv50HP: 950,
      lv50SP: 62,
      lv50Atk: 76,
      lv50Def: 76,
      lv50Int: 69,
      lv50Spd: 68
  }
    ]
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DigimonScreenComponent,],
      providers: [{
        provide: DigimonService,
        useValue: {
          getDigimon: () => of(digimonData)
        }
      }]
    })
      .compileComponents();

    fixture = TestBed.createComponent(DigimonScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have have digimon from service in component', () => {

    fixture.detectChanges();

    expect(component.digimonList).toEqual(digimonData);

  });
});
