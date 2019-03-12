import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from "@angular/router";
import {ReactiveFormsModule , FormsModule} from "@angular/forms";

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {routes} from "./routes";
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';
import { SignupComponent } from './signup/signup.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AttemptExamComponent } from './attempt-exam/attempt-exam.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    SignupComponent,
    UserLoginComponent,
    StudentDashboardComponent,
    AdminloginComponent,
    AttemptExamComponent,
    AdminDashboardComponent
  ],
  imports: [
    BrowserModule,
    [RouterModule.forRoot(routes)],
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
