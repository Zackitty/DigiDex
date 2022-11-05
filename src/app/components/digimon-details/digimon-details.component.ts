import { Component, Input, OnInit } from '@angular/core';
import { Digimon } from 'src/app/models/digimon/digimon';

@Component({
  selector: 'app-digimon-details',
  templateUrl: './digimon-details.component.html',
  styleUrls: ['./digimon-details.component.css']
})
export class DigimonDetailsComponent implements OnInit {
  @Input() digimon?: Digimon;
  
  constructor() { }

  ngOnInit(): void {
  }

}
