import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewUsersComponent } from './components/view-users/view-users.component';
import { NewUserComponent } from './components/new-user/new-user.component';
import { HomeComponent } from './components/home/home.component';


const routes: Routes = [{
  path: 'view-all',
  component: ViewUsersComponent
},
{
  path: 'new-user',
  component: NewUserComponent
},
{
  path: '**',
  component: HomeComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
