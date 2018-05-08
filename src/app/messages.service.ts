import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  add(message: string): void {
   this.messages.push  (message);
  }
   messages: string []; 
  constructor() {
    this.messages = [];
   }
 
}
