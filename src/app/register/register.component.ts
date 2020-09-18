import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../api.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: FormGroup;
  clickedRegister = false;

  constructor(private fb: FormBuilder,private api: ApiService,private router: Router) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  get f() { return this.form.controls; }

  registerButton(form){
    this.clickedRegister = true;
    if (this.form.valid) {
      console.log(form);
      this.api.register(form)
        .subscribe((data)=>{
          console.log(data);
          this.router.navigate(['../login'])
        })
    }
  }

}
