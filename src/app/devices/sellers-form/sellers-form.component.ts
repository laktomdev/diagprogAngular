import { Component, OnInit, OnDestroy, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { Seller } from 'src/app/models/seller';
import { MatSelect } from '@angular/material';
import { FormControl } from '@angular/forms';
import { Subject, ReplaySubject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { SellersService } from 'src/app/services/sellers.service';
import { DevicesService } from 'src/app/services/devices.service';

@Component({
  selector: 'app-sellers-form',
  templateUrl: './sellers-form.component.html',
  styleUrls: ['./sellers-form.component.scss']
})
export class SellersFormComponent  implements OnInit, OnDestroy {

  @Input() selectedSellerUserId: number;
  @Input() deviceId: number;
  @Output() refreshListEmitter = new EventEmitter<number>();

  constructor(private sS: SellersService, private dS: DevicesService) {}

  sellers: Seller[] = [];
  @ViewChild('singleSelect',  {static: false}) singleSelect: MatSelect;

  public sellerCtrl: FormControl = new FormControl();
  public sellerFilterCtrl: FormControl = new FormControl();

  private onDestroy = new Subject<void>();
  public filteredSellers: ReplaySubject<Seller[]> = new ReplaySubject<
  Seller[]
>(1);

  submitted = false;
  changed = false;



  ngOnInit() {
    this.sS.getAll().subscribe(
      data => {
        this.sellers = data;

        // load select initial value
        this.sellerCtrl.setValue(this.sellers.find(i => i.userId === this.selectedSellerUserId));
        // load the initial customers list
        this.filteredSellers.next(this.sellers.slice());

        // listen for search field value changes
        this.sellerFilterCtrl.valueChanges
          .pipe(takeUntil(this.onDestroy))
          .subscribe(() => {
            this.filterSellers();
          });

        this.sellerCtrl.valueChanges.subscribe(() => {
              this.changed = true;
            }

        );
      },
      error => {
        console.log(error);
      }
    );
  }
  ngOnDestroy() {
    this.onDestroy.next();
    this.onDestroy.complete();
  }

  onSubmit()  {
    if (this.submitted) {
      this.dS.changeDeviceSeller(this.deviceId, this.sellerCtrl.value.userId).subscribe(
        () => this.refreshListEmitter.emit(this.deviceId)
      );
    }
  }

  cancelEdit() {
    this.sellerCtrl.setValue(this.sellers.find(i => i.userId === this.selectedSellerUserId));
    this.changed = false;
  }

  private filterSellers() {
    if (!this.sellers) {
      return;
    }
    // get the search keyword
    let search = this.sellerFilterCtrl.value;
    if (!search) {
      this.filteredSellers.next(this.sellers.slice());
      return;
    } else {
      search = search.toLowerCase();
    }
    // filter the customers
    this.filteredSellers.next(
      this.sellers.filter(
        customer => customer.name.toLowerCase().indexOf(search) > -1
      )
    );
  }

}
