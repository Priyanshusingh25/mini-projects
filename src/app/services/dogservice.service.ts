import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DogserviceService {

  constructor(private http:HttpClient) {}

  getDogImages(){
    const url="https://dog.ceo/api/breeds/image/random/1";
    return this.http.get<any>(url);
  }
}
