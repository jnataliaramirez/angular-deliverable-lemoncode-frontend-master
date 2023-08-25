import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-logout-button",
  templateUrl: "./logout-button.component.html",
  styleUrls: ["./logout-button.component.scss"],
})
export class ButtonLogoutComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  logout(): void {
    this.authService.logout();
    this.router.navigate(["/home"]);
  }
}
