import { ValidatorFn, Validators } from "@angular/forms";
import { inject } from '@angular/core';
import { chain, Class, Prop, Wrap, addValidator, DataEntity, Validator, Provide, PropFactory, FIELD_CONFIG_TOKEN, targetConfig, FIELD_CHANGE_TRACKING_TOKEN, FORM_SUBMIT_TOKEN, DataParentEntity } from "ng-deco-forms";
import { Observable, of } from "rxjs";
import { FieldLabelWrapperComponent, LabelConfig } from "./wrappers/field-label-wrapper/field-label-wrapper.component";
import { NumberTypeComponent } from "./field-types/number-type/number-type.component";
import { SelectTypeComponent } from "./field-types/select-type/select-type.component";
import { FieldHintWrapperComponent } from "./wrappers/field-hint-wrapper/field-hint-wrapper.component";
import { FieldTitleWrapperComponent } from "./wrappers/field-title-wrapper/field-title-wrapper.component";
import { CheckboxLabelWrapperComponent } from "./wrappers/checkbox-label-wrapper/checkbox-label-wrapper.component";
import { HideFieldWrapperComponent } from "./wrappers/hide-field-wrapper/hide-field-wrapper.component";
import { SubmitComponent } from "./submit/submit.component";
import { LABEL_TOKEN } from './directives/select-placeholder.directive';
import { NestedDropdownComponent } from "./field-types/nested-dropdown/nested-dropdown.component";
export const Max = (max: number) => chain([Prop(NumberTypeComponent, 'max', max), addValidator(Validators.max(max))])
export const Min = (min: number) => chain([Prop(NumberTypeComponent, 'min', min), addValidator(Validators.min(min + 0.1))])
export const Step = (step: number) => Prop(NumberTypeComponent, 'step', step);
export const Tooltip = (tooltip: string) => Prop(FieldLabelWrapperComponent, 'tooltip', tooltip);
export const Options = (options: DataEntity[]) => Prop(SelectTypeComponent, 'options$', of(options));
export const Label = (label: string) => chain([
    Wrap(FieldLabelWrapperComponent), 
    Prop(FieldLabelWrapperComponent,'label', label),
    Provide({
        provide: LABEL_TOKEN,
        useFactory: () => inject<LabelConfig>(targetConfig(FieldLabelWrapperComponent), {skipSelf: true}).label
    })
])
export const CheckLabel = (label: string) => chain([Wrap(CheckboxLabelWrapperComponent), Prop(CheckboxLabelWrapperComponent,'label', label)])
export const Hint = (hint: string) => chain([Wrap(FieldHintWrapperComponent), Prop(FieldHintWrapperComponent, 'hint', hint)])
export const Title = (title: string) => chain([Wrap(FieldTitleWrapperComponent), Prop(FieldTitleWrapperComponent, 'title', title)])
// export const Placehodler = (placeholder: string) => Value('placeholder', placeholder);
export const Half = Class('etsy-form-field-container-45')
export const Third = Class('etsy-form-field-container-35')
export const TwoThirds = Class('etsy-form-field-container-60')
export const Quarter = Class('etsy-form-field-container-20')

export const Hide = (factoryFunc: () => Observable<boolean>) => chain([Wrap(HideFieldWrapperComponent), PropFactory(HideFieldWrapperComponent, 'hide$', factoryFunc)])
export const Warn = (factoryFunc: () => Observable<string>) => PropFactory(FieldLabelWrapperComponent, 'warning$', factoryFunc)

export const Required = Validator(Validators.required);

export const Row = Class('deco-group-row');
export const Action = (action: string) => Prop(SubmitComponent, 'label', action);
export const BtnClass = (cls: string) => Prop(SubmitComponent, 'btnClass', cls);
export const Submit = (func: () => (() => void)) => Provide({provide: FORM_SUBMIT_TOKEN, useFactory: func});

export const DropOptions = (fact: () => Observable<DataParentEntity[]>) => PropFactory(NestedDropdownComponent, 'options$', fact);