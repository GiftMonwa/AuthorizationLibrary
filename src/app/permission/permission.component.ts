import { Component, OnInit } from '@angular/core';
import { PermissionServiceService } from '../permission-service.service';

@Component({
  selector: 'app-permission',
  templateUrl: './permission.component.html',
  styleUrls: ['./permission.component.scss']
})
export class PermissionComponent implements OnInit {

  constructor(private permissionService:PermissionServiceService) { }
  perms:any;
  ngOnInit(): void {
    this.permissionService.getViewPermission().subscribe(data=>{
      this.perms=data;
      console.log(this.perms.userType);
    });
  }

  checkPermission():void
  {
    if(this.perms.userType==="unknown")
    {
      console.log("You are an Uknown User");
      this.displayError();
      //Display the PopUp message
    }
    else{
      if(this.perms.isUserPermitted=="true")
      {
        //Take User to the student Profile
      }
      else{
        //Although user is know they Dont have permission to perform the requsted action
        console.log("You have no permissions here");
        this.displayError();
      }
    }
  }

  displayError()
  {
    let image=document.querySelector('.View')!
    let div=document.querySelector('.Profile')!
    let whole=document.querySelector('html')
    image.setAttribute("style","display:block");
    div.setAttribute("style","display:none");
    div.setAttribute("style","opacity:0.1")
  }

  removeErrorBlock()
  {
    let image=document.querySelector('.View')!
    let div=document.querySelector('.Profile')!
    image.setAttribute("style","display:none");
    div.setAttribute("style","display:block");
  }

}
