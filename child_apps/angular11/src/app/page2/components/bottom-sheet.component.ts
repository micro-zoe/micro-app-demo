import {Component} from '@angular/core';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material/bottom-sheet';

/**
 * @title Bottom Sheet Overview
 */
@Component({
  selector: 'app-component-material-bottom-sheet',
  templateUrl: 'bottom-sheet.component.html',
})
export class BottomSheetComponent {
  constructor(private _bottomSheet: MatBottomSheet) {}

  openBottomSheet(): void {
    this._bottomSheet.open(BottomSheetComponentSheet);
  }
}

@Component({
  selector: 'app-component-material-bottom-sheet-sheet',
  templateUrl: 'bottom-sheet-example.component.html'
})
export class BottomSheetComponentSheet {
  constructor(private _bottomSheetRef: MatBottomSheetRef<BottomSheetComponentSheet>) {}

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }
}
