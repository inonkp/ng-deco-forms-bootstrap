import { ChangeDetectionStrategy, Component, Inject, InjectionToken } from '@angular/core';
import { FIELD_CONFIG_TOKEN } from 'ng-deco-forms';

type CheckboxLabel = {
  label: string
};

@Component({ 
  selector: 'deco-checkbox-label-wrapper',
  templateUrl: './checkbox-label-wrapper.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckboxLabelWrapperComponent {

  constructor(
    @Inject(FIELD_CONFIG_TOKEN) public config: CheckboxLabel
  ) {

  }

}
