import { Component, OnInit, Input } from '@angular/core';
import { MessageDef } from 'src/app/models/messageDef';
import { MessagesService } from 'src/app/services/messages.service';
@Component({
  selector: 'app-message-details',
  templateUrl: './message-details.component.html',
  styleUrls: ['./message-details.component.scss']
})
export class MessageDetailsComponent implements OnInit {

  @Input() messageId: number;
  message: MessageDef;


  constructor(private mS: MessagesService) { }

  ngOnInit() {
    this.mS.getMessagesDeffinition(this.messageId).subscribe(
      (data) => {
        this.message = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  }



