import type { radarDataObject } from './types/radarDataObject';

export class potentialThreat implements radarDataObject {
  public speed_ms: number;
  public altitude_m: number;
  public heading_deg: number;
  public latitude: number;
  public longitude: number;
  public report_time: Date;

  constructor(
    speed_ms: number,
    altitude_m: number,
    heading_deg: number,
    latitude: number,
    longitude: number,
    report_time: Date,
  ) {
    this.speed_ms = speed_ms;
    this.altitude_m = altitude_m;
    this.heading_deg = heading_deg;
    this.latitude = latitude;
    this.longitude = longitude;
    this.report_time = report_time;
  }

  public movePotentialThreat() {
    this.latitude += 1;
    this.longitude += 2;
    this.heading_deg += 3;
  }
}
