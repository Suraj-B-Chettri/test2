import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { ManagerComponent } from './manager/manager.component';
import { Supervisor1Component } from './supervisor1/supervisor1.component';
import { Supervisor2Component } from './supervisor2/supervisor2.component';
import { Employee1Component } from './employee1/employee1.component';
import { LoginComponent } from './login/login.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    ManagerComponent,
    Supervisor1Component,
    Supervisor2Component,
    Employee1Component,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'manager',
        component: ManagerComponent
      },
      {
        path : '',
        component: LoginComponent
      },
      {
          path: 'supervisor1',
          component : Supervisor1Component,
          
        
      },
      {
        path: 'supervisor2',
        component : Supervisor2Component,
        
      
    },{
      path: 'employee1',
      component : Employee1Component, 
  }
      ]
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
