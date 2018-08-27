import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule }    from '@angular/common/http';
import { HomeModule } from './components/home/home.module';
import { AppRoutingModule } from './app.routing';



@NgModule({
  declarations: [
    AppComponent,
  
  ],
  imports: [
    HomeModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
