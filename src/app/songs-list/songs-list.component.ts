import { Component, OnInit} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service'

@Component({
  selector: 'app-songs-list',
  templateUrl: './songs-list.component.html',
  styleUrls: ['./songs-list.component.css']
})
export class SongsListComponent implements OnInit {

  form: FormGroup;
  clickedAdd = false;
  songs;

  constructor(private fb: FormBuilder,private router: Router,private api: ApiService) { }

  ngOnInit() {
    this.form = this.fb.group({
      songName: ['', Validators.required],
      artistName: ['', Validators.required]
    });

    this.getUserSong();
  }

  get f() { return this.form.controls; }

  addButton(form){
    this.clickedAdd = true;
    if (this.form.valid) {
      var body = form;
      body['id'] = localStorage.getItem('id');
      this.api.addUserSong(body)
        .subscribe(data =>{
          console.log(data);
          this.getUserSong();
          window.location.reload();
        })
    }
  }

  getUserSong(){
    this.api.getUserSong()
      .subscribe((data)=>{
        this.songs = data;
      })
  }

}
