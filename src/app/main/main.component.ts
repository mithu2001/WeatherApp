import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  city_name="Patna";
  data:any;
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.getWeather();
  }

  getWeather(){
    var baseUrl="https://api.openweathermap.org/data/2.5/weather?q="+this.city_name+"&appid=a11de80cec82f7855d6ff9812a25eb8a"
    this.http.get(baseUrl)
      .subscribe(
        res => {this.data=res} ,
        err => {alert('This City Not Found')}
      )
  }

}
