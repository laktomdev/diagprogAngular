import { Injectable } from '@angular/core';

declare let alertify: any;

@Injectable({
  providedIn: 'root'
})
export class AlertifyService {

  constructor() { }

  confirm(tittle: string, message: string, okCallback: () => any) {
    // tslint:disable-next-line:only-arrow-functions
    alertify.confirm(tittle, message, function(clickEvent) {
      if (clickEvent) {
        okCallback();
      } else { }
    }, null);
  }

  success(message: string) {
    alertify.success(message);
  }

  error(message: string) {
    alertify.error(message);
  }

  warning(message: string) {
    alertify.warning(message);
  }

  message(message: string) {
    alertify.message(message);
  }
}
