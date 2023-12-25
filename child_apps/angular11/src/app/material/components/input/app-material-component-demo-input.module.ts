import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

import { InputClearableExample } from './input-clearable/input-clearable-example';
import { InputErrorStateMatcherExample } from './input-error-state-matcher/input-error-state-matcher-example';
import { InputErrorsExample } from './input-errors/input-errors-example';
import { InputFormExample } from './input-form/input-form-example';
import { InputHintExample } from './input-hint/input-hint-example';
import { InputOverviewExample } from './input-overview/input-overview-example';
import { InputPrefixSuffixExample } from './input-prefix-suffix/input-prefix-suffix-example';
import { MaterialComponentDemoInput } from './app-material-component-demo-input';

@NgModule({
  declarations: [
    InputClearableExample,
    InputErrorStateMatcherExample,
    InputErrorsExample,
    InputFormExample,
    InputHintExample,
    InputOverviewExample,
    InputPrefixSuffixExample,
    MaterialComponentDemoInput,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
  ],
  exports: [MaterialComponentDemoInput],
})
export class MaterialComponentDemoInputModule { }
