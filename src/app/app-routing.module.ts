import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component'
import { RegisterComponent } from './register/register.component'
import { SongsListComponent } from './songs-list/songs-list.component'
import { DashboardComponent } from './dashboard/dashboard.component'

const routes: Routes = [
  { 
    path: 'login', 
    component: LoginComponent,
  },
  { 
    path: '', 
    component: LoginComponent,
  },
  { 
    path: 'register', 
    component: RegisterComponent,
  },
  {
    path: 'songs-list', 
    component: SongsListComponent,
  },
  {
    path: 'dashboard', 
    component: DashboardComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { 
  
}
