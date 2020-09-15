import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-mycomponent',
  templateUrl:'./mycomponent.component.html',
  styleUrls: ['./mycomponent.component.css']
})
export class MycomponentComponent implements OnInit {

  testForm: FormGroup;
  submitted =false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.testForm = this.formBuilder.group({
      title:['',Validators.required],
      firstName: ['',Validators.required],
      lastName:['',Validators.required],
      email: ['',Validators.required, Validators.email],
      confirmemail:['',Validators.required, Validators.email],
      password:['',Validators.required, Validators.minLength(8)],
      confirmPassword:['',Validators.required],
      acceptTerms: [Validators.requiredTrue]
    });
  }

  get f(){
    return this.testForm.controls;
  }
  onSubmit(){
    this.submitted=true;

    if(this.testForm.valid){
      return;
    }
  }
  onReset(){
    this.submitted=false;
    this.testForm.reset();
  }
}
