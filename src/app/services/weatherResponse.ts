export class WeatherResponse {
  data: {
    request: any[],
    current_conditions: {
      observation_time:any,
      temp_C:any,
      weatherIconUrl: {
        value: any
      }[],
      weatherDesc: {
      value: any
    }[],
      windspeedKmph:any,
      winddir16Point:any
    }[],

  }
}
