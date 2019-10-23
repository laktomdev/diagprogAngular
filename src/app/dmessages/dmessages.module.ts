import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DmessagesRoutingModule } from './dmessages-routing.module';
import { MessagesDefListComponent } from './messages-def-list/messages-def-list.component';
import { SharedModule } from '../shared/shared.module';
import { MessageDetailsComponent } from './message-details/message-details.component';
import { EnumAsStringPipe } from '../pipes/enum-as-string.pipe';
import { Language } from '../models/language';
import { MessageTranslationsComponent } from './message-details/message-translations/message-translations.component';
import { MessageDevicesComponent } from './message-details/message-devices/message-devices.component';
import { TranslationEditComponent } from './message-details/message-translations/translation-edit/translation-edit.component';
import { CreateEditMessageComponent } from './create-edit-message/create-edit-message.component';



@NgModule({
  declarations: [MessagesDefListComponent, MessageDetailsComponent, EnumAsStringPipe, MessageTranslationsComponent, MessageDevicesComponent, TranslationEditComponent, CreateEditMessageComponent],
  imports: [
    CommonModule,
    DmessagesRoutingModule,
    SharedModule
  ]
})
export class DmessagesModule { }
