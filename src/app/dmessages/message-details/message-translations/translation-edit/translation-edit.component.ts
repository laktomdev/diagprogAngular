import { Component, OnInit, Input } from '@angular/core';
import { MessageTranslation } from 'src/app/models/messageTranslation';
import { MessagesService } from 'src/app/services/messages.service';

@Component({
  selector: 'app-translation-edit',
  templateUrl: './translation-edit.component.html',
  styleUrls: ['./translation-edit.component.scss']
})
export class TranslationEditComponent implements OnInit {

  @Input() translation: MessageTranslation;

  constructor(private mS: MessagesService) { }

  ngOnInit() {
  }

  onSubmit()  {
    console.log(this.translation.headerText);
    this.mS.editTranslation(this.translation).subscribe();
  }

}
