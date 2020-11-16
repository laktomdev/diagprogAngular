import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Program } from '../models/program';
import { ProgramsService } from '../services/programs.service';

@Component({
  selector: 'app-programs',
  templateUrl: './programs.component.html',
  styleUrls: ['./programs.component.scss']
})
export class ProgramsComponent implements OnInit {

  programs: Program[];
  loading = true;

  constructor(private pS: ProgramsService) { } 
  ngOnInit() {
    this.getAllPrograms();
  }



  getAllPrograms() {
    this.pS.getAll().subscribe(
      (data) => {
        this.programs = data;
        this.loading = false;
      },
      (error) => {
        console.log(error);
      }
    );

  }

}
