import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EventsService } from '../events.service';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.scss']
})
export class CreateEventComponent implements OnInit {
  userForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private event: EventsService) { }

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      eventname: ['', Validators.required],
      experiencedetails: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit()
  {
 
    this.submitted = true;
    

    if(this.userForm.invalid)
    {
      return;
    }
    this.event.Events.push(this.userForm.value);
    console.log(this.event.Events[0]);
    alert('Event was created successfuly!!, you can go to Events List Page and access the list');
  }

  get f() { return this.userForm.controls; }

  onReset()
  {
    this.submitted = false;
    this.userForm.reset();
  }

}
