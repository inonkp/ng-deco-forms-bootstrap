import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Inject, InjectionToken } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataEntity, FIELD_CONFIG_TOKEN, FIELD_FORM_CONTROL_TOKEN } from 'ng-deco-forms';
import { Observable } from 'rxjs';

export type SelectConfig = {
  options$: Observable<DataEntity[]>;
}


@Component({ 
  selector: 'deco-select-type',
  templateUrl: './select-type.component.html',
  styleUrls: ['./select-type.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectTypeComponent {
  
  get valueChange() {
    return this.control.valueChanges;
  }

  constructor(@Inject(FIELD_FORM_CONTROL_TOKEN) public control: FormControl,
    @Inject(FIELD_CONFIG_TOKEN) public config: SelectConfig) {

  }
  
}
