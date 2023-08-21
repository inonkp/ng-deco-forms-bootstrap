import { Component, DestroyRef, inject, Inject, InjectionToken, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DataEntity, DataParentEntity, FIELD_CONFIG_TOKEN, FIELD_FORM_CONTROL_TOKEN } from 'ng-deco-forms';
import { BehaviorSubject, concat, concatMap, defaultIfEmpty, exhaustMap, iif, map, Observable, of, pipe, Subject, switchMap, take, takeUntil, tap } from 'rxjs';
import { DESTORY_OBSERVABLE } from '../../deco-forms-bootstrap.module';

export type NestedSelectConfig = {
  options$: Observable<DataParentEntity[]>,
  placeholder: string,
  level: number;
  option?: DataEntity;
}

const SELECTED_OPTION = new InjectionToken<Subject<DataEntity>>('dropdown-label-subject');
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
          let optLength = 0;
          const s = config.options$.pipe(
            take(1),
            tap((options) => config.option = options[index]),
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
      provide: SELECTED_OPTION,
      useFactory: () => {
        const subject = inject<Subject<DataEntity>>(SELECTED_OPTION, {optional: true, skipSelf: true}) ?? new Subject();
        return subject;
      }
    }
  ]
})
export class NestedDropdownComponent implements OnInit {
  
  get nested() {
    return this.config.level > 1;
  }

  private get label() {
    return this.config.option?.name;
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
  @Inject(SELECTED_OPTION) public option$: Subject<DataEntity>) {
    option$.pipe(
      tap((option) => this.control.setValue(option.id)),
      takeUntil(inject(DESTORY_OBSERVABLE))
    ).subscribe();
  }

  ngOnInit() {
    const option$ = this.option$.pipe(
      map((option) => option.name),
    );
    const placeholder$ = new BehaviorSubject(this.config.placeholder).pipe(
      take(1),
    )
    const name$ = of(this.label)
    this.label$ =  iif(() => this.nested, name$, concat(placeholder$, option$));
  }

  onClick() {
    if(this.nested) {
      this.option$.next(this.config.option)
    }
  }
}
