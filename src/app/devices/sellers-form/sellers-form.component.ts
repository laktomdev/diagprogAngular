import { Component, OnInit, OnDestroy, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { SellersService } from '../services/sellers.service';
import { Seller } from 'src/app/models/seller';
import { MatSelect } from '@angular/material';
import { FormControl } from '@angular/forms';
import { Subject, ReplaySubject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-sellers-form',
  templateUrl: './sellers-form.component.html',
  styleUrls: ['./sellers-form.component.scss']
})
export class SellersFormComponent  implements OnInit, OnDestroy {

  @Input() selectedSellerUserId: number;
  @Output() customerChange = new EventEmitter<Seller>();

  constructor(private sS: SellersService) {}

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

  passSellerToParent(value: Seller) {
    this.customerChange.emit(value);
  }

  ngOnInit() {
    this.sS.getAll().subscribe(
      data => {
        this.sellers = data;
        console.log(this.sellers);
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
      this.passSellerToParent(this.sellerCtrl.value);
    }
  }

  cancelEdit() {
    this.sellerCtrl.setValue(this.sellers.find(i => i.userId === this.selectedSellerUserId));
    this.changed = false;
    this.passSellerToParent(this.sellerCtrl.value);
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
