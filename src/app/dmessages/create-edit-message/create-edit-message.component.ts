import { Component, OnInit, Input, Inject, Optional, EventEmitter, Output } from '@angular/core';
import { MessageDef } from 'src/app/models/messageDef';
import { MAT_DATE_LOCALE, DateAdapter, MAT_DATE_FORMATS, MAT_DIALOG_DATA } from '@angular/material';
import moment from 'moment/src/moment';
import { MessagesService } from 'src/app/services/messages.service';
import { MomentUtcDateAdapter } from 'src/app/pipes/momentUtcAdapter';
import { BehaviorSubject } from 'rxjs';
import { switchMap } from 'rxjs/operators';


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
    { provide: MAT_DATE_LOCALE, useValue: 'en-GB' },
    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
    { provide: DateAdapter, useClass: MomentUtcDateAdapter }
  ]
})
export class CreateEditMessageComponent implements OnInit {

  @Input() messageDef: MessageDef | null;
  @Output() messageDefChange = new EventEmitter<MessageDef>();

  newRecord = false;
  response: number;

  constructor(private mS: MessagesService, @Optional() @Inject(MAT_DIALOG_DATA) public data: MessageDef) {
    this.messageDef = data;
    console.log(data);
    if(data !== null) {
      this.newRecord = true;
    }
  }

  ngOnInit() {
  }

  passMessageDefToListComponent(value: MessageDef) {
    console.log('deviceMessage changed sent to messages-details component');
    this.messageDefChange.emit(value);
  }

  onSubmit() {
    if (!this.newRecord) {
      console.log(this.messageDef);
      moment().startOf('day').format();
      this.mS.editMessageDefinition(this.messageDef).subscribe(data => {this.response = data; });
      console.log('rowAffected=' + this.response );
      this.passMessageDefToListComponent(this.messageDef);
    } else {
      this.mS.addMessageDefinition(this.messageDef).subscribe();
    }
  }

}
