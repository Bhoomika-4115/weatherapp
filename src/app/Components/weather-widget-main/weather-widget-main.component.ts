import { Component, OnInit } from '@angular/core';
import { CitylocateService } from 'src/app/citylocate.service';

@Component({
  selector: 'app-weather-widget-main',
  templateUrl: './weather-widget-main.component.html',
  styleUrls: ['./weather-widget-main.component.css']
})
export class WeatherWidgetMainComponent implements OnInit {
  WeatherData:any;
  citySearch : string= '';  
  latti : number = 12.972442;
  longi : number = 77.580643;

  constructor( public city : CitylocateService) { }

  ngOnInit(): void {
    this.WeatherData = {
      main : {},
      isDay:true
    };
    
    this.getWeatherData();
    console.log(this.WeatherData);
  }

  getWeatherData(){

    fetch(`http://fcc-weather-api.glitch.me/api/current?lat=${this.latti}&lon=${this.longi}`)
    .then(response=>response.json())
    .then(data=>{this.setWeatherData(data);})

    //let data = JSON.parse('{"coord": {"lon": -122.08,"lat": 37.39},"weather":[{"id": 800,"main": "Clear","description": "clear sky","icon": "01d"}],"base": "stations","main":{"temp": 282.55,"feels_like": 281.86,"temp_min": 280.37,"temp_max": 284.26,"pressure": 1023,"humidity": 100},"visibility": 10000,"wind": {"speed": 1.5,"deg": 350},"clouds": {"all": 1},"dt": 1560350645,"sys":{"type": 1,"id": 5122,"message": 0.0139,"country": "US","sunrise": 1560343627,"sunset": 1560396563},"timezone": -25200,"id": 420006353,"name": "Mountain View","cod": 200}')
    //this.setWeatherData(data);
  }

  setWeatherData(data:any){
    this.WeatherData=data;
    let sunsetTime = new Date(this.WeatherData.sys.sunset * 1000);
    this.WeatherData.sunset_time=sunsetTime.toLocaleTimeString();
    let currentDate = new Date();
    this.WeatherData.isDay = (currentDate.getTime() < sunsetTime.getTime());
    this.WeatherData.temp_celcius = (this.WeatherData.main.temp).toFixed(0);
    this.WeatherData.temp_min = (this.WeatherData.main.temp_min).toFixed(0);
    this.WeatherData.temp_max = (this.WeatherData.main.temp_max).toFixed(0);
    this.WeatherData.temp_feels_like = (this.WeatherData.main.feels_like).toFixed(0);
  }

  SearchCity = () => {
    console.log(this.citySearch)
    console.log(this.city.data[this.citySearch])
    this.latti = this.city.data[this.citySearch].lat
    this.longi = this.city.data[this.citySearch].long
    this.getWeatherData()
  }

}
