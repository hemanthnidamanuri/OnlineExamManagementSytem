import {Routes} from "@angular/router";
import {SignupComponent} from "./signup/signup.component";
import {BodyComponent} from "./body/body.component";
import {UserLoginComponent} from "./user-login/user-login.component";

export const routes: Routes = [

  {path: '' , component: BodyComponent},
  {path: 'signup' , component: SignupComponent},
  {path: 'userLogin' , component: UserLoginComponent}

];
