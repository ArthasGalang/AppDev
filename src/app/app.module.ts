import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule } from '@angular/common/http';
import { DashboardPage } from './dashboard/dashboard.page';
import { HomePage } from './dashboard/home/home.page';
import { CalculatorPage } from './dashboard/calculator/calculator.page';
import { LoginPage } from './login/login.page';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, DashboardPage, HomePage, CalculatorPage],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule, FormsModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy, },LoginPage, CalculatorPage],
  bootstrap: [AppComponent],
})
export class AppModule {}
