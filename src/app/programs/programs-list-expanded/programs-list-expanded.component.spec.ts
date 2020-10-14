import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramsListExpandedComponent } from './programs-list-expanded.component';

describe('ProgramsListExpandedComponent', () => {
  let component: ProgramsListExpandedComponent;
  let fixture: ComponentFixture<ProgramsListExpandedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgramsListExpandedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramsListExpandedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
