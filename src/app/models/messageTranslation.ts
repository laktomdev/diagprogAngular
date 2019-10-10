import { Time } from '@angular/common';
import { Language } from './language';

export interface MessageTranslation {
  messageId: number;
  isDefault: boolean;
  headerText: string;
  bodyText: string;
  footerText: string;
  language: Language;
}
