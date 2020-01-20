import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventsMainComponent } from './events-main/events-main.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { CreateEventComponent } from './create-event/create-event.component';
import { HomePageComponent } from './home-page/home-page.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { MatInputModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { EventsListComponent } from './events-list/events-list.component';

@NgModule({
  declarations: [
    AppComponent,
    EventsMainComponent,
    CreateEventComponent,
    HomePageComponent,
    EventsListComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
