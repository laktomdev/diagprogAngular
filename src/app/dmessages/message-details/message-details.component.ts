import { Component, OnInit, Input } from '@angular/core';
import { MessageDef } from 'src/app/models/messageDef';
import { MessagesService } from 'src/app/services/messages.service';
import { Language } from 'src/app/models/language';
import { MessageTranslation } from 'src/app/models/messageTranslation';
import { LanguagesService } from 'src/app/services/languages.service';
import { NgForm } from '@angular/forms';
import { MessageTranslationsComponent } from './message-translations/message-translations.component';

@Component({
  selector: 'app-message-details',
  templateUrl: './message-details.component.html',
  styleUrls: ['./message-details.component.scss']
})
export class MessageDetailsComponent implements OnInit {

  @Input() messageId: number;
  message: MessageDef;
  selected: MessageTranslation;
  languages: Language[] = [];
  selectedLanguage: Language;
  constructor(private mS: MessagesService, private lS: LanguagesService) { }

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

    this.lS.getAll().subscribe(
      (data) => {
        this.languages = data;
        this.sliceLangs();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  addLanguage() {
    this.message.translations.push({
      bodyText: '',
      headerText: '',
      footerText: '',
      isDefault: false,
      language: this.selectedLanguage,
      messageId: this.message.id
    });

    this.selectedLanguage = null;
    this.sliceLangs();


  }

  sliceLangs() {
    const languagesInMessage = this.message.translations.map(x => x.language);

    this.languages = this.languages.filter(({id: id1}) =>
    !languagesInMessage.some(({id: id2}) => id2 === id1));

  }



  }



