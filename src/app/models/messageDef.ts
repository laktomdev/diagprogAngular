import { Time } from '@angular/common';
import { MessageTranslation } from './messageTranslation';

export interface MessageDef {
  id: number;
  validFrom: Time;
  validTo: Time;
  createDate: Time;
  description: string;
  translationsCount: number;
  translations: MessageTranslation[];
}
