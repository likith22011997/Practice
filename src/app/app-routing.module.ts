import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { DetailsComponent } from './details/details.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: '/main',
  //   pathMatch :'full'
  // },
  {
    path:'main',
    component:MainComponent
  },
  {
    path:'details',
    component: DetailsComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
