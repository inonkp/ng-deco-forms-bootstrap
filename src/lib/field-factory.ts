import { inject } from '@angular/core';
import { NumberTypeComponent } from './field-types/number-type/number-type.component';
import { chain, FIELD_CONFIG_TOKEN, DecoField, Provide } from 'ng-deco-forms'
import { NumberFieldConfig } from './field-types/number-type/number-type.component';
import { SelectConfig, SelectTypeComponent } from './field-types/select-type/select-type.component';
import { TextAreaConfig, TextAreaTypeComponent } from './field-types/textarea-type/textarea-type.component';
import { TextTypeComponent  } from './field-types/text-type/text-type.component';
import { CheckboxTypeComponent } from './field-types/checkbox-type/checkbox-type.component';
import { HiddenComponent } from './field-types/hidden/hidden.component';   
export const Number = (props?: NumberFieldConfig) => DecoField(NumberTypeComponent, props)
export const Hidden = DecoField(HiddenComponent)
export const Text = DecoField(TextTypeComponent)
export const Textarea = (props?: TextAreaConfig) => DecoField(TextAreaTypeComponent, props);
export const Checkbox = DecoField(CheckboxTypeComponent);
// export const Radio = fieldFactory('');

export const Select = (props?: SelectConfig) => DecoField(SelectTypeComponent, props)
