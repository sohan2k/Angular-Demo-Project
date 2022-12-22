import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule,routingComponent } from './app-routing.module';
import { AppComponent } from './app.component';

import { MatDialogModule } from '@angular/material/dialog';
import { StatusComponent } from './status/status.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ViewService } from './view.service';

@NgModule({
  declarations: [
    AppComponent,
    routingComponent,
    StatusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatDialogModule,
    NgbModule
  ],
  providers: [ViewService],
  bootstrap: [AppComponent]
})
export class AppModule { }