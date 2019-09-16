import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DevicesComponent } from './devices/devices.component';
import { ProgramsComponent } from './programs/programs.component';


const routes: Routes = [
  {path : 'devices', component : DevicesComponent},
  {path : 'programs', component : ProgramsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
