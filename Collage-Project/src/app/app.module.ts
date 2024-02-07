import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModuleModule } from './material-module/material-module.module';
import { OtpComponent } from './otp/otp.component';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { NgxOtpInputModule } from 'ngx-otp-input';
import { SingupComponent } from './singup/singup.component';
import { AgmCoreModule } from '@agm/core';
import { MapComponent } from './Shared/map/map.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    OtpComponent,
    SingupComponent,
    MapComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MaterialModuleModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxOtpInputModule,
    ToastrModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDoTCrXZ2_oe9Nt1jkZkZHiODhjdZPj7k4',
    }),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
