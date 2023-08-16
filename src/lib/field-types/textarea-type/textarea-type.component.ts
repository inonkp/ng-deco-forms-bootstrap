import { ChangeDetectionStrategy, Component, Inject, InjectionToken, Optional } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FIELD_CONFIG_TOKEN, FIELD_FORM_CONTROL_TOKEN } from 'ng-deco-forms';

export type TextAreaConfig = {
  rows?: number;
}

@Component({ 
  selector: 'deco-textarea-type',
  templateUrl: './textarea-type.component.html',
  changeDetection: ChangeDetectionStrategy.Default,
})
export class TextAreaTypeComponent {
 
  constructor(@Inject(FIELD_FORM_CONTROL_TOKEN) public control: FormControl,
  @Optional() @Inject(FIELD_CONFIG_TOKEN) public config: TextAreaConfig) {

  }
}