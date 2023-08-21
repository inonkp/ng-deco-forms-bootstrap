import { CommonModule } from '@angular/common';
import { DestroyRef, InjectionToken, NgModule, inject } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DecoFormsLibModule } from 'ng-deco-forms';
import { ForDirective } from './directives/for.directive';
import { IdDirective } from './directives/id.directive';
import { PlaceholderDirective } from './directives/placeholder.directive';
import { SelectPlaceholderDirective } from './directives/select-placeholder.directive';
import { CheckboxTypeComponent } from './field-types/checkbox-type/checkbox-type.component';
import { HiddenComponent } from './field-types/hidden/hidden.component';
import { NumberTypeComponent } from './field-types/number-type/number-type.component';
import { SelectTypeComponent } from './field-types/select-type/select-type.component';
import { TextTypeComponent } from './field-types/text-type/text-type.component';
import { TextAreaTypeComponent } from './field-types/textarea-type/textarea-type.component';
import { ErrorPipe } from './pipes/error.pipe';
import { SubmitComponent } from './submit/submit.component';
import { CheckboxLabelWrapperComponent } from './wrappers/checkbox-label-wrapper/checkbox-label-wrapper.component';
import { FieldLabelWrapperComponent } from './wrappers/field-label-wrapper/field-label-wrapper.component';
import { TooltipsComponent } from './wrappers/field-label-wrapper/tooltips/tooltips.component';
import { HideFieldWrapperComponent } from './wrappers/hide-field-wrapper/hide-field-wrapper.component';
import { NestedDropdownComponent } from './field-types/nested-dropdown/nested-dropdown.component';
import { Subject } from 'rxjs';

export const DESTORY_OBSERVABLE = new InjectionToken<Subject<void>>('destroy-observable');
export const destroyObservableFactory = () => {
    const destroyRef = inject(DestroyRef);
    const destroyed = new Subject<void>();

    destroyRef.onDestroy(() => {
      destroyed.next();
      destroyed.complete();
    });

    return destroyed.asObservable();
}

@NgModule({
  declarations: [
    HideFieldWrapperComponent,
    SubmitComponent,
    SelectTypeComponent,
    TextAreaTypeComponent,
    TextTypeComponent,
    CheckboxTypeComponent,
    NumberTypeComponent,
    HiddenComponent,
    FieldLabelWrapperComponent,
    IdDirective,
    ForDirective,
    PlaceholderDirective,
    CheckboxLabelWrapperComponent,
    SelectPlaceholderDirective,
    TooltipsComponent,
    ErrorPipe,
    NestedDropdownComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DecoFormsLibModule,
    NgbModule
  ],
  exports: [
    HideFieldWrapperComponent,
    SubmitComponent,
    SelectTypeComponent,
    TextAreaTypeComponent,
    TextTypeComponent,
    CheckboxTypeComponent,
    NumberTypeComponent,
    NestedDropdownComponent,
    HiddenComponent,
    FieldLabelWrapperComponent,
    CheckboxLabelWrapperComponent,
    IdDirective,
    ForDirective,
    PlaceholderDirective,
    SelectPlaceholderDirective,
    ErrorPipe,
    DecoFormsLibModule,
    NgbModule
  ],
  providers: [
    { provide: DESTORY_OBSERVABLE, useFactory: destroyObservableFactory}
  ]
})
export class DecoFormsBootstrapModule { }
