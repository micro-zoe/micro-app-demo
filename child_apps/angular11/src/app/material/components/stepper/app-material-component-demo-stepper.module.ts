import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatStepperModule } from '@angular/material/stepper';

import { StepperEditableExample } from './stepper-editable/stepper-editable-example';
import { StepperErrorsExample } from './stepper-errors/stepper-errors-example';
import { StepperLabelPositionBottomExample } from './stepper-label-position-bottom/stepper-label-position-bottom-example';
import { StepperOptionalExample } from './stepper-optional/stepper-optional-example';
import { StepperOverviewExample } from './stepper-overview/stepper-overview-example';
import { StepperStatesExample } from './stepper-states/stepper-states-example';
import { StepperVerticalExample } from './stepper-vertical/stepper-vertical-example';
import { MaterialComponentDemoStepper } from './app-material-component-demo-stepper';

@NgModule({
  declarations: [
    StepperEditableExample,
    StepperErrorsExample,
    StepperLabelPositionBottomExample,
    StepperOptionalExample,
    StepperOverviewExample,
    StepperStatesExample,
    StepperVerticalExample,
    MaterialComponentDemoStepper,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatStepperModule,
  ],
  exports: [MaterialComponentDemoStepper],
})
export class MaterialComponentDemoStepperModule { }
