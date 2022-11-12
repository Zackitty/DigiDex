import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

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
    CommonModule
  ],
  exports: [
    DigimonScreenComponent
  ]
})
export class DigimonModule { }
