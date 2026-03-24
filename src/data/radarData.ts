export interface radarDataObject {
  id: string;
  speed_ms: number;
  altitude_m: number;
  heading_deg: number; // for range of operations
  latitude: number;
  longitude: number;
  report_time: Date;
}
export const radarSystemData: radarDataObject[] = [
  {
    id: '11111',
    speed_ms: 14,
    altitude_m: 199,
    heading_deg: 45,
    latitude: 0,
    longitude: 0,
    report_time: new Date(),
  },
  {
    id: '22222',
    speed_ms: 20,
    altitude_m: 200,
    heading_deg: 90,
    latitude: 0,
    longitude: 0,
    report_time: new Date(),
  },
  {
    id: '33333',
    speed_ms: 155,
    altitude_m: 220,
    heading_deg: 45,
    latitude: 0,
    longitude: 0,
    report_time: new Date(),
  },
  {
    id: '44444',
    speed_ms: 1000,
    altitude_m: 2300,
    heading_deg: 45,
    latitude: 0,
    longitude: 0,
    report_time: new Date(),
  },
  {
    id: '55555',
    speed_ms: 1600,
    altitude_m: 15200,
    heading_deg: 45,
    latitude: 0,
    longitude: 0,
    report_time: new Date(),
  },
  {
    id: '66666',
    speed_ms: 900,
    altitude_m: 1500,
    heading_deg: 45,
    latitude: 0,
    longitude: 0,
    report_time: new Date(),
  },
];
