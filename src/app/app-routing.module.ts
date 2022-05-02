import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { DashboardComponent } from "./dashboard/dashboard.component";
import { UserDetailComponent } from './user-detail/user-detail.component';

const routes: Routes = [
  { path: '', component: DashboardComponent  },
  { path: 'user.component.html', component: UserComponent },
  { path: 'dashboard.component.html', component: DashboardComponent },
  { path: 'user.component.html/:id', component: UserDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
