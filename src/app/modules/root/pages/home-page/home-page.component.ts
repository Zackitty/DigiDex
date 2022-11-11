import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

//  This should hold the entire page. It's a single page Application
//  So it should oonly switch this page in case of error and this should
//  hold all components and routes. I'll see how architecture works
//  But any urls should probably be based off this home one.
// Might also look because I feel like maybe this should be hire leveled
//  and I think shared means it's used on multiple pages instead of
// it uses multiple pages but that's a simple architecure fix and i
//  look into directory setup baest practices so I can always change
//  that around after everything's fixed and working