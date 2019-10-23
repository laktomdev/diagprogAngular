import { Component, OnInit, Input } from '@angular/core';
import { MessageDef } from 'src/app/models/messageDef';
import { MAT_DATE_LOCALE, DateAdapter, MAT_DATE_FORMATS } from '@angular/material';
import {MomentDateAdapter} from '@angular/material-moment-adapter';
import moment from 'moment/src/moment';


export const MY_FORMATS = {
  parse: {
    dateInput: 'DD.MM.YYYY',
  },
  display: {
    dateInput: 'DD.MM.YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@Component({
  selector: 'app-create-edit-message',
  templateUrl: './create-edit-message.component.html',
  styleUrls: ['./create-edit-message.component.scss'],
  providers: [
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
  ]
})
export class CreateEditMessageComponent implements OnInit {

  @Input() messageDef: MessageDef;


  messageDef2: MessageDef;

  constructor() {}

  ngOnInit() {
  }


  onSubmit() {
    this.messageDef.validFrom = moment().toDate();
    this.messageDef.validTo = moment().toDate();
    console.log(this.messageDef);
  }

}
