export class Settings {
  showTemperature: boolean;
  showLight: boolean;
  showMusic: boolean;
  showBlinding: boolean;

  constructor(showTemperature: boolean, showMusic: boolean, showLight: boolean, showBlinding: boolean) {
    this.showTemperature = showTemperature;
    this.showLight = showLight;
    this.showMusic = showMusic;
    this.showBlinding = showBlinding;
  }
}
