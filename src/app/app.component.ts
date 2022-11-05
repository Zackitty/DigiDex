import { Component } from '@angular/core';
import { DigimonService } from './services/digimon.service';
import { DigimonScreenComponent } from './components/digimon-screen/digimon-screen.component';

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

}
