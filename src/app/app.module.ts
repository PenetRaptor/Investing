import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { Module_1Component } from './module_1/module_1.component';
import { Module_2Component } from './module_2/module_2.component';
import { Module_3Component } from './module_3/module_3.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [										
    AppComponent,
      HeaderComponent,
      Module_1Component,
      Module_2Component,
      Module_3Component,
      FooterComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
