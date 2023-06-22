import { Directive, ElementRef, Inject, InjectionToken, Optional } from '@angular/core';
import { FormControl, FormControlDirective } from '@angular/forms';
import { FIELD_PROP_KEY_TOKEN } from 'ng-deco-forms';

@Directive({
  selector: 'input,textarea,select'
})
export class IdDirective {

  constructor(@Inject(FIELD_PROP_KEY_TOKEN) private fieldKey: string, private elementRef: ElementRef) { 
    elementRef.nativeElement.id = fieldKey + "-id";

  }

}
