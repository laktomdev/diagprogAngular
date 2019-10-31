export interface MessageTranslationSubmit {
  id: number;
  messageId: number;
  isDefault: boolean;
  headerText: string;
  bodyText: string;
  footerText: string;
  languageId: number;
}
