import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent }          from './app.component';
import { EventsMainComponent }   from './events-main/events-main.component';
import { CreateEventComponent }     from './create-event/create-event.component';
import { HomePageComponent }     from './home-page/home-page.component';

const routes: Routes = [
  {path: 'home', component: EventsMainComponent},
  {path: 'create', component: CreateEventComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
