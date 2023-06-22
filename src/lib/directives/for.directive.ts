import { Directive, ElementRef, Inject, InjectionToken, Optional } from '@angular/core';
import { FIELD_PROP_KEY_TOKEN } from 'ng-deco-forms';

const LABEL_FOR_FACTORY_TOKEN = new InjectionToken<Function>('label-for-factory');

@Directive({
  selector: 'label'
})
export class ForDirective {

  constructor(@Inject(FIELD_PROP_KEY_TOKEN) private fieldKey: string, private elementRef: ElementRef) { 
    elementRef.nativeElement.setAttribute('for', fieldKey+"-id");

  }

}
