import { MessagesService } from './messages.service';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  getHeroes ():Observable<Hero[]> {
  
    this.messageService.messages.push("getting list of heroes");
    console.log(this.messageService.messages);
    return of(HEROES); 
   
   
  }
  constructor(private messageService : MessagesService) {
   
    
   }
}

