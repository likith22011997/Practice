import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
<<<<<<< HEAD
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
=======

const routes: Routes = [
];

>>>>>>> d7b256a117f61cf706a95f893b1e6e2e8e25f28e
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
