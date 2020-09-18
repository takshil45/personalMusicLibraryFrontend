import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../api.service'

@Component({
  selector: 'app-songs-dashboard',
  templateUrl: './songs-dashboard.component.html',
  styleUrls: ['./songs-dashboard.component.css']
})
export class SongsDashboardComponent implements OnInit {

  @Input() songs;

  constructor(private api:ApiService) { }

  ngOnInit() {
  }

  sort(param){
    this.api.getSongUserCount(param)
      .subscribe(data =>{
        console.log(data);
        this.songs = data;
      })
  }

}
