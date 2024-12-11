import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { PiattiComponent } from './piatti/piatti.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PiattiComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
