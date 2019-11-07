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
  @Input() openTabId = 0;
  @Output() messageDefChange = new EventEmitter<MessageDef>();
  @Output() refreshListEmitter = new EventEmitter<number>();

  message: MessageDef;


  constructor(private mS: MessagesService) { }

  onMessageDefChange(messageDef: MessageDef) {
    this.messageDefChange.emit(messageDef);
  }

  listRefreshTriggered(value: number) {
    console.log('message-details dostało value');
    this.refreshListEmitter.emit(value);
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



