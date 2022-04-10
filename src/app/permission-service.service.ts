import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PermissionServiceService {

  constructor(private httpClient:HttpClient) { }
  getViewPermission()
  {
    //cont View=
    return this.httpClient.get("http://localhost:3000/User");
  }

  getEditPermission()
  {
  }

  getDeletePermission()
  {
  }
}
