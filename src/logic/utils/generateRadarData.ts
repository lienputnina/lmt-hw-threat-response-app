import { generateRandomNumber } from './generateRandomNumber';
import { generateLatitude } from './generateLatitude';
import { generateLongitude } from './generateLongitude';

export interface radarDataObject {
  speed_ms: number;
  altitude_m: number;
  heading_deg: number;
  latitude: number;
  longitude: number;
  report_time: Date;
}

export const generateRadarData = (): radarDataObject => {
  let objectSpeed: number = generateRandomNumber(14, 1500);
  let objectAltitude: number = generateRandomNumber(100, 16000);
  let objectLatitude: number = generateLatitude();
  let objectLongitude: number = generateLongitude();
  let objectBearingInDegrees: number = generateRandomNumber(0, 360);

  return {
    speed_ms: objectSpeed,
    altitude_m: objectAltitude,
    latitude: objectLatitude,
    longitude: objectLongitude,
    heading_deg: objectBearingInDegrees,
    report_time: new Date(),
  };
};
