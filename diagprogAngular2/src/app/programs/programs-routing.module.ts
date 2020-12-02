import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProgramsComponent } from './programs.component';



const routes: Routes = [
  {
    path: 'programs',  component: ProgramsComponent, data: { animation: 'programs' },
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProgramsRoutingModule { }
