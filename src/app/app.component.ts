import { Component } from '@angular/core';
import { DigimonService } from './digimon.service';
import { Digimon } from './digimon';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DigiDex';

  constructor(
    private digimonService: DigimonService
  ){

  }

  displayDigimon(){
    this.digimonService.getDigimon()
    .subscribe((resp: Digimon[])=> {
      console.log(resp)
    })
  }

}
