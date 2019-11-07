import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MessageTranslation } from 'src/app/models/messageTranslation';
import { LanguagesService } from 'src/app/services/languages.service';
import { Language } from 'src/app/models/language';

@Component({
  selector: 'app-message-translations',
  templateUrl: './message-translations.component.html',
  styleUrls: ['./message-translations.component.scss']
})
export class MessageTranslationsComponent implements OnInit {

  @Input() translations: MessageTranslation[];
  @Input() messageDefId: number;
  @Output() refreshListEmitter = new EventEmitter<number>();

  languagesToAdd: Language[];
  selectedLanguage: Language;
  openTab = 0;
  editDefault = false;
  addNewTranslation = false;
  itemChangedId: number;

  listRefreshTriggered(value: number) {
    this.refreshListEmitter.emit(value);
  }

  // dostaje informacje o zmienionym tłumaczeniu
  itemChangeTriggered(value: number) {
    console.log('zmieniłem item ' + value);
    this.itemChangedId = value;
  }

  constructor(private lS: LanguagesService) { }

  ngOnInit() {
    this.lS.getAll().subscribe(
      (data) => {
        this.languagesToAdd = data;
        this.filterLanguagesToAdd();
      },
      (error) => {
        console.log(error);
      }
    );

    this.filterLanguagesToAdd();
  }

  filterLanguagesToAdd() {

    if (this.translations) {
      const languagesInMessage = this.translations.map(x => x.language);

      if (this.languagesToAdd) {
        this.languagesToAdd = this.languagesToAdd.filter(({id: id1}) =>
        !languagesInMessage.some(({id: id2}) => id2 === id1));
      }
    }
  }

  addLanguage() {
    if (this.selectedLanguage != null) {
      this.translations.push({
        id: null,
        bodyText: '',
        headerText: '',
        footerText: '',
        isDefault: false,
        language: this.selectedLanguage,
        messageId: this.messageDefId
      });
      this.selectedLanguage = null;
      this.openTab = this.translations.length - 1;
      this.addNewTranslation = false;
      this.filterLanguagesToAdd();
    }
  }




}
