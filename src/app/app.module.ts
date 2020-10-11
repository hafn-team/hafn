import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { OrganizationsComponent } from './organizations/organizations.component';
import { CreatOrganizationComponent } from './creat-organization/creat-organization.component';
import { ProjectsComponent } from './projects/projects.component';
import { CreateProjectComponent } from './create-project/create-project.component';

import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { IssuesComponent } from './issues/issues.component';
import { FeaturesComponent } from './features/features.component';
import { InsideProjectComponent } from './inside-project/inside-project.component';


import { LandingComponent } from './landing/landing.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OrganizationsComponent,
    CreatOrganizationComponent,
    ProjectsComponent,
    CreateProjectComponent,
    LoginComponent,
    SignupComponent,
    ForgetpasswordComponent,
    IssuesComponent,
    FeaturesComponent,
    InsideProjectComponent,
    ForgetpasswordComponent,
    LandingComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],

 
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
