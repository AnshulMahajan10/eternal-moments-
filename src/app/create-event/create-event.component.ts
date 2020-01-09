import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.scss']
})
export class CreateEventComponent implements OnInit {
  userForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }

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

    alert('SUCCESS!!'+ JSON.stringify(this.userForm.value,null,4));
  }

  get f() { return this.userForm.controls; }

  onReset()
  {
    this.submitted = false;
    this.userForm.reset();
  }

}
