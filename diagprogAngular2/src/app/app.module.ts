import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HomeModule } from './home/home.module';
import { HttpClientModule } from '@angular/common/http';
import { DevicesModule } from './devices/devices.module';
import { DmessagesModule } from './dmessages/dmessages.module';
import { DeviceTableColumnFilterComponent } from './tableTools/device-table-column-filter/device-table-column-filter.component';



@NgModule({
   declarations: [
      AppComponent,
      
   ],
   imports: [
      BrowserModule,
      BrowserAnimationsModule,
      AppRoutingModule,
      SharedModule,
      HomeModule,
      DevicesModule,
      DmessagesModule,
      HttpClientModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
