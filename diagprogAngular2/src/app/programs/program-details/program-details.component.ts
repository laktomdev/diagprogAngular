import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Program } from 'src/app/models/program';

@Component({
  selector: 'app-program-details',
  templateUrl: './program-details.component.html',
  styleUrls: ['./program-details.component.scss']
})
export class ProgramDetailsComponent implements OnInit {

  program: Program;


  @Input()programId: number;
  @Output()refreshListEmitter = new EventEmitter<number>();


  refresListTriggered(programIdent: number) {
    this.refreshListEmitter.emit(programIdent);
  }
  constructor() { }

  ngOnInit() {
  }

}
