import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { AngularFireAuthModule } from 'angularfire2/auth';


import { ParticlesModule } from 'angular-particle';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { environment } from './../environments/environment';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap/modal/modal';
import { ScheduleComponent } from './schedule/schedule.component';
import { RegisterComponent } from './register/register.component';


import { AuthGuardService, AuthService } from './shared/services/index';
import { AppRoutesModule } from './app-routes.module';


@NgModule({
  declarations: [
    AppComponent,
    AppNavbarComponent,
    ScheduleComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,

    AngularFireAuthModule,
    ParticlesModule,

    NgbModule.forRoot(),

    AppRoutesModule,

  ],
  providers: [AuthGuardService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
