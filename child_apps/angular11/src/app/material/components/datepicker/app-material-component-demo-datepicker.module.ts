import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

import { DateRangePickerComparisonExample } from './date-range-picker-comparison/date-range-picker-comparison-example';
import { DateRangePickerFormsExample } from './date-range-picker-forms/date-range-picker-forms-example';
import { DateRangePickerOverviewExample } from './date-range-picker-overview/date-range-picker-overview-example';
import { DateRangePickerSelectionStrategyExample } from './date-range-picker-selection-strategy/date-range-picker-selection-strategy-example';
import { DatepickerActionsExample } from './datepicker-actions/datepicker-actions-example';
import { DatepickerApiExample } from './datepicker-api/datepicker-api-example';
import { DatepickerColorExample } from './datepicker-color/datepicker-color-example';
import { DatepickerCustomHeaderExample } from './datepicker-custom-header/datepicker-custom-header-example';
import { ExampleHeader } from './datepicker-custom-header/datepicker-custom-header-example';
import { DatepickerCustomIconExample } from './datepicker-custom-icon/datepicker-custom-icon-example';
import { DatepickerDateClassExample } from './datepicker-date-class/datepicker-date-class-example';
import { DatepickerDisabledExample } from './datepicker-disabled/datepicker-disabled-example';
import { DatepickerEventsExample } from './datepicker-events/datepicker-events-example';
import { DatepickerFilterExample } from './datepicker-filter/datepicker-filter-example';
import { DatepickerFormatsExample } from './datepicker-formats/datepicker-formats-example';
import { DatepickerLocaleExample } from './datepicker-locale/datepicker-locale-example';
import { DatepickerMinMaxExample } from './datepicker-min-max/datepicker-min-max-example';
import { DatepickerMomentExample } from './datepicker-moment/datepicker-moment-example';
import { DatepickerOverviewExample } from './datepicker-overview/datepicker-overview-example';
import { DatepickerStartViewExample } from './datepicker-start-view/datepicker-start-view-example';
import { DatepickerTouchExample } from './datepicker-touch/datepicker-touch-example';
import { DatepickerValueExample } from './datepicker-value/datepicker-value-example';
import { DatepickerViewsSelectionExample } from './datepicker-views-selection/datepicker-views-selection-example';
import { MaterialComponentDemoDatepicker } from './app-material-component-demo-datepicker';

@NgModule({
  declarations: [
    DateRangePickerComparisonExample,
    DateRangePickerFormsExample,
    DateRangePickerOverviewExample,
    DateRangePickerSelectionStrategyExample,
    DatepickerActionsExample,
    DatepickerApiExample,
    DatepickerColorExample,
    DatepickerCustomHeaderExample,
    ExampleHeader,
    DatepickerCustomIconExample,
    DatepickerDateClassExample,
    DatepickerDisabledExample,
    DatepickerEventsExample,
    DatepickerFilterExample,
    DatepickerFormatsExample,
    DatepickerLocaleExample,
    DatepickerMinMaxExample,
    DatepickerMomentExample,
    DatepickerOverviewExample,
    DatepickerStartViewExample,
    DatepickerTouchExample,
    DatepickerValueExample,
    DatepickerViewsSelectionExample,
    MaterialComponentDemoDatepicker,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatMomentDateModule,
    MatButtonModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
  ],
  exports: [MaterialComponentDemoDatepicker],
})
export class MaterialComponentDemoDatepickerModule { }
