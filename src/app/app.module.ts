import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { MaterialModule } from './material.module';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AboutUsComponent } from './pages/about-us/about-us.component';
import { AppComponent } from './app.component';
import { ButtonLogoutComponent } from './components/button-logout/button-logout.component';
import { CrudComponent } from './pages/crud/crud.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { FooterComponent } from './components/footer/footer.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { PrivateHeaderComponent } from './components/private-header/private-header.component';
import { PrivateMenuComponent } from './components/private-menu/private-menu.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { PublicHeaderComponent } from './components/public-header/public-header.component';
import { PublicMenuComponent } from './components/public-menu/public-menu.component';

@NgModule({
  declarations: [
    AboutUsComponent,
    AppComponent,
    ButtonLogoutComponent,
    CrudComponent,
    DashboardComponent,
    FooterComponent,
    GalleryComponent,
    HomeComponent,
    LoginComponent,
    PrivateHeaderComponent,
    PrivateMenuComponent,
    ProfileComponent,
    PublicHeaderComponent,
    PublicMenuComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
