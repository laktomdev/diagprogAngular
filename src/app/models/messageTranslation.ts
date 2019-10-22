import { Language } from './language';

export interface MessageTranslation {
  id: number;
  messageId: number;
  isDefault: boolean;
  headerText: string;
  bodyText: string;
  footerText: string;
  language: Language;
  isNew: boolean;
}
