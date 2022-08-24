import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CitylocateService {
  data : any = {

    "banglore" : {

      'lat' : 12.972442,

      'long' : 77.580643

    },

    "delhi" : {

      'lat' : 28.644800,

      'long' : 77.216721

    },

    "chennai" : {

      'lat' : 13.0826802,

      'long' : 80.2707184

    },

    "hyderabad" : {

      'lat' : 17.387140,

      'long' : 78.491684

    },

    "indore" : {

      'lat' : 22.719568,

      'long' : 75.857727

    },

    "kadapa" : {

      'lat' : 14.477234,

      'long' : 78.804932

    },
    
    "hubballi" : {

      'lat' : 15.364708,

      'long' :  75.123955

    },

    
    "vizag" : {

      'lat' : 17.686815,

      'long' : 83.218483

    },

    
    "jaipur" : {

      'lat' : 26.922070,

      'long' : 75.778885

    },

    

  }
  constructor() { }
}
