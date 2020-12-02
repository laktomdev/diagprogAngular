import { AfterViewInit, Component, Input, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { MatPaginator, MatSort} from '@angular/material';
import { MatTableDataSource} from '@angular/material/table';
import { Program } from '../../models/program';
import { ProgramsService } from '../../services/programs.service';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-programs-list-expanded',
  templateUrl: './programs-list-expanded.component.html',
  styleUrls: ['./programs-list-expanded.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class ProgramsListExpandedComponent implements AfterViewInit {
  constructor(private pS : ProgramsService) { }
  @Input() programs: Program[];
   
    
  
  displayedColumns: string[] = [
    'id',
    'name',
    'programIdent',
    'isActive',
    'createDate',
    'programPackages',
    'menuPositions'
  ];
  dataSource: MatTableDataSource<Program>;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  
 
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    
 }
 ngOnChanges(changes: SimpleChanges) {
  if (!this.dataSource) {
   
    this.dataSource = new MatTableDataSource<Program>(this.programs);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;


  } else {
    this.dataSource.data = this.programs;
  }


}
}
