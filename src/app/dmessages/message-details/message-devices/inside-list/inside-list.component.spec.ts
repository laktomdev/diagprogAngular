import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsideListComponent } from './inside-list.component';

describe('InsideListComponent', () => {
  let component: InsideListComponent;
  let fixture: ComponentFixture<InsideListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsideListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsideListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
