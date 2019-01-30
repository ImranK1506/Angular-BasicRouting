import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { ProtectedComponent } from './protected/protected.component';
import { ProductComponent } from './product/product.component';
import { LoggedInGuard } from './logged-in.guard';
import { AUTH_PROVIDERS } from './service/authentication.service';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  // { path: 'product/:id', component: ProductComponent },
  { path: 'contactUs', redirectTo: 'contact' },
  { path: 'login', component: LoginComponent },
  { path: 'protected', component: ProtectedComponent, canActivate: [ LoggedInGuard ] }

  // nested routes
  // { path: 'product/', component: ProductComponent, children: childRoutes }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    LoginComponent,
    ProtectedComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),

  //  Child module
  //   ProductsModule
  ],
  providers: [
  //  Hash routing
    { provide: LocationStrategy, useClass: HashLocationStrategy},
    AUTH_PROVIDERS,
    LoggedInGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
