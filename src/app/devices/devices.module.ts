import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DevicesComponent } from './devices.component';
import { SharedModule } from '../shared/shared.module';
import { MatPaginatorModule, MatFormFieldModule } from '@angular/material';



@NgModule({
  declarations: [DevicesComponent],
  imports: [
    CommonModule,
    SharedModule,
    MatPaginatorModule,
    MatFormFieldModule
  ]
})
export class DevicesModule { }
