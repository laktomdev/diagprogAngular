import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { MatPaginator, MatSort} from '@angular/material';
import { MatTableDataSource} from '@angular/material';
import { Program } from '../../models/program';
    import { ProgramsService } from '../../services/programs.service';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {MatExpansionModule} from '@angular/material/expansion';
import { PricingInfo } from 'src/app/models/pricingInfo';

@Component({
  selector: 'app-programs-list-expanded',
  templateUrl: './programs-list-expanded.component.html',
  styleUrls: ['./programs-list-expanded.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed',
       animate('125ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class ProgramsListExpandedComponent implements AfterViewInit {
  constructor(private pS : ProgramsService) { }
 
  
  displayedColumns = [
    'id',
    'name',
    'programIdent',
    'isActive',
    'createDate'
   // 'programPackages',
    //'menuPositions',
  

  ];
  expandedElement: Program | null;
  dataSource: MatTableDataSource<Program>;
  @Input() programs: Program[];
  @Input() programsDetails: PricingInfo[];   
  @Input() expandId: number;

  @Output() refreshListEmitter = new EventEmitter<number>(); 

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

  refreshListTriggered(programIdent: number) {
      this.refreshListEmitter.emit(programIdent);
  }
  
  refreshFilterTriggered(newDataSource: MatTableDataSource<Program>) {
      this.dataSource.filter = newDataSource.filter;
  }

  sortingDataAccessor(item, property) {
    if (property.includes('.')) {

      const t =  property
        .split('.')
        .reduce((object, key) => object[key] || '', item);

      console.log(t);
      return t;
    }
    return item[property];
  }

 ngOnChanges(changes: SimpleChanges) {
  if (!this.dataSource) {
   
    this.dataSource = new MatTableDataSource<Program>(this.programs);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;


  } else {
    this.dataSource.data = this.programs;
  }

  if (this.expandId) {
    this.expandedElement = this.dataSource.data.find(
      x => x.id === this.expandedElement.id
    );
  }
}
}
