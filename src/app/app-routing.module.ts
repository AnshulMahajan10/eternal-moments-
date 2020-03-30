import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent }          from './app.component';
import { EventsMainComponent }   from './events-main/events-main.component';
import { CreateEventComponent }     from './create-event/create-event.component';
import { EventsListComponent }     from './events-list/events-list.component';
import { HomePageComponent }     from './home-page/home-page.component';
import { ClassesComponent }     from './classes/classes.component';
import { FounderComponent }     from './founder/founder.component';
import { ContactComponent }     from './contact/contact.component';

const routes: Routes = [
  {path: 'home', component: HomePageComponent},
  {path: 'classes', component: ClassesComponent},
  {path: 'founder', component: FounderComponent},
  {path: 'contact', component: ContactComponent},
  {path: '**',component: HomePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
