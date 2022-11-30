import { TestBed } from '@angular/core/testing';

import { DigimonService } from './digimon.service';
import { Digimon } from '../models/digimon/digimon';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('DigimonService', () => {
  let service: DigimonService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule 
      ]
    });
    service = TestBed.inject(DigimonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('it should return json values matching interface values', () => {
    let digimonError = [{
      "Number": 1,
      "Digimon": "Kuramon",
      "Stage": "Baby",
      "Type": "Free",
      "Attribute": "Neutral",
      "Memory": 2,
      "EquipSlots": 0,
      "Lv50HP": 590,
      "Lv50SP": 77,
      "Lv50Atk": 79,
      "Lv50Def": 69,
      "Lv50Int": 68,
      "Lv50Spd": 95,
      "img": "https://64.media.tumblr.com/afb67fb5cfd8d6b37cb1716cc62fb435/08882f5e70308cb7-c3/s540x810/f75a120ab49b7f8954bae3c4da5db8daa616a642.jpg"
    }]
    let digimonPositive = [{
      "Number": 1,
      "Digimon": "Kuramon",
      "Stage": "Baby",
      "Type": "Free",
      "Attribute": "Neutral",
      "Memory": 2,
      "EquipSlots": 0,
      "Lv50HP": 590,
      "Lv50SP": 77,
      "Lv50Atk": 79,
      "Lv50Def": 69,
      "Lv50Int": 68,
      "Lv50Spd": 95,
      "img": "https://64.media.tumblr.com/afb67fb5cfd8d6b37cb1716cc62fb435/08882f5e70308cb7-c3/s540x810/f75a120ab49b7f8954bae3c4da5db8daa616a642.jpg"
    }]


  });
});
