import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProgramsComponent } from './programs.component';
import { ProgramDetailsComponent } from './program-details/program-details.component';



const routes: Routes = [
  {path: 'programs',  component: ProgramsComponent, data: { animation: 'programs' }},
  {path: 'program/:id', component: ProgramDetailsComponent, data: { animation: 'program' }},  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProgramsRoutingModule { }
