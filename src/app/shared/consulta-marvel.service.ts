import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {Md5} from 'ts-md5/dist/md5';

@Injectable({
  providedIn: 'root'
})
export class ConsultaMarvelService {

  readonly publicKey = '22e9bab7b462ebbd01fee470d5c30192';
  readonly privateKey = '7cd3684824a067744989aa33c44a0fefb24a8740';
  readonly baseURL = 'https://gateway.marvel.com:443/v1/public/characters?';
  timeStamp = new Date().getTime().toString();
  md5Hash = Md5.hashStr(this.timeStamp + this.privateKey + this.publicKey);

  constructor(private httpClient: HttpClient) { }

  consultaHerois(): Observable<any> {
    console.log(this.md5Hash);
    return this.httpClient.get(`${this.baseURL}ts=${this.timeStamp}&apikey=${this.publicKey}&hash=${this.md5Hash}`)
    .pipe(map((data: any) => data.data.results));
  }
}
