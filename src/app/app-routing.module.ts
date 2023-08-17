import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { GalleryComponent } from "./pages/gallery/gallery.component";
import { CrudComponent } from "./pages/crud/crud.component";
import { ProfileComponent } from "./pages/profile/profile.component";

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "login", component: LoginComponent },
  { path: "about", component: AboutUsComponent },
  { path: "dashboard", component: DashboardComponent },
  { path: "gallery", component: GalleryComponent },
  { path: "crud", component: CrudComponent },
  { path: "profile", component: ProfileComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
