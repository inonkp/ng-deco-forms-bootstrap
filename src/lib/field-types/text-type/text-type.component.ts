import { ChangeDetectionStrategy, Component, Inject, Optional } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FIELD_FORM_CONTROL_TOKEN } from 'ng-deco-forms';


@Component({ 
  selector: 'deco-text-type',
  templateUrl: './text-type.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextTypeComponent {

  constructor(@Inject(FIELD_FORM_CONTROL_TOKEN) public control: FormControl) {

    
  }
    
  
}
