import { Component, OnInit, Inject } from '@angular/core';
import { MessagesService } from 'src/app/services/messages.service';
import { MessageDef } from 'src/app/models/messageDef';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { CreateEditMessageComponent } from '../create-edit-message/create-edit-message.component';
import { delay } from 'q';


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
  expandedElementOpenTabId = 0;


  columnsToDisplay = ['createDate', 'description', 'validFrom', 'validTo', 'translationsCount'];

  constructor(private mS: MessagesService, public dialog: MatDialog) { }

  ngOnInit() {
    this.downloadMessages();
  }

  onElementChange(value: number) {
    console.log('messages-def-list dostało value');
    this.downloadMessages(value);
  }

  downloadMessages(expand?: number) {
    this.mS.getAllMessageDeffinitions().subscribe(
      (data) => {

        this.messages = data;
        this.dataSource =  new MatTableDataSource<MessageDef>(data);
        if (expand) {
          this.expandedElement = this.messages.find(x => x.id === expand);
        }
      },

      (error) => {
        console.log(error);
      }
    );
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(CreateEditMessageComponent, {data: {}});
    dialogRef.afterClosed().subscribe(() => {
      this.downloadMessages();
    });

  }

}



