import {Routes} from "@angular/router";
import {SignupComponent} from "./signup/signup.component";
import {BodyComponent} from "./body/body.component";
import {UserLoginComponent} from "./user-login/user-login.component";
import {StudentDashboardComponent} from "./student-dashboard/student-dashboard.component";
import {AdminloginComponent} from "./adminlogin/adminlogin.component";
import {AttemptExamComponent} from "./attempt-exam/attempt-exam.component";
import {AdminDashboardComponent} from "./admin-dashboard/admin-dashboard.component";

export const routes: Routes = [

  {path: '' , component: BodyComponent},
  {path: 'signup' , component: SignupComponent},
  {path: 'userLogin' , component: UserLoginComponent},
  {path: 'studentdashboard', component: StudentDashboardComponent},
  {path: 'adminLogin' , component: AdminloginComponent},
  {path: 'attemptexam' , component: AttemptExamComponent},
  {path: 'admindashboard', component: AdminDashboardComponent}
];
