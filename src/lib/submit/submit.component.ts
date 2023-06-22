import { ChangeDetectionStrategy, Component, Inject, InjectionToken } from '@angular/core';
import { FIELD_CONFIG_TOKEN } from 'ng-deco-forms';


export type SubmitConfig = {
  label: string;
  btnClass: string;
}
export const SUBMIT_CONFIG_TOKEN = new InjectionToken<SubmitConfig>('field-submit');

@Component({
  selector: 'deco-submit',
  templateUrl: './submit.component.html',
  styleUrls: ['./submit.component.css'],

})
export class SubmitComponent {

  constructor(@Inject(FIELD_CONFIG_TOKEN) public config: SubmitConfig) {

    
  }

  ngAfterViewInit(): void {
    

   }
}
