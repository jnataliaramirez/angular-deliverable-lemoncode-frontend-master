import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material.module';

import { AppComponent } from './app.component';
import { PublicHeaderComponent } from './components/public-header/public-header.component';
import { PrivateHeaderComponent } from './components/private-header/private-header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PublicMenuComponent } from './components/public-menu/public-menu.component';
import { PrivateMenuComponent } from './components/private-menu/private-menu.component';
import { LoginComponent } from './pages/login/login.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { UsersComponent } from './pages/users/users.component';
import { ProvidersComponent } from './pages/providers/providers.component';
import { CostumersComponent } from './pages/costumers/costumers.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    PublicHeaderComponent,
    PrivateHeaderComponent,
    FooterComponent,
    PublicMenuComponent,
    PrivateMenuComponent,
    LoginComponent,
    AboutUsComponent,
    DashboardComponent,
    UsersComponent,
    ProvidersComponent,
    CostumersComponent,
    ProfileComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
