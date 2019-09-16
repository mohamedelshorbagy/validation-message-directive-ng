import {
  Directive, Self, OnInit, OnDestroy,
  Inject, ViewContainerRef,
  ComponentFactoryResolver,
  ComponentRef,
  Optional,
  Input
} from '@angular/core';
import { NgControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { FORM_ERROS } from './injection.api';
import { ErrorMessageComponent } from '../error-message/error-message.component';
import { ControlErrorContainerDirective } from './control-container.directive';

@Directive({
  selector: '[formControl], [formControlName], input'
})
export class ValidationMessageDirective implements OnInit, OnDestroy {
  subscription: Subscription = new Subscription();
  ref: ComponentRef<ErrorMessageComponent>;
  container: ViewContainerRef;
  @Input() customErrors = {};

  get controlElm() {
    return this.control.control;
  }

  constructor(
    @Self() private control: NgControl,
    @Inject(FORM_ERROS) private errors,
    private vcr: ViewContainerRef,
    private resolver: ComponentFactoryResolver,
    @Optional() controlErrorContainer: ControlErrorContainerDirective
  ) {
    this.container = controlErrorContainer ? controlErrorContainer.vcr : vcr;
  }


  ngOnInit() {
    this.subscription.add(
      this.controlElm
        .valueChanges
        .subscribe(() => {
          const controlErrors = this.controlElm.errors;
          let dirty = this.control.dirty;
          if (controlErrors && dirty) {
            const firstKey = Object.keys(controlErrors)[0];
            const getError = this.errors[firstKey];
            const text = this.customErrors[firstKey] || getError(controlErrors[firstKey]);
            this.setError(text);
          } else {
            this.setError(null);
          }
        })
    )
  }


  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  setError(text: string) {
    if (!this.ref) {
      const factory = this.resolver.resolveComponentFactory(ErrorMessageComponent);
      this.ref = this.container.createComponent(factory);
    }

    this.ref.instance.text = text;
  }

}
