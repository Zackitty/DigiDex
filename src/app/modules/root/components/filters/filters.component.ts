import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

// should be a list of filters you can use

// will look into the architecture later 
// 



// i know my work style is do it then worry about cleanup later. 
// I'm kinda trying to decide if I should start now being preemptive? 
// i feel like the way i'm structuing this app may not be thest best, 
// But i'm also thinking maybe I should learn everythign else then get to 
// the best practices there. like technically the filters are a shared at 
// the root thing I'm implmenting but so is the screen so why is the 
// screen in the digimon portion when the filters not when they directly 
// affect which digimon will be seen at all times. I dunno as it grows 
// and i gamifiy it maybe i'll need to more closely couple them or 
// perhaps not because i want to be able to use the digimon service to 
// always have info on a digimon? I dunno definitely something to think about

// like the weird thing is that a lot of the structure and best practice lessons won't come in til way
//  later so it's kinda like why worry now anyway. I'm just worried that 
// i'm not breaking bad habits by just trying to get through this all 
// quickly without thinking ahead and learning it all

// but either way due to the growth of my app I should focus on decoupling
// the ability to pick one digimon and filtering so depending how the
//  app grows i can reuse those services in picking digimon, picking
// digimon teams for the user, ect.