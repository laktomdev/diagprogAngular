import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceTableColumnFilterComponent } from './device-table-column-filter.component';

describe('DeviceTableColumnFilterComponent', () => {
  let component: DeviceTableColumnFilterComponent;
  let fixture: ComponentFixture<DeviceTableColumnFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeviceTableColumnFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceTableColumnFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
