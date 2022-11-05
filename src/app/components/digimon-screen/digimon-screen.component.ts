import { Component, OnInit, Input } from '@angular/core';
import { DigimonService } from '../../services/digimon.service';
import { Digimon } from 'src/app/models/digimon/digimon';

@Component({
  selector: 'app-digimon-screen',
  templateUrl: './digimon-screen.component.html',
  styleUrls: ['./digimon-screen.component.css']
})
export class DigimonScreenComponent implements OnInit{
  error: any;
  digimonList: Digimon[] = [];

  constructor(private digimonService: DigimonService) {
  }

  ngOnInit(): void {
    this.displayDigimon()
  }

  displayDigimon() {
    this.digimonService.getDigimon()
      .subscribe({
        next: (resp: Digimon[]) => this.digimonList = resp,
        error: error => this.error = error,
      });

  }

}
