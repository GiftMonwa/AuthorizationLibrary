import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { DeletePopupComponent } from './delete-popup/delete-popup.component';
import { ViewPopupComponent } from './view-popup/view-popup.component';

@Injectable({
  providedIn: 'root'
})
export class PermissionServiceService implements OnInit {
  perm:any;
  id="4577";     //The cookie value
  constructor(public dialog: MatDialog,private httpClient:HttpClient) {
    this.httpClient.post("http://localhost:3333/graphql",{query:'query { authorization(id:'+JSON.stringify(this.id)+') { companyId, userRole } }'})
    .subscribe(data=>{
      //alert(JSON.stringify(data));
      this.perm=data;
    });
  }

  ngOnInit():void
  {
    //this.perm=this.getPermission();
    console.log("WE GOT HERE");
  }

  /*display():void
  {
    console.log(this.perm.data.authorization.userRole);
  }*/

  getRole():string
  {
    return this.perm.data.authorization.userRole;
  }

  viewError()   //The error popUp
  {
    this.dialog.open(ViewPopupComponent);
  }

  deleteError()
  {
    this.dialog.open(DeletePopupComponent);
  }

  getCompanyId():string
  {
    return this.perm.data.authorization.companyId;
  }

  getPermission()
  {
    return this.httpClient.get("http://localhost:3000/User")
  }

}
