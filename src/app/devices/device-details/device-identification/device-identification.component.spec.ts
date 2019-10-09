import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceIdentificationComponent } from './device-identification.component';

describe('DeviceIdentificationComponent', () => {
  let component: DeviceIdentificationComponent;
  let fixture: ComponentFixture<DeviceIdentificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeviceIdentificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceIdentificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
