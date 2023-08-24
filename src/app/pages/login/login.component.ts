import { Component, OnInit } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  emailPlaceholder: string = "master@lemoncode.net";
  passwordPlaceholder: string = "12345678";

  email = new FormControl("", [Validators.required, Validators.email]);
  password = new FormControl("", [
    Validators.required,
    // Validators.minLength(8),
  ]);

  getErrorEmailMessage() {
    if (this.email.hasError("required")) {
      return "You must enter a value";
    }

    return this.email.hasError("email") ? "Not a valid email" : "";
  }
  getErrorPasswordMessage() {
    if (this.password.hasError("required")) {
      return "You must enter a value";
    }

    return this.password.hasError("minlength")
      ? "Password should be at least 8 characters long"
      : "";
  }

  setUserName(): void {
    this.authService.setUserName(this.email.value);
  }

  login(): void {
    this.authService.login(this.email.value, this.password.value);
    this.setUserName();
  }

  logout(): void {
    this.authService.logout();
    this.authService.setUserName(null);
  }
}
