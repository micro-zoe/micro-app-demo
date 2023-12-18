import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

import { FormFieldAppearanceExample } from './form-field-appearance/form-field-appearance-example';
import { FormFieldCustomControlExample } from './form-field-custom-control/form-field-custom-control-example';
import { MyTelInput } from './form-field-custom-control/form-field-custom-control-example';
import { FormFieldErrorExample } from './form-field-error/form-field-error-example';
import { FormFieldHintExample } from './form-field-hint/form-field-hint-example';
import { FormFieldLabelExample } from './form-field-label/form-field-label-example';
import { FormFieldOverviewExample } from './form-field-overview/form-field-overview-example';
import { FormFieldPrefixSuffixExample } from './form-field-prefix-suffix/form-field-prefix-suffix-example';
import { FormFieldThemingExample } from './form-field-theming/form-field-theming-example';
import { MaterialComponentDemoFormField } from './app-material-component-demo-form-field';

@NgModule({
  declarations: [
    FormFieldAppearanceExample,
    FormFieldCustomControlExample,
    MyTelInput,
    FormFieldErrorExample,
    FormFieldHintExample,
    FormFieldLabelExample,
    FormFieldOverviewExample,
    FormFieldPrefixSuffixExample,
    FormFieldThemingExample,
    MaterialComponentDemoFormField,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
  ],
  exports: [MaterialComponentDemoFormField],
})
export class MaterialComponentDemoFormFieldModule { }
