import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageTranslationsComponent } from './message-translations.component';

describe('MessageTranslationsComponent', () => {
  let component: MessageTranslationsComponent;
  let fixture: ComponentFixture<MessageTranslationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageTranslationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageTranslationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
