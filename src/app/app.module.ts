import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import routermodule manually
import { RouterModule,Routes } from '@angular/router';
<<<<<<< HEAD
import { DetailsComponent } from './details/details.component';
import { MainComponent } from './main/main.component';
=======
>>>>>>> d7b256a117f61cf706a95f893b1e6e2e8e25f28e

@NgModule({
  declarations: [
    AppComponent,
    DetailsComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
