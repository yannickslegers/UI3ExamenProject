export class Weather {
  location: string;
  time: string;
  temp: string;
  weatherIcon: string;
  weatherValue: string;
  windSpeed: string;
  windDirection: string;

  constructor(location: string,
  time: string,
  temp: string,
  weatherIcon: string,
  weatherValue: string,
  windSpeed: string,
  windDirection: string ) {
    this.location = location;
    this.time = time;
    this.temp = temp;
    this.weatherIcon = weatherIcon;
    this.weatherValue = weatherValue;
    this.windSpeed = windSpeed;
    this.windDirection = windDirection;
  }
}
