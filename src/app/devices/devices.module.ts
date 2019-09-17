import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { MatPaginatorModule, MatFormFieldModule } from '@angular/material';
import { DeviceListComponent } from './device-list/device-list.component';
import { DeviceDetailsComponent } from './device-details/device-details.component';
import { DevicesRoutingModule } from './devices-routing.module';



@NgModule({
  declarations: [DeviceListComponent, DeviceDetailsComponent],
  imports: [
    CommonModule,
    SharedModule,
    MatPaginatorModule,
    MatFormFieldModule,
    DevicesRoutingModule
  ]
})
export class DevicesModule { }
