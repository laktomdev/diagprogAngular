import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SellersFormComponent } from './sellers-form.component';

describe('SellersFormComponent', () => {
  let component: SellersFormComponent;
  let fixture: ComponentFixture<SellersFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellersFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellersFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
