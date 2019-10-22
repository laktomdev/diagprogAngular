import { Component, OnInit, Input, ChangeDetectionStrategy, OnChanges, SimpleChanges } from '@angular/core';
import { MessageTranslation } from 'src/app/models/messageTranslation';
import { MessagesService } from 'src/app/services/messages.service';

@Component({
  selector: 'app-translation-edit',
  templateUrl: './translation-edit.component.html',
  styleUrls: ['./translation-edit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TranslationEditComponent implements OnInit {

  @Input() translation: MessageTranslation;
  oldTranslation: MessageTranslation;

  isChanged = false;
  isNew = false;

  constructor(private mS: MessagesService
    ) {}


  changed() {
    if (JSON.stringify(this.translation) !== JSON.stringify(this.oldTranslation) ) {
      this.isChanged = true;
    } else {
      this.isChanged = false;
    }
  }

  ngOnInit() {
    this.oldTranslation = Object.assign({}, this.translation);
  }

  onSubmit()  {
    this.mS.editTranslation(this.translation).subscribe();
    this.oldTranslation = Object.assign({}, this.translation);
    this.changed();
  }

}
