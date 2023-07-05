import { ChangeDetectionStrategy, Component, Inject, InjectionToken } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FIELD_FORM_CONTROL_TOKEN } from 'ng-deco-forms';

@Component({ 
  selector: 'deco-checkbox-type',
  templateUrl: './checkbox-type.component.html',
  changeDetection: ChangeDetectionStrategy.Default,
})
export class CheckboxTypeComponent {

  constructor(@Inject(FIELD_FORM_CONTROL_TOKEN) public control: FormControl) {

  }

}
