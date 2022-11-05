import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Digimon } from '../models/digimon/digimon';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class DigimonService {

  constructor(private http: HttpClient) { }


  getDigimon(): Observable<Digimon[]> {
    return this.http.get<Digimon[]>('assets/digimonList.json');
  }
}
