import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { OtpComponent } from './otp/otp.component';
import { AuthGuard } from './auth.guard';
import { SingupComponent } from './singup/singup.component';

const routes: Routes = [
  {path:'', canActivate: [AuthGuard], loadChildren:()=>import('./layout/layout.module').then(l=>l.LayoutModule)},
  {path:'login', component: LoginComponent},
  {path:'otp', component: OtpComponent},
  {path: 'signup', component: SingupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
