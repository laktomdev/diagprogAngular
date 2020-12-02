import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceListExpandedComponent } from './device-list-expanded.component';

describe('DeviceListComponent', () => {
  let component: DeviceListExpandedComponent;
  let fixture: ComponentFixture<DeviceListExpandedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeviceListExpandedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceListExpandedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
