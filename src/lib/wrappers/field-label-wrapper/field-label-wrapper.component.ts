import { ChangeDetectionStrategy, Component,forwardRef, inject, Inject, InjectionToken, Optional } from '@angular/core';
import { FIELD_CONFIG_TOKEN } from 'ng-deco-forms';
import { Observable } from 'rxjs';

export type LabelConfig = {
  label: string;
  tooltip?: string;
  warning$: Observable<string>;
}

@Component({ 
  selector: 'deco-field-label-wrapper',
  templateUrl: './field-label-wrapper.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FieldLabelWrapperComponent {

  constructor(
    @Optional() @Inject(FIELD_CONFIG_TOKEN) public config: LabelConfig
  ) {

  }
}
