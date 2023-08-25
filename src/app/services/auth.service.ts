import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private userEmail: string = "";
  private userLoggedIn: boolean = false;

  constructor() {}

  login(email: string, password: string): boolean {
    if (email === "master@lemoncode.net" && password === "1") {
      this.userLoggedIn = true;
      this.userEmail = email;
      localStorage.setItem("userLoggedIn", "true");
      localStorage.setItem("userEmail", email);
      return true;
    } else {
      return false;
    }
  }

  logout(): void {
    this.userLoggedIn = false;
    this.userEmail = "";
    localStorage.removeItem("userLoggedIn");
    localStorage.removeItem("userEmail");
  }

  isLoggedIn(): boolean {
    if (localStorage.getItem("userLoggedIn") === "true") {
      return true;
    }
    return this.userLoggedIn;
  }

  getuserEmail(): string {
    if (localStorage.getItem("userEmail")) {
      this.userEmail = localStorage.getItem("userEmail") as string;
    }

    return this.userEmail;
  }
}
