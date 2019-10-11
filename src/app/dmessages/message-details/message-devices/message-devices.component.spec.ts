import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageDevicesComponent } from './message-devices.component';

describe('MessageDevicesComponent', () => {
  let component: MessageDevicesComponent;
  let fixture: ComponentFixture<MessageDevicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageDevicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageDevicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
