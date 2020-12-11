import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Program } from 'src/app/models/program';
import { ProgramsService } from 'src/app/services/programs.service';


@Component({
  selector: 'app-program-details',
  templateUrl: './program-details.component.html',
  styleUrls: ['./program-details.component.scss']
})
export class ProgramDetailsComponent implements OnInit {

  program: Program;


  @Input() expandId: number;
  @Output() refreshListEmitter = new EventEmitter<number>();


  refresListTriggered(programId: number) {
    this.refreshListEmitter.emit(programId);
  }
  constructor(private pS : ProgramsService) { }

  ngOnInit() {
    this.pS.getById(Number(this.expandId)).subscribe(
      (data) => {
        this.program = data;
      },
      (error) => {
        console.log(error);
      }
    );
   }

}
