import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProgramsComponent } from './programs/programs.component';
import { AuthorizationComponent } from './authorization/authorization.component';

// ng generate module app-routing --flat --module=app

const routes: Routes = [
  {path : 'devices',  redirectTo : '/devices', pathMatch: 'full'},
  {path : 'messages',  redirectTo : '/messages', pathMatch: 'full'},
  {path : 'programs', component : ProgramsComponent},
  {path: 'login', component: AuthorizationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
