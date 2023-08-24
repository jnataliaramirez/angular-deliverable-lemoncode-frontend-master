import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-button-logout",
  templateUrl: "./button-logout.component.html",
  styleUrls: ["./button-logout.component.scss"],
})
export class ButtonLogoutComponent implements OnInit {
  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  logout(): void {
    this.authService.logout();
  }
}
