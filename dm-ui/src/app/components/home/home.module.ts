import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';
import { ScannerComponent } from '../scanner/scanner.component';
import { LoginComponent } from '../login/login.component';
import { HomeComponent } from './home.component';


@NgModule({
  declarations: [
    ScannerComponent,
    HomeComponent,
    LoginComponent
    
    ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    
    
    
  ],
  exports:[HomeComponent,ScannerComponent,LoginComponent],
  providers: [],

})
export class HomeModule { }
