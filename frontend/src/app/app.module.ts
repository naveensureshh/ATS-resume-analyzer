import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'; 
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import {NgxMaskModule} from 'ngx-mask';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { OrderDashboardComponent } from './pages/order-dashboard/order-dashboard.component';
import { CreateOrderComponent } from './pages/create-order/create-order.component';
import { ViewOrderComponent } from './pages/view-order/view-order.component';
import { ConfirmationComponent } from './pages/confirmation/confirmation.component';



@NgModule({
  declarations: [
    AppComponent, 
    DashboardComponent,
    LoginComponent,
    SignUpComponent,
    OrderDashboardComponent,
    CreateOrderComponent,
    ViewOrderComponent,
    ConfirmationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxMaskModule.forRoot(),
    FormsModule,
    ReactiveFormsModule ,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
