import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DigimonDetailsComponent } from './components/digimon-details/digimon-details.component';

const digimonRoutes: Routes = [
  { path: 'detail', component: DigimonDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(digimonRoutes)],
  exports: [RouterModule]
})
export class DigimonRoutingModule { }
