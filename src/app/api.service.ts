import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiURL = environment.apiURL;
  constructor(private http: HttpClient) { }

  register(body){
    return this.http.post(`${this.apiURL}/register`, body);
  }

  login(body){
    return this.http.post(`${this.apiURL}/login`, body);
  }

  addUserSong(body){
    return this.http.post(`${this.apiURL}/user/song/add`, body);
  }

  getUserSong(){
    var id = localStorage.getItem("id");
    return this.http.get(`${this.apiURL}/user/song/read?id=${id}`);
  }

  deleteUserSong(body){
    return this.http.delete(`${this.apiURL}/user/song/delete?songName=${body.songName}&artistName=${body.artistName}&id=${body.id}`);
  }

  addSong(body){
    return this.http.post(`${this.apiURL}/song/create`, body);
  }
  
  getSongUserCount(param){
    return this.http.get(`${this.apiURL}/song/userCount?sortBy=${param}`);
  }

  addArtist(body){
    return this.http.post(`${this.apiURL}/artist/create`, body);
  }
  
  getArtistUserCount(param){
    return this.http.get(`${this.apiURL}/artist/userCount?sortBy=${param}`);
  }

}
