import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "angular-deliverable-lemoncode-frontend-master";

  constructor(private authService: AuthService) {}

  isLooged(): boolean {
    return this.authService.isLooged();
  }


}
