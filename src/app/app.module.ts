import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { AuthService } from './shared/auth.service';
import{CoursesService} from './shared/courses.service'

@NgModule({
  declarations: [
    AppComponent,
   
    LoginComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    AuthService,
    CoursesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
