import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
//Pour communiquer avec les API
import {HttpClientModule} from '@angular/common/http';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LogFormComponent } from './components/log-form/log-form.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContentComponent } from './public/content/content.component';
import { LayoutComponent } from './public/layout/layout.component';
import { DashboardComponentComponent } from './public/dashboard-component/dashboard-component.component';
import { LoginComponent } from './public/login/login.component';
import { BackofficeComponent } from './protected/backoffice/backoffice.component';

//Pour le formulaire


@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    NavbarComponent,
    ContentComponent,
    FooterComponent,
    LayoutComponent,
    DashboardComponentComponent,
    LoginComponent,
    LogFormComponent,
    BackofficeComponent
  
   
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
