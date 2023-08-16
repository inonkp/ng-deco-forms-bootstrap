import { Component, inject, Inject, InjectionToken, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DataParentEntity, FIELD_CONFIG_TOKEN, FIELD_FORM_CONTROL_TOKEN } from 'ng-deco-forms';
import { BehaviorSubject, map, Observable, of, Subject, take, tap } from 'rxjs';
import { NestedDropdownDirective } from './nested-dropdown.directive';

export type NestedSelectConfig = {
  options$: Observable<DataParentEntity[]>,
  placeholder: string,
  level: number;
}

const DROPDOWN_LABEL_SUBJECT = new InjectionToken<Subject<string>>('dropdown-label-subject');
const CHILDREN_COUNTER_REF = new InjectionToken<{count: number}>('children-counter-ref');

@Component({
  selector: 'lib-nested-dropdown',
  templateUrl: './nested-dropdown.component.html',
  styleUrls: ['./nested-dropdown.component.scss'],
  providers: [
    {
      provide: CHILDREN_COUNTER_REF, useFactory:() => {
        return {count: 0}
      }
    },
    {
      provide: FIELD_CONFIG_TOKEN,
      useFactory: () => {
        const config: NestedSelectConfig = {
          ...inject(FIELD_CONFIG_TOKEN, {skipSelf: true, optional: true})
        };
        if(config.level > 0) {
          const childrenCounterRef = inject(CHILDREN_COUNTER_REF, {skipSelf: true});
          const index = childrenCounterRef.count;
          console.log('index', index);
          let optLength = 0;
          const s = config.options$.pipe(
            take(1),
            tap((options) => config.placeholder = options[index]?.name ?? ''),
            tap((options) => optLength = options.length),
          ).subscribe();
          config.options$ = config.options$.pipe(
            map(options => options[index]?.children ?? [])
          );
          childrenCounterRef.count = (childrenCounterRef.count + 1) % optLength;
        }
        
        return {
          ...config,
          level: config.level ? config.level + 1 : 1
        }
      }
    },
    {
      provide: DROPDOWN_LABEL_SUBJECT,
      useFactory: () => {
        const placeholder = inject(FIELD_CONFIG_TOKEN, {skipSelf: true})?.placeholder ?? '';
        const subject = inject<Subject<string>>(DROPDOWN_LABEL_SUBJECT, {optional: true, skipSelf: true}) 
          ?? new BehaviorSubject<string>(placeholder);
        return subject;
      }
    }
  ]
})
export class NestedDropdownComponent implements OnInit {
  
  get label() {
    return this.config.placeholder;
  }
  
  get options$() {
    return this.config.options$;
  }

  get level() {
    return this.config.level;
  }

  label$: Observable<string>;
  constructor(@Inject(FIELD_FORM_CONTROL_TOKEN) public control: FormControl,
  @Inject(FIELD_CONFIG_TOKEN) public config: NestedSelectConfig,
  @Inject(DROPDOWN_LABEL_SUBJECT) public labelSubject: Subject<string>) {

  }

  ngOnInit() {
    this.label$ = this.level != 0 ? of(this.label) :  this.labelSubject.asObservable();
  }

}
