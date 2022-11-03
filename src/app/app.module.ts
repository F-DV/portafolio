import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { SocialmediaComponent } from './components/socialmedia/socialmedia.component';
import { PortafolioComponent } from './components/portafolio/portafolio.component';
import { ContactComponent } from './components/contact/contact.component';
import { ImgPerfilComponent } from './components/img-perfil/img-perfil.component';
import { AboutmeComponent } from './components/aboutme/aboutme.component';
import { MenuButtonComponent } from './components/menu-button/menu-button.component';
import { SideMenuBackgroundComponent } from './components/side-menu-background/side-menu-background.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    NavMenuComponent,
    WelcomeComponent,
    SocialmediaComponent,
    PortafolioComponent,
    ContactComponent,
    ImgPerfilComponent,
    AboutmeComponent,
    MenuButtonComponent,
    SideMenuBackgroundComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
