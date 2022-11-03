import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Digimon } from './digimon';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DigimonService {
  digimon: Digimon[] = [];
  console: any;

  constructor(private http: HttpClient) { }


  getDigimon(): Observable<Digimon[]> {
    return this.http.get<Digimon[]>('assets/digimonList.json').pipe(map(digimon => {
          return (
            Number: digimon.Number,
            Digimon: digimon.Digimon,
            Stage: digimon.Stage,
            Type: digimon.Type,
            Attribute: digimon.Attribute,
            Memory: digimon.Memory,
            EquipSlots: digimon.EquipSlots,
            Lv50HP: digimon.Lv50HP,
            Lv50SP: digimon.Lv50SP,
            Lv50Atk: digimon.Lv50Atk,
            Lv50Def: digimon.Lv50Def,
            Lv50Int: digimon.Lv50Int,
            Lv50Spd: digimon.Lv50Spd,
            img: digimon.img
          )
    }))
  }

  displayDigimon() {
    console.log(this.console)
  }
}
