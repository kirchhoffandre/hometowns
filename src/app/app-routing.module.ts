import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MapComponent } from './map/map.component';
import { LoginComponent } from './login/login.component';
import { HometownComponent } from './hometown/hometown.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: MapComponent,
    children: [
    {
      path: 'login',
      component: LoginComponent
    },
    {
      path: 'hometown',
      component: HometownComponent,
      canActivate: [AuthGuard]
    }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
