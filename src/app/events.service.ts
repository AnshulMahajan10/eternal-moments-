import { Injectable } from '@angular/core';


export class Events {
	EventName!: string;
	Email!: string;
	Experience!: number;
}


@Injectable({
  providedIn: 'root'
})
export class EventsService {

  Events!: Events[];

  constructor() {this.initialize() }

  initialize()
  {
  this.Events = [];
  }
}
