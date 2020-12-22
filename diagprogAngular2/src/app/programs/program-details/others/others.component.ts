import { Component, Input, OnInit } from '@angular/core';
import { menuPosition } from 'src/app/models/Program/programMenuPositions/menuPosition/menuPosition';
import { programMenuPositions } from 'src/app/models/Program/programMenuPositions/programMenuPositions';
import { ProgramsService } from 'src/app/services/programs.service';

@Component({
  selector: 'app-others',
  templateUrl: './others.component.html',
  styleUrls: ['./others.component.scss']
})
export class OthersComponent implements OnInit {
  loading = true;
  @Input() expandId: number;
  menuPositions: programMenuPositions;
  constructor(private pS: ProgramsService) { }

  ngOnInit() {

    this.pS.getCableAndMenuPositions(Number(this.expandId)).subscribe(
      (data) => {
        this.menuPositions = data;
       // console.log("Pobieram jsona z kablami i menu position");
      },
      (error) => {
        console.log(error);
      }
      );
      this.loading = false;
    }
    
}
