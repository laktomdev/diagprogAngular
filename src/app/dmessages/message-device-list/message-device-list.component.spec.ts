import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageDeviceListComponent } from './message-device-list.component';

describe('MessageDeviceListComponent', () => {
  let component: MessageDeviceListComponent;
  let fixture: ComponentFixture<MessageDeviceListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageDeviceListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageDeviceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
