import { ChangeDetectionStrategy, Component, Inject, InjectionToken } from '@angular/core';
import { FIELD_CONFIG_TOKEN } from 'ng-deco-forms';

type TitleConfig = {
  title: string;
}

@Component({ 
  selector: 'deco-field-title-wrapper',
  templateUrl: './field-title-wrapper.component.html',
  styleUrls: ['./field-title-wrapper.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FieldTitleWrapperComponent {

  constructor(
    @Inject(FIELD_CONFIG_TOKEN) public config: TitleConfig
  ) {
  }
}
