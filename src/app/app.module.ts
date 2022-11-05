import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DigimonScreenComponent } from './components/digimon-screen/digimon-screen.component';
import { DigimonDetailsComponent } from './components/digimon-details/digimon-details.component';


@NgModule({
  declarations: [
    AppComponent,
    DigimonScreenComponent,
    DigimonDetailsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  exports: [
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
