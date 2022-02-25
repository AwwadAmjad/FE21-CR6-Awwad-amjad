import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CartComponent } from './cart/cart.component';
import { ConUsComponent } from './con-us/con-us.component';
import { DetailsComponent } from './details/details.component';
import { OurPlanComponent } from './our-plan/our-plan.component';
import { PhoneListComponent } from './phone-list/phone-list.component';

const routes: Routes = [{
  path:"" ,component:PhoneListComponent

},{
  path:"phones/:phoneId", component:DetailsComponent
},{
  path:"cart", component:CartComponent

},{
  path:"about",component:AboutComponent
},{
  path:"con-us",component:ConUsComponent
},{
  path:"our-plan",component:OurPlanComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
