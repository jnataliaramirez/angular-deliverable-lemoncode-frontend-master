import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private userName: string = "";
  private userIsConnected: boolean = false;

  constructor() {}

  login(email: string, password: string): boolean {
    if (email === "master@lemoncode.net" && password === "12345678") {
      this.userIsConnected = true;
      return true;
    } else {
      return false;
    }
  }

  logout(): void {
    this.userIsConnected = false;
  }

  isLooged(): boolean {
    return this.userIsConnected;
  }

  setUserName(userName: string): void {
    this.userName = userName;
  }

  getUserName(): string {
    return this.userName;
  }
}
