import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { DeviceListComponent } from './device-list/device-list.component';
import { DeviceDetailsComponent } from './device-details/device-details.component';
import { DevicesRoutingModule } from './devices-routing.module';
import { CustomersFormComponent } from './customers-form/customers-form.component';



@NgModule({
  declarations: [DeviceListComponent, DeviceDetailsComponent, CustomersFormComponent],
  imports: [
    CommonModule,
    SharedModule,
    DevicesRoutingModule
  ]
})
export class DevicesModule { }
