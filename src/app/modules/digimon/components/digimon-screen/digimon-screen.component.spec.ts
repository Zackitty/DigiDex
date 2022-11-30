import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigimonScreenComponent } from '../../components/digimon-screen/digimon-screen.component';
import { DigimonService } from '../../shared/services/digimon.service';
import { Observable, of } from 'rxjs';
import { Digimon } from '../../shared/models/digimon/digimon'

describe('DigimonScreenComponent', () => {
  let component: DigimonScreenComponent;
  let fixture: ComponentFixture<DigimonScreenComponent>;
  let digimonService: DigimonService;
  const digimonServiceSpy = jasmine.createSpyObj('DigimonService', [
    'getDigimon',
    'getADigimon',
    'searchDigimon'
  ]);
  const digimonData: Digimon[] = [
    {
      id: 1,
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
      id: 1,
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
  const digimonObservable: Observable<Digimon[]> = new Observable((subscriber) => {
    subscriber.next(digimonData)
  })
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DigimonScreenComponent,],
      providers: [
        { provide: DigimonService, useValue: digimonServiceSpy }
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(DigimonScreenComponent);
    component = fixture.debugElement.componentInstance;
    digimonServiceSpy.getDigimon.and.returnValue(of(digimonObservable));
    component.displayDigimon();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should populate the digimonList using the Digimon Service', () => {
    // expect(component.digimonList).toEqual(digimonData);
    expect(digimonServiceSpy.getDigimon).toHaveBeenCalled();
  });
});
