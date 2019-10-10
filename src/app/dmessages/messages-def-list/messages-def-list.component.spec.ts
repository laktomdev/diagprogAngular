import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagesDefListComponent } from './messages-def-list.component';

describe('MessagesDefListComponent', () => {
  let component: MessagesDefListComponent;
  let fixture: ComponentFixture<MessagesDefListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessagesDefListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessagesDefListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
