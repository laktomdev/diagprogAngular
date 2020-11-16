import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgramsComponent } from './programs.component';
import { SharedModule } from '../shared/shared.module';
import { ProgramsListExpandedComponent } from './programs-list-expanded/programs-list-expanded.component';
import { ProgramsRoutingModule } from './programs-routing.module';



@NgModule({
  declarations: [ProgramsComponent, ProgramsListExpandedComponent],
  imports: [
    CommonModule, SharedModule, ProgramsRoutingModule
  ]
})
export class ProgramsModule { }
