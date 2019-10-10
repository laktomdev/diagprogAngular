import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MessagesDefListComponent } from './messages-def-list/messages-def-list.component';

const devicesRoutes: Routes = [
  { path: 'messages', component: MessagesDefListComponent },
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
