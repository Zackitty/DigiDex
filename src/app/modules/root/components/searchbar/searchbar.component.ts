import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Digimon } from 'src/app/modules/digimon/shared/models/digimon/digimon';
import { SearchService } from '../../shared/services/search.service';
@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {

  digimon$!: Observable<Digimon[]>;
  private searchTerms = new Subject<string>();

  constructor( private searchService: SearchService) { }

  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.digimon$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.searchService.searchDigimon(term)),
    );
  }
}

// Will Be the main search bar and should inject probably get a search service
// that injects into digimon service. may need a sub component
//  for filters