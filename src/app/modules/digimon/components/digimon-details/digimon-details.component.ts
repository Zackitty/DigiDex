import { Component, Input, OnInit } from '@angular/core';
import { Digimon } from '../../shared/models/digimon/digimon';
import { Output, EventEmitter } from '@angular/core';
import { DigimonService } from '../../shared/services/digimon.service';



@Component({
  selector: 'app-digimon-details',
  templateUrl: './digimon-details.component.html',
  styleUrls: ['./digimon-details.component.css']
})
export class DigimonDetailsComponent implements OnInit {
  error: any;
  @Input() 
  digimon?: Digimon;
  @Output()
  public assignDigimon = new EventEmitter<number>();

  constructor(private digimonService: DigimonService) { }

  ngOnInit(): void {

  };
  
  callAssignDigimon(number:number){
    this.assignDigimon.emit(number)
  }
}


// it's good i'm writing all this down cause i can look at it later 
// and use this as a response for trials i faced and how i improved 
// things. and you know when my brain is not as high function i can
// look at this and remember. but either way this is good.
// This will be each digimon, but if bubbled up and clicked by parent
// then it will show more information and be just that digimon
// the implmentation of assigndigimon works fine for now but
// eventually i think holding all those digimon in an array isn't
// super performant and i should probably make a call to the state
// or the store or change the service from here maybe? i dont
// know if it quite works that way since the digimon component
// holds the actual digimon, i'll have to see but maybe just
// just solve everything by holding it in the store but then again
// that's not great for a growing list but at some point we either
// either go and call all the server at once for say filtering options
// or we load from the front and do our filtering there but i should
// check if that's sound with business logic, like should logic
// mainly be handled in the back and we just make calls or should
// i just handle it here and that's fine. I should check best practices
//  for where to handle this kinda of logic as well as where to hold
// the entire database.  Perhaps just digimon on their team shoould
// be consulted? Or maybe the store could do a little of both holding
// some kind of information of is it all the digimom, just some in case
// of filtering, or just one in case of a click? Maybe just hold a state
// that decides what kind of call to the database we're making?
// or perhaps look into graphql to see if it just handles what i'm wanting
// to do anyway?

// had another problem now where it only changes state on a double click
// so this is a great chance for me to figure out more about state
// management because it looks to be because I'm changing two states
// at once so it only fires the second after

// ok so like you can't do async await on subscribe because it's chained off the
// observable and not necessarily the method itself if I udnerstand right. I'll
// definitely look into all the parts and pieces later. Anyway so there's no
// no way to make it synchornous on its own or at least the call is. Anyway
// later we for sure can but i don't have time i need to study for the interview
// but after that i'll look into it in more depth just to make sure i completely
// understand why awaiting on the method doesn't work but anyway the problem was
// simple. Basically we're making an asynchronous call and so the synchrnous emit 
// function under it gets called first before we've changed anything. That's why 
// it waits til the second time to be called correctly because by then the state has been updated by the 
// asynchronous call.

// look up why i need public and private later and when. And in what order I should put properties
// also look that  subsribing from outputs maybe that's the secret to that one implementation i wanna try just for funsies

// originally i just had something that filtered the numbers so i should talk about why
// changing it to use an observble and finding the number from the service based on an api
// is more performant especially since that gives us quantifiable data to reference
