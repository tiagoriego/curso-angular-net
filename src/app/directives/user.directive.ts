import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { User } from '../interfaces/user-token';

@Directive({
  selector: '[appUser]',
})
export class UserDirective {
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef
  ) {}

  @Input() set appUser(user: User | null) {
    if (user) {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainerRef.clear();
    }
  }
}
