import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Program } from 'src/app/models/Program/program';
import { ProgramsService } from 'src/app/services/programs.service';


@Component({
  selector: 'app-program-details',
  templateUrl: './program-details.component.html',
  styleUrls: ['./program-details.component.scss']
})
export class ProgramDetailsComponent implements OnInit {

  program: Program;
  loading = true;

  @Input() expandId: number;
  @Output() refreshListEmitter = new EventEmitter<number>();


  // refresListTriggered(programId: number) {
  //   this.refreshListEmitter.emit(programId);
  // }
  constructor(private pS : ProgramsService) { }

  ngOnInit() {
     console.log("Pobieram programpricing/"+ this.expandId);

    this.pS.getById(Number(this.expandId)).subscribe(
      (data) => {
        this.program = data;
        this.loading = false;
      },
      (error) => {
        console.log(error);
      }
    );
    this.loading = false;
   }

}
