import { Component, OnInit, OnDestroy, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { Customer } from 'src/app/models/customer';
import { CustomersService } from '../services/customers.service';
import { FormControl } from '@angular/forms';
import { takeUntil } from 'rxjs/operators';
import { Subject, ReplaySubject } from 'rxjs';
import { MatSelect } from '@angular/material';

@Component({
  selector: 'app-customers-form',
  templateUrl: './customers-form.component.html',
  styleUrls: ['./customers-form.component.scss']
})
export class CustomersFormComponent
  implements OnInit, OnDestroy {

  @Input() selectedCustomerId: number;
  @Output() customerChange = new EventEmitter<Customer>();

  constructor(private cS: CustomersService) {}

  customers: Customer[] = [];
  @ViewChild('singleSelect',  {static: false}) singleSelect: MatSelect;

  public customerCtrl: FormControl = new FormControl();
  public customerFilterCtrl: FormControl = new FormControl();

  private onDestroy = new Subject<void>();
  public filteredCustomers: ReplaySubject<Customer[]> = new ReplaySubject<
    Customer[]
  >(1);

  submitted = false;
  changed = false;

  passCustomerToDeviceInfoComponent(value: Customer) {
    console.log('customer changed sent to device-info-component');
    this.customerChange.emit(value);
  }

  ngOnInit() {
    this.cS.getAll().subscribe(
      data => {
        this.customers = data;

        // load select initial value
        this.customerCtrl.setValue(this.customers.find(i => i.id === this.selectedCustomerId));
        // load the initial customers list
        this.filteredCustomers.next(this.customers.slice());

        // listen for search field value changes
        this.customerFilterCtrl.valueChanges
          .pipe(takeUntil(this.onDestroy))
          .subscribe(() => {
            this.filterCustomers();
          });

        this.customerCtrl.valueChanges.subscribe(() => {
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
      this.passCustomerToDeviceInfoComponent(this.customerCtrl.value);
    }
  }

  cancelEdit() {
    this.customerCtrl.setValue(this.customers.find(i => i.id === this.selectedCustomerId));
    this.changed = false;
    this.passCustomerToDeviceInfoComponent(this.customerCtrl.value);
  }

  private filterCustomers() {
    if (!this.customers) {
      return;
    }
    // get the search keyword
    let search = this.customerFilterCtrl.value;
    if (!search) {
      this.filteredCustomers.next(this.customers.slice());
      return;
    } else {
      search = search.toLowerCase();
    }
    // filter the customers
    this.filteredCustomers.next(
      this.customers.filter(
        customer => customer.name.toLowerCase().indexOf(search) > -1
      )
    );
  }






}
