import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ButtonComponent } from './Elements/button/button.component';
import { ElementDataService } from 'app/element-data.service';
import { InputComponent } from './Elements/input/input.component';
import { LabelComponent } from './Elements/label/label.component';

@NgModule({
  entryComponents: [
    ButtonComponent,
    InputComponent,
    LabelComponent
  ],
  declarations: [
    AppComponent,
    ButtonComponent,
    InputComponent,
    LabelComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ElementDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
