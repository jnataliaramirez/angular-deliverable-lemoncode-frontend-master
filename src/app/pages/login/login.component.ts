import { Component, OnInit } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  emailPlaceholder: string = "master@lemoncode.net";
  passwordsPlaceholder: string = "12345678";

  email = new FormControl("", [Validators.required, Validators.email]);
  password = new FormControl("", [
    Validators.required,
    Validators.minLength(8),
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

  
}
