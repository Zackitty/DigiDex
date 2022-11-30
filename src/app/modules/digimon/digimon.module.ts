import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CardModule} from 'primeng/card';

import { DigimonDetailsComponent } from './components/digimon-details/digimon-details.component';
import { DigimonScreenComponent } from './components/digimon-screen/digimon-screen.component';
import { DigimonRoutingModule } from './digimon-routing.module';


@NgModule({
  declarations: [
    DigimonDetailsComponent,
    DigimonScreenComponent
  ],
  imports: [
    DigimonRoutingModule, 
    CommonModule,
    CardModule
  ],
  exports: [
    DigimonScreenComponent
  ]
})
export class DigimonModule { }
