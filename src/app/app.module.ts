import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './routes/home/home.component';
import { Page404Component } from './routes/page404/page404.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CardComponent } from './components/card/card.component';
import { ServiciosComponent } from './routes/servicios/servicios.component';
import { NosotrosComponent } from './routes/nosotros/nosotros.component';
import { ContactanosComponent } from './routes/contactanos/contactanos.component';
import { CarrouselBannerComponent } from './components/carrousel-banner/carrousel-banner.component';
import { PersonalCardComponent } from './components/personal-card/personal-card.component';
import { PersonalcardRightComponent } from './components/personalcard-right/personalcard-right.component';
import { AnimatedbuttonsComponent } from './components/animatedbuttons/animatedbuttons.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Page404Component,
    NavbarComponent,
    CardComponent,
    ServiciosComponent,
    NosotrosComponent,
    ContactanosComponent,
    CarrouselBannerComponent,
    PersonalCardComponent,
    PersonalcardRightComponent,
    AnimatedbuttonsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
