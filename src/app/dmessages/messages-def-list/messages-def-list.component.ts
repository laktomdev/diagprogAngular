import { Component, OnInit } from '@angular/core';
import { MessagesService } from 'src/app/services/messages.service';
import { MessageDef } from 'src/app/models/messageDef';
import { MatTableDataSource } from '@angular/material';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-messages-def-list',
  templateUrl: './messages-def-list.component.html',
  styleUrls: ['./messages-def-list.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class MessagesDefListComponent implements OnInit {

  messages: MessageDef[] = [];
  dataSource: MatTableDataSource<MessageDef>;
  expandedElement: MessageDef | null;

  columnsToDisplay = ['createDate', 'description', 'validFrom', 'validTo', 'translationsCount'];

  constructor(private mS: MessagesService) { }

  ngOnInit() {
    this.mS.getMessagesDeffinitionList().subscribe(
      (data) => {

        this.messages = data;
        this.dataSource =  new MatTableDataSource<MessageDef>(data);
        // this.expandedElement = this.messages.find(x => x.id === 1);
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
