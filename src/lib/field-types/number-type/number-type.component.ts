import { ChangeDetectionStrategy, Component, Inject, InjectionToken, Optional } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FIELD_CONFIG_TOKEN, FIELD_FORM_CONTROL_TOKEN } from 'ng-deco-forms';

export type NumberFieldConfig = {
  step: number;
  min?: number;
  max?: number;
}
@Component({ 
  selector: 'deco-number-type',
  templateUrl: './number-type.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NumberTypeComponent {

  
  constructor(@Inject(FIELD_FORM_CONTROL_TOKEN) public control: FormControl,
    @Optional() @Inject(FIELD_CONFIG_TOKEN) public config: NumberFieldConfig) {

  }
}
