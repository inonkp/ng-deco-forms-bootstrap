import { ChangeDetectionStrategy, Component, Inject, InjectionToken } from '@angular/core';
import { FIELD_CONFIG_TOKEN } from 'ng-deco-forms';

type Hint = {
  hint: string;
}

@Component({ 
  selector: 'deco-field-hint-wrapper',
  templateUrl: './field-hint-wrapper.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FieldHintWrapperComponent{
  constructor(
    @Inject(FIELD_CONFIG_TOKEN) public config: Hint
  ) {
  }
}
