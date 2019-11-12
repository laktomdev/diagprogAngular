import { Directive, ElementRef, OnInit, Input, Renderer } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Directive({
  selector: '[appUserRole]'
})
export class UserRoleDirective implements OnInit {

  @Input() roleName: string;
  jwtHelper = new JwtHelperService();

  constructor(private elementRef: ElementRef, private render: Renderer) {
   }

   ngOnInit() {
      const roleInToken = this.jwtHelper.decodeToken(localStorage.getItem('token')).role;
      if (roleInToken !== this.roleName) {
        this.render.setElementStyle(this.elementRef.nativeElement, 'visibility', 'hidden');
      }
    }
}
