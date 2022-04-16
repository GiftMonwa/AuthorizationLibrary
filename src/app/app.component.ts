import { DeletePopupComponent } from './delete-popup/delete-popup.component';
import { ViewPopupComponent } from './view-popup/view-popup.component';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PermissionServiceService } from './permission-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Graduates';
  constructor(public dialog: MatDialog,private serve:PermissionServiceService){}


  viewPopup()
  {
    this.serve.viewError();
  }

  DeletePopup()
  {
    this.serve.deleteError();
  }
}
