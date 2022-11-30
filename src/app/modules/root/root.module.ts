import { NgModule } from '@angular/core';
import { DigimonModule } from '../../modules/digimon/digimon.module';

import { Error404PageComponent } from './pages/error404-page/error404-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { DigiviceComponent } from './components/digivice/digivice.component';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { FiltersComponent } from './components/filters/filters.component';
import { FilterTypeComponent } from './components/filter-type/filter-type.component';
import { FilterDropdownComponent } from './components/filter-dropdown/filter-dropdown.component';
import { CommonModule } from '@angular/common';
import { RootRoutingModule } from './root-routing.module';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from 'src/app/in-memory-data.service';


@NgModule({
  declarations: [
    HomePageComponent,
    Error404PageComponent,
    DigiviceComponent,
    SearchbarComponent,
    FiltersComponent,
    FilterTypeComponent,
    FilterDropdownComponent
  ],
  imports: [
    DigimonModule,
    RootRoutingModule,
    CommonModule
  ],
  exports: [
    HomePageComponent,
    Error404PageComponent,
    DigiviceComponent,
    SearchbarComponent,
    FiltersComponent,
    FilterTypeComponent,
    FilterDropdownComponent,
  ]
})
export class RootModule { }
