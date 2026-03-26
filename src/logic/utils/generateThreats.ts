import { generateRandomNumber } from './generateRandomNumber';
import { generateLatitude } from './generateLatitude';
import { generateLongitude } from './generateLongitude';
import { potentialThreat } from '../potentialThreatClass';

export const generateThreats = (): potentialThreat => {
  let objectSpeed: number = generateRandomNumber(14, 1500);
  let objectAltitude: number = generateRandomNumber(100, 16000);
  let objectLatitude: number = generateLatitude();
  let objectLongitude: number = generateLongitude();
  let objectBearingInDegrees: number = generateRandomNumber(0, 360);
  let report_time = new Date();

  return new potentialThreat(
    objectSpeed,
    objectAltitude,
    objectLatitude,
    objectLongitude,
    objectBearingInDegrees,
    report_time,
  );
};
