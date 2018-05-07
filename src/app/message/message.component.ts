import { MessagesService } from './../messages.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {


  constructor(private messageService: MessagesService) {
  }

  ngOnInit() {
  }
  onClick() {
    this.messageService.messages = [];
  }

}
