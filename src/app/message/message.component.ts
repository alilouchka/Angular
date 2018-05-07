import { MessagesService } from './../messages.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

 messages ;
  constructor(private messageService : MessagesService) { 
    this.messages = messageService.messages;
  }

  ngOnInit() {
   
  }

}
