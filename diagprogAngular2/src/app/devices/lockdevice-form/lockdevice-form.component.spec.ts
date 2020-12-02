import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LockdeviceFormComponent } from './lockdevice-form.component';

describe('LockdeviceFormComponent', () => {
  let component: LockdeviceFormComponent;
  let fixture: ComponentFixture<LockdeviceFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LockdeviceFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LockdeviceFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
