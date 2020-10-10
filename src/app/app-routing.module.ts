import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OrganizationsComponent } from './organizations/organizations.component';
import { CreatOrganizationComponent } from './creat-organization/creat-organization.component';
import { ProjectsComponent } from './projects/projects.component';
import { CreateProjectComponent } from './create-project/create-project.component';

import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { FeaturesComponent } from './features/features.component';
import { IssuesComponent } from './issues/issues.component';
import { InsideProjectComponent } from './inside-project/inside-project.component';
import { LandingComponent } from './landing/landing.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'home', component: HomeComponent },
  { path: 'organ', component: OrganizationsComponent },
  { path: 'creat', component: CreatOrganizationComponent },
  { path: 'project', component: ProjectsComponent },
  { path: 'createP', component: CreateProjectComponent },
  { path: 'forgetPass', component: ForgetpasswordComponent },
  { path: 'features', component: FeaturesComponent },
  { path: 'issues', component: IssuesComponent },
  { path: 'issFeat', component: InsideProjectComponent },
  { path: '', component: LandingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
