import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceListCheckboxedComponent } from './device-list-checkboxed.component';

describe('DeviceListCheckboxedComponent', () => {
  let component: DeviceListCheckboxedComponent;
  let fixture: ComponentFixture<DeviceListCheckboxedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeviceListCheckboxedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceListCheckboxedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
