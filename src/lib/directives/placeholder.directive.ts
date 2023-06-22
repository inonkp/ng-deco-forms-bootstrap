import { Directive, ElementRef, Inject, InjectionToken, Optional } from '@angular/core';
import { LabelConfig } from '../wrappers/field-label-wrapper/field-label-wrapper.component';

const PLACEHOLDER_FACTORY_TOKEN = new InjectionToken<Function>('placeholder-factory');

@Directive({
  selector: 'input,textarea'
})
export class PlaceholderDirective {

  constructor(@Optional() @Inject(PLACEHOLDER_FACTORY_TOKEN) private factory: Function = () => '', private elementRef: ElementRef) {
    elementRef.nativeElement.setAttribute('placeholder', factory?.() ?? '')
  }

}
