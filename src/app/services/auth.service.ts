import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private userName: string | null = "";
  private userIsConnected: boolean = false;

  constructor() {}

  login(email: string | null, password: string | null): boolean {
    if (email === "master@lemoncode.net" && password === "1") {
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

  setUserName(userName: string | null): void {
    this.userName = userName;
  }

  getUserName(): string | null {
    return this.userName;
  }
}
