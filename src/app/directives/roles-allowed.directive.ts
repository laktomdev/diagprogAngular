import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Directive({
  selector: '[appIfRoles]'
})
export class RolesAllowedDirective {

  jwtHelper = new JwtHelperService();

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef) { }

  @Input() set appIfRoles(roleNames: string) {
   const roles = roleNames.split(',');
   const roleInToken = this.jwtHelper.decodeToken(
     localStorage.getItem('token')
   ).role;

   if (roles.includes(roleInToken)) {
       this.viewContainer.createEmbeddedView(this.templateRef);
   } else {
     this.viewContainer.clear();
   }
  }


}
