import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DeviceListComponent } from './device-list/device-list.component';
import { DeviceDetailsComponent } from './device-details/device-details.component';

const devicesRoutes: Routes = [
  { path: 'devices',  component: DeviceListComponent },
  { path: 'device/:id', component: DeviceDetailsComponent }
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(devicesRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class DevicesRoutingModule { }
