import {BrowserModule} from '@angular/platform-browser'
import {ErrorHandler, LOCALE_ID, NgModule} from '@angular/core'
import {HttpClientModule} from '@angular/common/http'
import {PreloadAllModules, RouterModule} from '@angular/router'
import {BrowserAnimationsModule} from "@angular/platform-browser/animations"

// import {registerLocaleData} from '@angular/common';
// import ptBr from '@angular/common/locales/pt';
// registerLocaleData(ptBr)

import { registerLocaleData } from '@angular/common';
import ptBr from '@angular/common/locales/pt-PT';
import localeptPTExtra from '@angular/common/locales/extra/pt-PT';

registerLocaleData(ptBr, localeptPTExtra);


import {ApplicationErrorHandler} from './app.error-handler'


import {AppComponent} from './app.component'
import {HeaderComponent} from './header/header.component'
import {HomeComponent} from './home/home.component'
import {ROUTES} from './app.routes'
import {RestaurantsComponent} from './restaurants/restaurants.component'
import {RestaurantComponent} from './restaurants/restaurant/restaurant.component'
import {RestaurantDetailComponent} from './restaurant-detail/restaurant-detail.component'
import {MenuComponent} from './restaurant-detail/menu/menu.component'
import {ShoppingCartComponent} from './restaurant-detail/shopping-cart/shopping-cart.component'
import {MenuItemComponent} from './restaurant-detail/menu-item/menu-item.component'
import {ReviewsComponent} from './restaurant-detail/reviews/reviews.component'
import {OrderSummaryComponent} from "./order/order-summary/order-summary.component"
import {SharedModule} from "./shared/shared.module";
import { LoginComponent } from './security/login/login.component';
import { UserDetailComponent } from './header/user-detail/user-detail.component'


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    RestaurantsComponent,
    RestaurantComponent,
    RestaurantDetailComponent,
    MenuComponent,
    ShoppingCartComponent,
    MenuItemComponent,
    ReviewsComponent,
    OrderSummaryComponent,
    LoginComponent,
    UserDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SharedModule.forRoot(),
    RouterModule.forRoot(ROUTES, {preloadingStrategy: PreloadAllModules})
  ],
  providers: [{provide: LOCALE_ID, useValue: 'pt-PT'},
    {provide: ErrorHandler, useClass: ApplicationErrorHandler}],  bootstrap: [AppComponent]
})
export class AppModule { }
