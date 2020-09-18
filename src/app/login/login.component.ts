import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  clickedLogin = false;

  constructor(private fb: FormBuilder,private router: Router,private api: ApiService) {
    
   }

  ngOnInit(): void {
    this.form = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  get f() { return this.form.controls; }

  loginButton(form) {
    this.clickedLogin = true;
    if (this.form.valid) {
      this.api.login(form)
        .subscribe((data)=>{
          console.log(data);
          localStorage.setItem("id", data['id']);
          localStorage.setItem("isLoggedIn", "true");
          localStorage.setItem("name", data['name']);
          if(data['isAdmin']){
            this.router.navigate(['../dashboard'])
          }
          else {
            this.router.navigate(['../songs-list'])
          }
        })
    }
  }

}
