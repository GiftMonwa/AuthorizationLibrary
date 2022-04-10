import { DeletePopupComponent } from './delete-popup/delete-popup.component';
import { ViewPopupComponent } from './view-popup/view-popup.component';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Graduates';
  constructor(public dialog: MatDialog){}
  viewPopup()
  {
    this.dialog.open(ViewPopupComponent);
  }

  DeletePopup()
  {
    this.dialog.open(DeletePopupComponent);
  }
}
