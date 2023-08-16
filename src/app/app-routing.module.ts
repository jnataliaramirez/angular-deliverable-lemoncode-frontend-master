import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
// +import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent}
  // { path: "home", component: HomeComponent },
  // { path: "login", component: LoginComponent },
  // { path: "about", component: AboutComponent },
  // { path: "contact", component: ContactComponent },
  // { path: "users", component: UserListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
