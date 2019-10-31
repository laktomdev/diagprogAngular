import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MessageDef } from 'src/app/models/messageDef';
import { MessagesService } from 'src/app/services/messages.service';
@Component({
  selector: 'app-message-details',
  templateUrl: './message-details.component.html',
  styleUrls: ['./message-details.component.scss']
})
export class MessageDetailsComponent implements OnInit {

  @Input() messageId: number;
  @Output() messageDefChange = new EventEmitter<MessageDef>();

  message: MessageDef;


  constructor(private mS: MessagesService) { }

  onMessageDefChange(messageDef: MessageDef) {
    this.messageDefChange.emit(messageDef);

  }



  ngOnInit() {
    this.downloadMessageDef();
  }

  downloadMessageDef() {
    this.mS.getMessagesDeffinitionDetails(this.messageId).subscribe(
      (data) => {
        this.message = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  }



