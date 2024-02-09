import { FormGroup } from '@angular/forms';
import {
  ActivatedRouteSnapshot,
  CanDeactivateFn,
  RouterStateSnapshot,
} from '@angular/router';

export const formGuard: CanDeactivateFn<any> = (
  component: any,
  currentRoute: ActivatedRouteSnapshot,
  currentState: RouterStateSnapshot,
  nextState: RouterStateSnapshot
) => {
  const form = Object.getOwnPropertyNames(component).map((item: string) => {
    return {
      isForm: component[item] instanceof FormGroup,
      props: item,
    };
  });
  if (form.find((item) => item.isForm)) {
    const props = form.find((item) => item.isForm)?.props ?? '';
    if (component[props].dirty) {
      return confirm('Deseja realmente sair do formulário?');
    }
  }
  return true;
};
