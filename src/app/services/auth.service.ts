import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  
  onLogin(email, value): boolean {
    return (
      email.value === "master@lemoncode.net" &&
      password.value === "12345678"
    );
  }
}
