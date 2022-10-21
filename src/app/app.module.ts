import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ButtonModule} from 'primeng/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {CardModule} from 'primeng/card';
import {InputNumberModule} from 'primeng/inputnumber';
import { CalculatorComponent } from './calculator/calculator.component';
import {DialogModule} from 'primeng/dialog';


@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    CardModule,
    InputNumberModule,
    DialogModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
