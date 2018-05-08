import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MessagesService } from './messages.service';
import { Hero } from './hero';

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class HeroService {


  updateHero(hero: Hero): Observable<any>{
    const url = `${this.heroesUrl}/${hero.id}`;
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
   return  this.http.put(url,hero);
  }
  private heroesUrl = 'api/heroes';
  
  getHero(id: number): Observable<Hero> {
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get<Hero>(url).pipe(
      
      catchError(
        this.handleError<Hero>(`getHero id = ${id}`)
      )
    );

  }


  getHeroes (): Observable<Hero[]> {
    this.messageService.add(`HeroService: getting list of heroes`);
    
    return this.http.get<Hero[]>(this.heroesUrl)
      .pipe(catchError(this.handleError('getHeroes', []))
      );
  }


  createHero(hero : Hero): Observable<any>{
    console.log(hero);
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
  return this.http.post(this.heroesUrl, hero,httpOptions)
  .pipe(catchError(this.handleError<Hero>('createHeroe'))
);
  }



private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {
 
    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead
 
    // TODO: better job of transforming error for user consumption
    console.log(`${operation} failed: ${error.message}`);
 
    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}

  constructor(private http : HttpClient ,private messageService : MessagesService) {
   
    
   }
}

