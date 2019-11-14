import { Component, OnInit, Input, Inject, Optional, EventEmitter, Output } from '@angular/core';
import { MessageDef } from 'src/app/models/messageDef';
import {  DateAdapter, MAT_DATE_FORMATS, MAT_DIALOG_DATA } from '@angular/material';
import moment from 'moment/src/moment';
import { MessagesService } from 'src/app/services/messages.service';
import { MomentUtcDateAdapter } from 'src/app/pipes/momentUtcAdapter';
import { MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter';
import { AlertifyService } from 'src/app/services/alertify.service';


export const MY_FORMATS = {
  parse: {
    dateInput: 'DD.MM.YYYY',
  },
  display: {
    dateInput: 'DD.MM.YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY'
  },
};

@Component({
  selector: 'app-create-edit-message',
  templateUrl: './create-edit-message.component.html',
  styleUrls: ['./create-edit-message.component.scss'],
  providers: [
    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
    { provide: DateAdapter, useClass: MomentUtcDateAdapter },
    {provide: MAT_MOMENT_DATE_ADAPTER_OPTIONS, useValue: {useUtc: true}}
  ]
})
export class CreateEditMessageComponent implements OnInit {

  @Input('messageDef') set messageDef(value: MessageDef) {
    this._messageDef = value;
    this.oldMessageDef = Object.assign({}, this._messageDef);
  }


  @Output() messageDefChange = new EventEmitter<MessageDef>();


  oldMessageDef: MessageDef;
  // tslint:disable-next-line:variable-name
  _messageDef: MessageDef;

  newRecord = false;
  isChanged = false;

  constructor(private mS: MessagesService, @Optional() @Inject(MAT_DIALOG_DATA) public data: MessageDef,
              private alertify: AlertifyService) {
    this._messageDef = data;
    if (data !== null) {
      this.newRecord = true;
    }
  }

  ngOnInit() {

  }

  changed() {
    if (JSON.stringify(this._messageDef) !== JSON.stringify(this.oldMessageDef) ) {
      this.isChanged = true;
    } else {
      this.isChanged = false;
    }
  }

  passMessageDefToListComponent() {
    console.log('deviceMessage changed sent to messages-details component');
    this.messageDefChange.emit();
  }

  onSubmit() {

    if (this._messageDef.validTo) {
      this._messageDef.validTo = moment
        .parseZone(this._messageDef.validTo)
        .utc()
        .format();
    }
    if (this._messageDef.validFrom) {
      this._messageDef.validFrom = moment
        .parseZone(this._messageDef.validFrom)
        .utc()
        .format();
    }

    if (!this.newRecord) {
      moment().startOf('day');

      this.mS.editMessageDefinition(this._messageDef).subscribe((result) => {
          if (result === 200) {
            this.alertify.success(`Edytowano komunikat ${this._messageDef.description}`);
            this.passMessageDefToListComponent();
          } else {
            this.alertify.error(`Nie udało się edytować komunikatu ${this._messageDef.description}.\nSprawdź wprowadzone dane`);
          }
      });
    } else {
      this.mS.addMessageDefinition(this._messageDef).subscribe(
        (result) => {
          if (result === 200) {
            this.alertify.success(`Dodano nowy komunikat - ${this._messageDef.description}`);
          } else {
            this.alertify.error('Nie udało się dodać komunikatu');
          }
        }
      );
    }
  }

  cancelChanges() {
    this.messageDef = Object.assign({}, this.oldMessageDef);
    this.changed();
  }

}
