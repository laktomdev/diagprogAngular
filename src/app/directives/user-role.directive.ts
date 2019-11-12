import { Directive, ElementRef, OnInit, Input, Renderer, Renderer2 } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Directive({
  selector: '[appUserRole]'
})
export class UserRoleDirective implements OnInit {
  @Input() roleNames: string;
  jwtHelper = new JwtHelperService();

  constructor(private elementRef: ElementRef, private render: Renderer2) {}

  ngOnInit() {
    const roles = this.roleNames.split(',');
    const roleInToken = this.jwtHelper.decodeToken(
      localStorage.getItem('token')
    ).role;
    if (!roles.includes(roleInToken)) {
      this.render.setStyle(
        this.elementRef.nativeElement,
        'visibility',
        'hidden'
      );
    }
  }
}
