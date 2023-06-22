import { Component, Inject, InjectionToken } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FIELD_FORM_CONTROL_TOKEN } from 'ng-deco-forms';

@Component({
  selector: 'deco-hidden',
  templateUrl: './hidden.component.html',
  styleUrls: ['./hidden.component.css']
})
export class HiddenComponent {

  constructor(@Inject(FIELD_FORM_CONTROL_TOKEN) public control: FormControl) {

  }

}
