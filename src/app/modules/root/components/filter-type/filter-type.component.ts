import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter-type',
  templateUrl: './filter-type.component.html',
  styleUrls: ['./filter-type.component.css']
})
export class FilterTypeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

// idividual filtertypes. One for strings and one for numbers
//  Should have the ability to cycle through types or have a greater than
//  less than number. Probably make both of these drop downs