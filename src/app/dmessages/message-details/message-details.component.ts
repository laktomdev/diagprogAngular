import { Component, OnInit, Input } from '@angular/core';
import { MessageDef } from 'src/app/models/messageDef';
import { MessagesService } from 'src/app/services/messages.service';
import { Language } from 'src/app/models/language';
import { MessageTranslation } from 'src/app/models/messageTranslation';

@Component({
  selector: 'app-message-details',
  templateUrl: './message-details.component.html',
  styleUrls: ['./message-details.component.scss']
})
export class MessageDetailsComponent implements OnInit {

  @Input() messageId: number;
  message: MessageDef;
  selected: MessageTranslation;
  language = Language;
  langs = Object.values(Language);

  constructor(private mS: MessagesService) { }

  ngOnInit() {
    this.mS.getMessagesDeffinition(this.messageId).subscribe(
      (data) => {
        this.message = data;
        this.sliceLangs();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  sliceLangs() {

    console.log(this.langs);
  }



  }



