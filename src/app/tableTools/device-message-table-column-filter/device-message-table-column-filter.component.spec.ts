import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceMessageTableColumnFilterComponent } from './device-message-table-column-filter.component';

describe('DeviceMessageTableColumnFilterComponent', () => {
  let component: DeviceMessageTableColumnFilterComponent;
  let fixture: ComponentFixture<DeviceMessageTableColumnFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeviceMessageTableColumnFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceMessageTableColumnFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
