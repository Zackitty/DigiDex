import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';
import { Digimon } from './modules/digimon/shared/models/digimon/digimon';
import {digimonxdigimon } from '../resources/somethin'
@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  error: any;
  digimonList: Digimon[] = [];
  constructor(){}

  




  createDb() {
    const digimon = digimonxdigimon;
  
    return {digimon};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(digimon: Digimon[]): number {
    return digimon.length > 0 ? Math.max(...digimon.map(digimon => digimon.number)) + 1 : 11;
  }
}