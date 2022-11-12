import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { DigimonService } from '../../shared/services/digimon.service';
import { Digimon } from '../../shared/models/digimon/digimon'
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-digimon-screen',
  templateUrl: './digimon-screen.component.html',
  styleUrls: ['./digimon-screen.component.css']
})
export class DigimonScreenComponent implements OnInit {
  error: any;
  digimonList: Digimon[] = [];
  digimonNumber?: Number;
  constructor(
    private digimonService: DigimonService, 
    private route: ActivatedRoute,
    private location: Location) {
  }

  ngOnInit(): void {
    this.displayDigimon()
  } 

  displayDigimon() {
    this.digimonService.getDigimon()
      .subscribe({
        next: (digimon: Digimon[]) => this.digimonList = digimon,
        error: error => this.error = error,
      });
  }

  assignDigimon(number: number): void {
    this.digimonService.getADigimon(number)
    .subscribe({
      next: (digimon: Digimon) => this.digimonList = [digimon],
      error: error => this.error = error,
    })
  }
}

//  This is the actual list of all the digimon that can be selected
//  This will be filtered by searches, and filters