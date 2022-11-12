import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { SearchService } from '../../../root/shared/services/search.service';
import { Digimon } from '../models/digimon/digimon';
import { MessageService } from '../../../../shared/services/message.service';

@Injectable({
  providedIn: 'root'
})
export class DigimonService {

  private digimonUrl = 'api/digimon'
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
    private search: SearchService,
    private messageService: MessageService) { }


  getDigimon(): Observable<Digimon[]> {
    return this.http.get<Digimon[]>(this.digimonUrl);
  }

  getADigimon(number: number): Observable<Digimon> {
      const url = `${this.digimonUrl}/${number}`;
      return this.http.get<Digimon>(url).pipe(
        tap(_ => this.log(`fetched digimon number=${number}`)),
        catchError(this.handleError<Digimon>(`getDigimon number=${number}`))
      );

  }

  searchDigimon(): Observable<Digimon[]>{
    return this.http.get<Digimon[]>(this.digimonUrl)
    .pipe(
      tap(_ => this.log('fetched digimon')),
      catchError(this.handleError<Digimon[]>('searchDigimon', []))
    );
  }

  private log(message: string) {
    this.messageService.add(`DigimonService: ${message}`);
  }
  
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); 
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}


// This will be used to get digimon, and be changed based on queries
//  and filters from graphql and elastic search. depending on how this
// accepts graphql and elastic search services. May allow access to
// deleting or adding digimon to your official digidex or allow
//  Multiple partners 