import { Component, OnInit } from '@angular/core';
import { RoutesConfig } from '../configs/routes.config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'DigiDex';

  ngOnInit(): void {
    console.log(RoutesConfig)
  }

  constructor(){

  }

}
