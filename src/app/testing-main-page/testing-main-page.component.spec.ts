/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TestingMainPageComponent } from './testing-main-page.component';

describe('TestingMainPageComponent', () => {
  let component: TestingMainPageComponent;
  let fixture: ComponentFixture<TestingMainPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestingMainPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestingMainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
