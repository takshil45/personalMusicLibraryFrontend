import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../api.service'

@Component({
  selector: 'app-artist-dashboard',
  templateUrl: './artist-dashboard.component.html',
  styleUrls: ['./artist-dashboard.component.css']
})
export class ArtistDashboardComponent implements OnInit {

  @Input() artists;

  constructor(private api:ApiService) { }

  ngOnInit() {
  }

  sort(param){
    this.api.getArtistUserCount(param)
      .subscribe(data =>{
        console.log(data);
        this.artists = data;
      })
  }

}
