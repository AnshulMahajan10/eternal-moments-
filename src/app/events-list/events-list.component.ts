import { Component, OnInit } from '@angular/core';
import { EventsService } from '../events.service';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.scss']
})
export class EventsListComponent implements OnInit {

  EventsList: any = [];

  constructor(private event: EventsService) { }

  ngOnInit() {
  this.EventsList = this.event.Events;
  console.log(this.EventsList);
  }

}
