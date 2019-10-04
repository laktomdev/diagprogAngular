import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProgramsComponent } from './programs/programs.component';
import { DeviceListComponent } from './devices/device-list/device-list.component';
import { AuthorizationComponent } from './authorization/authorization.component';


const routes: Routes = [
  {path : 'devices',  redirectTo : '/devices', pathMatch: 'full'},
  {path : 'programs', component : ProgramsComponent},
  {path: 'login', component: AuthorizationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
