import { Injectable } from '@angular/core';
import { Digimon } from 'src/app/modules/digimon/shared/models/digimon/digimon';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { MessageService } from '../../../../shared/services/message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private digimonUrl = 'api/digimon'
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  searchDigimon(term: string): Observable<Digimon[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<Digimon[]>(`${this.digimonUrl}/?name=${term}`).pipe(
      tap(x => x.length ?
         this.log(`found heroes matching "${term}"`) :
         this.log(`no heroes matching "${term}"`)),
      catchError(this.handleError<Digimon[]>('searchDigimon', []))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };

  }

  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }

}
