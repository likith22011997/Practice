import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import routermodule manually
import { RouterModule,Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { MainComponent } from './main/main.component';
import { COUComponent } from './cou/cou.component';
import { DGLComponent } from './dgl/dgl.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    DetailsComponent,
    MainComponent,
    COUComponent,
    DGLComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
