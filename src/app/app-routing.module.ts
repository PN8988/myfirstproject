import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreaterecruiterComponent } from './createrecruiter/createrecruiter.component';
import { RecruiterListComponent } from './recruiter-list/recruiter-list.component';
import { RecruiterDetailsComponent } from './components/recruiter-details/recruiter-details.component';
import { UpdaterecruiterComponent } from './updaterecruiter/updaterecruiter.component';

const routes: Routes = [
  {
    path: "add",
    component: CreaterecruiterComponent
  },
  {
    path: "list",
    component: RecruiterListComponent
  },
  {
    path: "details/id",
    component: RecruiterDetailsComponent
  },
  {
    path: "update/id",
    component: UpdaterecruiterComponent
  }

]

  ;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
