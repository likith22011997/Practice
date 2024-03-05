import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { DetailsComponent } from './details/details.component';
import { MainComponent } from './main/main.component';
import { COUComponent } from './cou/cou.component';
import { DGLComponent } from './dgl/dgl.component';

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
    path:'home',
    component: DetailsComponent
  },
  {
    path:'COUDetails',
    component: COUComponent
  },
  {
    path:'DGLDetails',
    component: DGLComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
