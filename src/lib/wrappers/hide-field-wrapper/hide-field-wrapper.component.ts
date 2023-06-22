import { inject, AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, InjectionToken } from '@angular/core';
import { FIELD_CONFIG_TOKEN } from 'ng-deco-forms';
import { map, Observable, of, startWith, tap } from 'rxjs';

type HideFieldConfig = {
  hide$: Observable<boolean>;
}

@Component({
  selector: 'deco-hide-field-wrapper',
  templateUrl: './hide-field-wrapper.component.html',
  styleUrls: ['./hide-field-wrapper.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HideFieldWrapperComponent {

  constructor(
      @Inject(FIELD_CONFIG_TOKEN) public config: HideFieldConfig,
      
    ) { 

  }


}
