import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponentComponent } from './user-component/user-component.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { LayoutComponent } from './layout/layout.component';
import { DashboardComponentComponent } from './dashboard-component/dashboard-component.component';
import { ReactiveFormsModule } from '@angular/forms';
//Pour communiquer avec les API
import {HttpClientModule} from '@angular/common/http';

import { LoginComponent } from './login/login.component';

//Pour le formulaire


@NgModule({
  declarations: [
    AppComponent,
    UserComponentComponent,
    NavbarComponent,
    ContentComponent,
    FooterComponent,
    LayoutComponent,
    DashboardComponentComponent,
    LoginComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
