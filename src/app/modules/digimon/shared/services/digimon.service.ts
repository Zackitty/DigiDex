import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { combineLatest, Observable, of, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { SearchService } from '../../../root/shared/services/search.service';
import { Digimon } from '../models/digimon/digimon';
import { MessageService } from '../../../../shared/services/message.service';

@Injectable({
  providedIn: 'root'
})
export class DigimonService {

  private digimonUrl = 'api/digimon'
  digimon$ = this.http.get<Digimon[]>(this.digimonUrl)
    .pipe(
      tap(data => console.log(data)),
      catchError(this.handleError)
    );
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
    private search: SearchService,
    private messageService: MessageService) { }
  

  getADigimon(number: number): Observable<Digimon[]> {
      const url = `${this.digimonUrl}/${number}`;
      return this.http.get<Digimon[]>(url).pipe(
        tap(_ => this.log(`fetched digimon number=${number}`)),
        catchError(err => {
                   console.error(err);
                   return throwError(() => new Error('Could Not Retrieve'))
          })
      );

  }

  // searchDigimon(): Observable<Digimon[]>{
  //   return this.http.get<Digimon[]>(this.digimonUrl)
  //   .pipe(
  //     tap(_ => this.log('fetched digimon')),
  //     catchError(this.handleError<Digimon[]>('searchDigimon', []))
  //   );
  // }

  private log(message: string) {
    this.messageService.add(`DigimonService: ${message}`);
  }
  
  private handleError(err: HttpErrorResponse): Observable<never> {
    let errorMessage: string;
    if (err.error instanceof ErrorEvent){
      errorMessage = `An Error Occurred: ${err.error.message}`;
    } else {
      errorMessage = `Backend returned code ${err.status}: ${err.message}`;
    }
    console.error(err);
    return throwError(() => errorMessage)
  }
}


// This will be used to get digimon, and be changed based on queries
//  and filters from graphql and elastic search. depending on how this
// accepts graphql and elastic search services. May allow access to
// deleting or adding digimon to your official digidex or allow
//  Multiple partners 