import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  email = new FormControl("", [Validators.required, Validators.email]);

  getErrorEmailMessage() {
    if (this.email.hasError("required")) {
      return "You must enter a value";
    }

    return this.email.hasError("email") ? "Not a valid email" : "";
  }

  password = new FormControl("", [
    Validators.required,
    Validators.minLength(8),
  ]);

  getErrorPasswordMessage() {
    if (this.password.hasError("required")) {
      return "You must enter a value";
    }

    return this.password.hasError("minlength")
      ? "Password should be at least 8 characters long"
      : "";
  }
}
