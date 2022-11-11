import { Component, Input, OnInit } from '@angular/core';
import { Digimon } from '../../shared/models/digimon/digimon';
import { Output, EventEmitter } from '@angular/core';
import { DigimonScreenComponent } from '../digimon-screen/digimon-screen.component';
import { DigimonService } from '../../shared/services/digimon.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-digimon-details',
  templateUrl: './digimon-details.component.html',
  styleUrls: ['./digimon-details.component.css']
})
export class DigimonDetailsComponent implements OnInit {
  @Input() digimon?: Digimon;
  @Input() digimonList!: Digimon[];
  @Output() digimonListChange = new EventEmitter<Digimon[]>()

  constructor(private digimonService: DigimonService) { }

  ngOnInit(): void {

  };


  assignDigimon(number: number): void {
    this.digimonListChange.emit(this.digimonList.filter(digimon => digimon.number === number)
    )
  };

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