import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DmessagesRoutingModule } from './dmessages-routing.module';
import { MessagesDefListComponent } from './messages-def-list/messages-def-list.component';
import { SharedModule } from '../shared/shared.module';
import { MessageDetailsComponent } from './message-details/message-details.component';
import { MessageTranslationsComponent } from './message-details/message-translations/message-translations.component';
import { MessageDevicesComponent } from './message-details/message-devices/message-devices.component';
import { TranslationEditComponent } from './message-details/message-translations/translation-edit/translation-edit.component';
import { CreateEditMessageComponent } from './create-edit-message/create-edit-message.component';
import { InsideComponent } from './message-details/message-devices/inside/inside.component';
import { OutsideComponent } from './message-details/message-devices/outside/outside.component';
import { MessageDeviceListComponent } from './message-device-list/message-device-list.component';



@NgModule({
  declarations: [MessagesDefListComponent,
    MessageDetailsComponent,
      MessageTranslationsComponent,
       MessageDevicesComponent,
        TranslationEditComponent,
        CreateEditMessageComponent,
      InsideComponent,
      OutsideComponent,
      MessageDeviceListComponent],
  imports: [
    CommonModule,
    DmessagesRoutingModule,
    SharedModule
  ],
})
export class DmessagesModule { }
