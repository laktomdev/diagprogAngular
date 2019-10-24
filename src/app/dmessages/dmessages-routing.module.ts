import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MessagesDefListComponent } from './messages-def-list/messages-def-list.component';
import { CreateEditMessageComponent } from './create-edit-message/create-edit-message.component';

const devicesRoutes: Routes = [
  { path: 'messages', component: MessagesDefListComponent },
  { path: 'messages/create', component: CreateEditMessageComponent },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(devicesRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class DmessagesRoutingModule { }
