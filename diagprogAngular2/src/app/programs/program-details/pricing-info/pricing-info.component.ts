import { AfterContentChecked, Component, Input, OnInit } from '@angular/core';
import { Program } from 'src/app/models/program';
import { ProgramsService } from 'src/app/services/programs.service';
import {MatProgressBarModule} from '@angular/material/progress-bar';

@Component({
  selector: 'app-pricing-info',
  templateUrl: './pricing-info.component.html',
  styleUrls: ['./pricing-info.component.scss']
})
export class PricingInfoComponent implements OnInit {

  @Input() expandId: number;
  loading = true;
  program: Program;

  constructor(private pS: ProgramsService) { }

  ngOnInit() {
   // console.log(this.expandId);

    this.pS.getById(Number(this.expandId)).subscribe(
      (data) => {
        this.program = data;
        this.loading = false;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  // unitsTests() {
  //   if (this.program.name && this.program.programIdent)
  //         return true;
  //   else return false;
  // }
  // monthSubscription(){
    
  //   if(this.unitsTests()==true && this.program.programPackages)
  //   return true;
  //   else return false;
  // }
  // orderInPriceList(){
    
  //   if(this.monthSubscription()==true && this.program.pricingInfo.netPrice)
  //   return  true;
  //   else return  false;
  // }
}
