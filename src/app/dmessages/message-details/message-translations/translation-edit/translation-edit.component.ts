import { Component, OnInit, Input, ChangeDetectionStrategy, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { MessageTranslation } from 'src/app/models/messageTranslation';
import { MessagesService } from 'src/app/services/messages.service';
import { MessageTranslationSubmit } from 'src/app/models/MessageTranslationSubmit';

@Component({
  selector: 'app-translation-edit',
  templateUrl: './translation-edit.component.html',
  styleUrls: ['./translation-edit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TranslationEditComponent implements OnInit {

  @Input() translation: MessageTranslation;
  @Output() refreshListEmitter = new EventEmitter<number>();

  oldTranslation: MessageTranslation;

  isChanged = false;
  isNewRecord = true;

  constructor(private mS: MessagesService
    ) {}


  changed() {
    if (JSON.stringify(this.translation) !== JSON.stringify(this.oldTranslation) ) {
      this.isChanged = true;
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
    this.mS.editTranslation(this.createSubmitTranslation()).subscribe(data => console.log(data));
    this.oldTranslation = Object.assign({}, this.translation);
    this.changed();
    } else {
       this.mS.addTranslation(this.createSubmitTranslation()).subscribe(data => {
          this.refreshListEmitter.emit(this.translation.messageId);
        });

    }
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
