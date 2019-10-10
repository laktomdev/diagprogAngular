import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DmessagesRoutingModule } from './dmessages-routing.module';
import { MessagesDefListComponent } from './messages-def-list/messages-def-list.component';
import { SharedModule } from '../shared/shared.module';
import { MessageDetailsComponent } from './message-details/message-details.component';
import { EnumAsStringPipe } from '../pipes/enum-as-string.pipe';
import { Language } from '../models/language';



@NgModule({
  declarations: [MessagesDefListComponent, MessageDetailsComponent, EnumAsStringPipe],
  imports: [
    CommonModule,
    DmessagesRoutingModule,
    SharedModule
  ]
})
export class DmessagesModule { }
