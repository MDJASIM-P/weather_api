import { Component, Input } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})

export class WeatherComponent {
  @Input() currentData:any;

  constructor(private ds:DataService){
    console.log('weather component is loading')
    
  }
  
  // ngOnInit() {
  //   this.ds.getCurrentData(this.city).subscribe(data => {
  //     this.currentData = data; console.log(data);
  //   });
  // };
}
