import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgramsComponent } from './programs.component';
import { ProgramsListExpandedComponent } from './programs-list-expanded/programs-list-expanded.component';



@NgModule({
  declarations: [ProgramsComponent, ProgramsListExpandedComponent],
  imports: [
    CommonModule
  ]
})
export class ProgramsModule { }
