import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { DeviceListComponent } from './device-list/device-list.component';
import { DeviceDetailsComponent } from './device-details/device-details.component';
import { DevicesRoutingModule } from './devices-routing.module';
import { CustomersFormComponent } from './customers-form/customers-form.component';
import { SellersFormComponent } from './sellers-form/sellers-form.component';
import { DeviceIdentificationComponent } from './device-details/device-identification/device-identification.component';
import { DeviceStatusComponent } from './device-details/device-status/device-status.component';
import { DeviceInfoComponent } from './device-details/device-info/device-info.component';
import { DeviceMessagesComponent } from './device-details/device-messages/device-messages.component';


@NgModule({
  declarations: [
    DeviceListComponent,
    DeviceDetailsComponent,
    CustomersFormComponent,
    SellersFormComponent,
    DeviceMessagesComponent,
    DeviceIdentificationComponent,
    DeviceStatusComponent,
    DeviceInfoComponent
  ],
  imports: [CommonModule, SharedModule, DevicesRoutingModule]
})
export class DevicesModule {}
