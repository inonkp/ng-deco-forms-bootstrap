import { Component, Inject, InjectionToken, Input, Optional } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FIELD_FORM_CONTROL_TOKEN } from 'ng-deco-forms';
import { filter, map, Observable, of, tap } from 'rxjs'

type TooltipConfig = {
  tooltip: string,
  warning$: Observable<string>
}

export const FIELD_TOOLTIP_TOKEN = new InjectionToken<TooltipConfig>('field-tooltip');

@Component({
  selector: 'deco-tooltips',
  templateUrl: './tooltips.component.html',
  styleUrls: ['./tooltips.component.scss']
})
export class TooltipsComponent {
  @Input('warning')
  warning$: Observable<string>;

  @Input('tooltip')
  tooltip: string;
  
  get statusChanges() {
    return this.control.statusChanges;
  }

  get errors() {
    return this.control.errors;
  }

  constructor(
    @Optional() @Inject(FIELD_FORM_CONTROL_TOKEN) public control: FormControl,
  ) {
    
  }

  ngOnInit(): void {

  }
}
