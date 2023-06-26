import { Component, inject, Inject, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DataParentEntity, FIELD_CONFIG_TOKEN, FIELD_FORM_CONTROL_TOKEN } from 'ng-deco-forms';
import { Observable, of } from 'rxjs';

export type NestedSelectConfig = {
  options$: Observable<DataParentEntity[]>,
  level: number
}

@Component({
  selector: 'lib-nested-dropdown',
  templateUrl: './nested-dropdown.component.html',
  styleUrls: ['./nested-dropdown.component.css'],
  providers: [
    {
      provide: FIELD_CONFIG_TOKEN,
      useFactory: () => {
        const config = inject(FIELD_CONFIG_TOKEN, {skipSelf: true, optional: true});
        return {
          ...config,
          level: config.level >= 0 ? config.level + 1 : 0
        }
      }
    }
  ]
})
export class NestedDropdownComponent implements OnInit {

  @Input('options') options: DataParentEntity[];
  
  options$: Observable<DataParentEntity[]>;

  constructor(@Inject(FIELD_FORM_CONTROL_TOKEN) public control: FormControl,
  @Inject(FIELD_CONFIG_TOKEN) public config: NestedSelectConfig) {

  }

  ngOnInit() {
    this.options$ = this.config.level == 0 ? this.config.options$ : of(this.options);
  }

  moveToTheRight(popperOptions: any) {

    const options =  {
      ...popperOptions,
      placement: 'right-start'
    }
    return options
  }

  stayOnBotton(popperOptions: any) {
    return popperOptions;
  }
}
