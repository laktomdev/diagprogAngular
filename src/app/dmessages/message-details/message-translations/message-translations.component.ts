import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { MessageTranslation } from 'src/app/models/messageTranslation';
import { LanguagesService } from 'src/app/services/languages.service';
import { Language } from 'src/app/models/language';
import { MessagesService } from 'src/app/services/messages.service';

@Component({
  selector: 'app-message-translations',
  templateUrl: './message-translations.component.html',
  styleUrls: ['./message-translations.component.scss']
})
export class MessageTranslationsComponent implements OnInit, OnChanges {
  @Input() translations: MessageTranslation[];
  @Input() messageDefId: number;
  @Output() refreshListEmitter = new EventEmitter<number>();
  translationsUncofirmed: MessageTranslation[];

  languagesToAdd: Language[];
  languagesAddedConfirmed: Language[];

  selectedLanguage: Language;
  defaultLanguage: Language;

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

  constructor(private lS: LanguagesService, private mS: MessagesService) {}

  ngOnInit() {
    this.lS.getAll().subscribe(
      data => {
        this.languagesToAdd = data;
        this.setLanguages();
      },
      error => {
        console.log(error);
      }
    );
  }

  ngOnChanges() {
    console.log(this.messageDefId);
    this.translationsUncofirmed = Object.assign([], this.translations);
    this.setLanguages();
  }

  setLanguages() {
    if (this.translations) {
      const languagesInMessage = this.translationsUncofirmed.map(
        x => x.language
      );
      const langsConfirmed = this.translations.map(x => x.language);

      const defaultLang = this.translations.find(x => x.isDefault);
      if (defaultLang) {
        this.defaultLanguage = defaultLang.language;
      }
      if (this.languagesToAdd) {
        this.languagesToAdd = this.languagesToAdd.filter(
          ({ id: id1 }) =>
            !languagesInMessage.some(({ id: id2 }) => id2 === id1)
        );
      }
      if (langsConfirmed) {
        this.languagesAddedConfirmed = langsConfirmed;
      }
    }
  }

  addLanguage() {
    if (this.selectedLanguage != null) {
      this.translationsUncofirmed.push({
        id: null,
        bodyText: '',
        headerText: '',
        footerText: '',
        isDefault: false,
        language: this.selectedLanguage,
        messageId: this.messageDefId
      });
      this.selectedLanguage = null;
      this.openTab = this.translationsUncofirmed.length - 1;
      this.addNewTranslation = false;
      this.setLanguages();
    }
  }

  changeDefault() {
    console.log('zmianiam język na ' + this.defaultLanguage.name);
    this.mS
      .changeDefaultLanguage(this.messageDefId, this.defaultLanguage.id)
      .subscribe(() => {
        console.log(this.messageDefId);
        this.mS.getTranslations(this.messageDefId).subscribe(data => {
          console.log(data);
          this.translations = data;
          // this.translationsUncofirmed = Object.assign([], this.translations);
          console.log(this.translationsUncofirmed);
          console.log(this.translations);
          this.setLanguages();
          this.editDefault = false;
        });
      });
  }

  cancelDefaultChange() {
    this.editDefault = false;
    this.setLanguages();
  }
}
