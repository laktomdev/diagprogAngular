import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeviceListComponent } from './device-list/device-list.component';
import { DeviceDetailsComponent } from './device-details/device-details.component';
import { CustomersFormComponent } from './customers-form/customers-form.component';

const devicesRoutes: Routes = [
  { path: 'devices',  component: DeviceListComponent, data: { animation: 'devices' } },
  { path: 'device/:id', component: DeviceDetailsComponent, data: { animation: 'device' } },
  { path: 'device/:id/customers', component: CustomersFormComponent }
];
@NgModule({
  imports: [
    RouterModule.forChild(devicesRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class DevicesRoutingModule { }
