import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QouteComponent } from './qoute/qoute.component';
import { FormComponent } from './form/form.component';
import { DetailsComponent } from './details/details.component';

@NgModule({
  declarations: [
    AppComponent,
     QouteComponent,
     FormComponent,
     DetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
     AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
