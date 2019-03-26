import { Injectable } from '@angular/core';
import {resolve} from 'q';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loggedIn = false;

  logIn(){
    this.loggedIn = true;
  }

  logOut(){
  this.loggedIn = false;
  }

  isAdmin(){
    const isUserAdmin = new Promise(
      (resolve, reject) => {
        resolve(this.loggedIn);

      });

    return isUserAdmin;

  }
}
