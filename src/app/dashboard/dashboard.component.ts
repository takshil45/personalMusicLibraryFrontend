import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../api.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  form: FormGroup;
  clickedAdd = false;
  songs;
  artists;

  constructor(private fb: FormBuilder,private api: ApiService) { }

  ngOnInit() {
    this.form = this.fb.group({
      songName: ['', Validators.required],
      artistName: ['', Validators.required]
    });
    this.getSongUserCount();
    this.getArtistUserCount("id");
  }

  get f() { return this.form.controls; }

  addButton(form){
    this.clickedAdd = true;
    if (this.form.valid) {
      console.log(form)
      this.api.addSong(form)
        .subscribe(data => {
          console.log(data);
          this.getSongUserCount();
          this.getArtistUserCount("id");
        })
    }
  }

  getSongUserCount(){
    this.api.getSongUserCount("id")
      .subscribe(data =>{
        console.log(data);
        this.songs = data;
      })
  }

  getArtistUserCount(param){
    this.api.getArtistUserCount(param)
      .subscribe(data =>{
        console.log(data);
        this.artists = data;
      })
  }

}
