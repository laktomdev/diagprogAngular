import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutsideListComponent } from './outside-list.component';

describe('OutsideListComponent', () => {
  let component: OutsideListComponent;
  let fixture: ComponentFixture<OutsideListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutsideListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutsideListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
