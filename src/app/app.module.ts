import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CuerpoIndexComponent } from './cuerpo-index/cuerpo-index.component';
import { BarraMenuComponent } from './barra-menu/barra-menu.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { NosotrosComponent } from './nosotros/nosotros.component'


@NgModule({
  declarations: [
    AppComponent,
    CuerpoIndexComponent,
    BarraMenuComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
