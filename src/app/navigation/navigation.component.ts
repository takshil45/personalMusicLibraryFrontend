import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  userIsLoggedIn;
  name;

  constructor(private router: Router) { }

  ngOnInit() {
    this.userIsLoggedIn = localStorage.getItem("isLoggedIn");
    this.name = localStorage.getItem("id");
  }

  logout(){
    localStorage.setItem("id", "");
    localStorage.setItem("isLoggedIn", "false");
    localStorage.setItem("name", "");
    this.router.navigate(['../login'])
  }

}
