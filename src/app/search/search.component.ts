import { Component } from '@angular/core';
import { Data } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  currentData:any={}
  constructor(private ds:DataService){}

  submitForm(city : string) {
   this.ds.getCurrentData(city).subscribe(data => {
    this.currentData = data; console.log(data);
  });
  }

}
