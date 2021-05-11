import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Md5} from 'ts-md5/dist/md5';

@Injectable({
  providedIn: 'root'
})
export class ConsultaMarvelService {

  timeStamp = new Date().getTime();
  publicKey = '2c1ec828721fa8cb0560d5e5db7754fd';
  privateKey = '67b41590b3317484047b5094384f639d92d7a9b4';
  // md5Hash = Md5.hashStr(this.timeStamp + this.privateKey + this.publicKey);
  md5Hash = 'a83b2e320054de2db868e6da7f120946';

  constructor(private httpClient: HttpClient) { }

  consultaHerois(): Observable<any> {
    console.log(this.md5Hash);
    return this.httpClient.get(`http://gateway.marvel.com:443/v1/public/characters?ts=${this.timeStamp}
    &apikey=${this.publicKey}&hash=${this.md5Hash}`);
  }
}
