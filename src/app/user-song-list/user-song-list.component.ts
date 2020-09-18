import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../api.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-song-list',
  templateUrl: './user-song-list.component.html',
  styleUrls: ['./user-song-list.component.css']
})
export class UserSongListComponent implements OnInit {

  @Input() songs
  constructor(private api: ApiService,private router: Router) { }

  ngOnInit() {
  }

  deleteUserSong(song){
    var body = {};
    body['songName'] = song.name;
    body['artistName'] = song.artist;
    body['id'] = parseInt(localStorage.getItem('id'));
    this.api.deleteUserSong(body)
      .subscribe(data =>{
        window.location.reload();
      })
      // this.router.navigate(['../songs-list'])
  }

}
