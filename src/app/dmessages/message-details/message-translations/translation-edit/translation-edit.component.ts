import { Component, OnInit, Input, ChangeDetectionStrategy, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { MessageTranslation } from 'src/app/models/messageTranslation';
import { MessagesService } from 'src/app/services/messages.service';
import { MessageTranslationSubmit } from 'src/app/models/MessageTranslationSubmit';
import { AlertifyService } from 'src/app/services/alertify.service';

@Component({
  selector: 'app-translation-edit',
  templateUrl: './translation-edit.component.html',
  styleUrls: ['./translation-edit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TranslationEditComponent implements OnInit {

  @Input() translation: MessageTranslation;
  @Output() refreshListEmitter = new EventEmitter<number>();
  @Output() changeEmitter = new EventEmitter<number>();

  oldTranslation: MessageTranslation;

  isChanged = false;
  isNewRecord = true;

  constructor(private mS: MessagesService, private alertify: AlertifyService
    ) {}


  changed() {

    if (JSON.stringify(this.translation) !== JSON.stringify(this.oldTranslation) ) {
      this.isChanged = true;
      this.changeEmitter.emit(this.translation.id);
    } else {
      this.isChanged = false;
    }
  }

  ngOnInit() {
    this.oldTranslation = Object.assign({}, this.translation);
    if (this.translation.id !== null) {
      this.isNewRecord = false;
    }
  }

  onSubmit()  {
    if (!this.isNewRecord) {
    this.mS.editTranslation(this.createSubmitTranslation()).subscribe(data => {
      if (data === 200) {
        this.alertify.success(`Edytowano tłumaczenie w języku ${this.translation.language.name}`);
        this.refreshListEmitter.emit(this.translation.messageId);
      } else {
        this.alertify.error(`Nie udało się edytować tłumaczenia w języku ${this.translation.language.name}`);
      }
    });
    this.oldTranslation = Object.assign({}, this.translation);
    this.changed();
    } else {
       this.mS.addTranslation(this.createSubmitTranslation()).subscribe(data => {

          if (data === 200) {
            this.alertify.success(`Dodano tłumaczenie w języku ${this.translation.language.name}`);
            this.refreshListEmitter.emit(this.translation.messageId);
          } else {
            this.alertify.error(`Nie udało się dodać tłumaczenia w języku ${this.translation.language.name}`);
          }

        });

    }
  }

  cancelChanges() {
    this.translation = Object.assign({}, this.oldTranslation);
    this.isChanged = false;
  }

  createSubmitTranslation(): MessageTranslationSubmit {
    return {
      bodyText: this.translation.bodyText,
      headerText: this.translation.headerText,
      footerText: this.translation.footerText,
      isDefault: this.translation.isDefault,
      languageId: this.translation.language.id,
      messageId: this.translation.messageId,
      id: this.translation.id
    };
  }
}
