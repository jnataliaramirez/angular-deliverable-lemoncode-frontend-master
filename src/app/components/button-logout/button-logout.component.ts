import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-button-logout",
  templateUrl: "./button-logout.component.html",
  styleUrls: ["./button-logout.component.scss"],
})
export class ButtonLogoutComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  logout(): void {
    this.authService.logout();
    this.router.navigate(["/home"]);
  }
}
