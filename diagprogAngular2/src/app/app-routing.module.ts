import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProgramsComponent } from './programs/programs.component';

// ng generate module app-routing --flat --module=app

const routes: Routes = [
  {path : 'devices',  redirectTo : '/devices', pathMatch: 'full'},
  {path : 'messages',  redirectTo : '/messages', pathMatch: 'full'},
  {path : 'programs', redirectTo : '/programs', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
