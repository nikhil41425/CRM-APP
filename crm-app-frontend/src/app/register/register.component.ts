import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,private userService:UserService,private router:Router) { }

  submitted = false;
  registerForm:any;

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      emailid: ['', Validators.required],
      mobile: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }
    alert("success");
  }

}
