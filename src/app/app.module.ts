import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PhoneListComponent } from './phone-list/phone-list.component';
import { DetailsComponent } from './details/details.component';
import { CartComponent } from './cart/cart.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { ConUsComponent } from './con-us/con-us.component';
import { OurPlanComponent } from './our-plan/our-plan.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PhoneListComponent,
    DetailsComponent,
    CartComponent,
    AboutComponent,
    FooterComponent,
    ConUsComponent,
    OurPlanComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
