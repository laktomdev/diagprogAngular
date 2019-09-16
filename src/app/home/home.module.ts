import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { SharedModule } from '../shared/shared.module';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { DevicesModule } from '../devices/devices.module';
import { ProgramsModule } from '../programs/programs.module';




@NgModule({
  declarations: [HomeComponent, HeaderComponent, BodyComponent, FooterComponent, SidebarComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    DevicesModule,
    ProgramsModule
  ],
  exports : [
    HomeComponent
  ]
})
export class HomeModule { }
