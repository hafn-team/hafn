import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component'
import { OrganizationsComponent } from './organizations/organizations.component'
import { CreatOrganizationComponent } from './creat-organization/creat-organization.component'
import { ProjectsComponent } from './projects/projects.component';
import { CreateProjectComponent } from './create-project/create-project.component';
import { LoginComponent } from './login/login.component'
import { SignupComponent } from './signup/signup.component'
const routes: Routes = [
  {path : '' , component : LoginComponent },
  {path : 'signup' , component : SignupComponent },
  {path : 'home' , component : HomeComponent},
  {path : 'organ' , component : OrganizationsComponent},
  {path : 'creat' , component : CreatOrganizationComponent},
  {path : 'project' , component : ProjectsComponent },
  {path : 'createP' , component : CreateProjectComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
