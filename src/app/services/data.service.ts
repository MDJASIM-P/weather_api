import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})

export class DataService {

  constructor(private http:HttpClient) { }
  
  getCurrentData(city:any){
    const apikey='7a30a286cb2f2c744cc6f9a47aa29fcc';
    const apiURL=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;
    return this.http.get(apiURL)
  }

}
