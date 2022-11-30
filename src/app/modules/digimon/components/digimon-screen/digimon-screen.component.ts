import { Component, OnInit, Input, SimpleChanges, OnChanges, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { DigimonService } from '../../shared/services/digimon.service';
import { Digimon } from '../../shared/models/digimon/digimon'
import { catchError, EMPTY, Observable, single, Subject, map, tap, toArray, switchMap } from 'rxjs';

@Component({
  selector: 'app-digimon-screen',
  templateUrl: './digimon-screen.component.html',
  styleUrls: ['./digimon-screen.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DigimonScreenComponent  {
  error: any;
  digimonList$ = this.digimonService.digimon$
  .pipe(
    catchError(err => {
      this.errorMessage = err;
      return EMPTY;
    })
  );
  // digimonListWithFilters$ = this.digimonService.digimon$
  //   .pipe(
  //     map(digimon =>
  //       digimon.filter( digi => 
  //         ))
  //   )
  digimonNumber?: Number;
  errorMessage = '';
  constructor(
    private digimonService: DigimonService,
    private route: ActivatedRoute,
    private location: Location
  ) { } 
  
  assignDigimon(number: number): void {
    this.digimonList$ = this.digimonService.digimon$.pipe(
      map(digimon => 
        digimon.filter(digi => 
          digi.id === number
      ))
    );
  }
}

//  This is the actual list of all the digimon that can be selected
//  This will be filtered by searches, and filters

// I switched the logic so both functions would use the same digimonService
// but with one filtering to a single digimon first and then putting that
// as an array instead having two separate functions in the service and then
// having to deal with two separate pieces of logic here and then putting more logic
//  to that. I'll check if that fits in with best practies or if all the logic should
// be in the service even if it means more code is written to make sure everything
// is deduplicated especially if another component needs access to just one digimon
//  later on, then it'd make more sense to have a service method for just getting one
// digimon. i'll also have to see if adding the store changes things as well because potentially
//  then clicking on that one digimon could impact say the the list of digimon is kept in the
// store and that click says hey no just this digimon and the services and components are affected
// by that. then in that case perhaps it's we'd never need the assign one because it'd just perform the
// same logic here of the service just performing the logic of bringing all the digimon it has access
// to and later on doing more things. But that doesn't seem super like what the service is wanting
// but again if we're moving gthe collection of digimon out of the digimon component i'm not sure
// much of thi smatters because then the service would go back to doing all the logic anyway.
// and i still wanna use elastic search, but I think the service would just interact with elastic
// search anyway to make queries. but either way i shoud look for if this is more performate or not
// and how that fits into best practices. Maybe it's more performate and I talk about that but it
// doesn't fit best practices and I can explain that too

// one thing to look is if it's more performative to get the observable for everything and filter that
// with a map filter function or is the http request the route more performative and if that matters
// once we use elastic search and the store anyway.

// if not change detection not working properly it's because we switchedthe the change
// detection strategy so perhaps thigns I've placed on the component aren't working properly and just the c
//  ones involving the component's properties themselves

// clicking each digimon triggers change detection in this version so it maybe doesn't
// follow separation of responsibilites and either way isn't the way i really want this to work
//  so i amy change some thing in how this is set up, and see if conditionals that if it's a si
// entry in the list and not a list with more than 1 digimon that the method is diabled
//  annd have clicking on a thing that makes it go back to previous screen

// should have one of two things. Either combine filters here and send it
// and combine it here to make the call. or have the entries in the store
//  and see if it's better to immediately use their actions as observables
// to decide what filters are placed here or see if I should have all
//  of that logic actually live in reducers int he store and thihs component
// just calls whatever it wants from there with the dispatchers and that way
//  i can reuse dispatches elsewhere for filters with a team the one thing
// that might make it hard is i might have to have opponent digimon so even
//  if it's one or their team. the only thing I might be worried about
//  is i think a filters list in the store shouldn't affect the list of 
// digimon in the store?  so maybe just the 2 sets of digimon, and then
// services are used throughout and perhaps digimon can uses those
//  services in their dispatch so the services are still decoupled from
// the digimon component?