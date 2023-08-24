import { Component, OnInit } from '@angular/core';
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-private-header",
  templateUrl: "./private-header.component.html",
  styleUrls: ["./private-header.component.scss"],
})
export class PrivateHeaderComponent implements OnInit {
  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  getUserName(): string | null {
    return this.authService.getUserName();
  }
}
