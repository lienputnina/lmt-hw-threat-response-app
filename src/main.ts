import './style.css';

interface potentialThreatObject {
  id: string;
  speed_ms: number;
  altitude_m: number;
  heading_angle: number;
  latitude: number;
  longitude: number;
  report_time: number; // shouldn't this be a Date/datetime?
}
const potentialThreats: potentialThreatObject[] = [
  {
    id: '11111',
    speed_ms: 14,
    altitude_m: 199,
    heading_angle: 45,
    latitude: 0,
    longitude: 0,
    report_time: 0,
  },
  {
    id: '22222',
    speed_ms: 20,
    altitude_m: 200,
    heading_angle: 90,
    latitude: 0,
    longitude: 0,
    report_time: 0,
  },
  {
    id: '22222',
    speed_ms: 155,
    altitude_m: 220,
    heading_angle: 45,
    latitude: 0,
    longitude: 0,
    report_time: 0,
  },
];

interface militaryBase {
  id: string;
  name: string;
  latitude: number;
  longitude: number;
  radar_range: number;
}

const airDefenseBases: militaryBase[] = [
  // add more bases, as the coordinates become clear
  {
    id: '12345',
    name: 'Riga Base',
    latitude: 56.97475845607155,
    longitude: 24.1670070219384,
    radar_range: 100,
  },
];

interface defenseSolution {
  name: string;
  speed_ms: number;
  range_of_operations_m: number;
  max_altitude: number;
  price_eur: number;
}

const defenseSolutions: defenseSolution[] = [
  {
    name: 'Interceptor drone',
    speed_ms: 80,
    range_of_operations_m: 30000,
    max_altitude: 2000,
    price_eur: 10000,
  },
  {
    name: 'Fighter jet',
    speed_ms: 700,
    range_of_operations_m: 350000,
    max_altitude: 15000,
    price_eur: 1000,
  },
  {
    name: 'Rocket',
    speed_ms: 1500,
    range_of_operations_m: 100000,
    max_altitude: 300000,
    price_eur: 300000,
  },
  {
    name: '50Cal',
    speed_ms: 900,
    range_of_operations_m: 2000,
    max_altitude: 2000,
    price_eur: 1, // per shot
  },
];

const threatResponse = () => {
  /*
  1. Takes in an object
  2. Goes through it
  3. Checks speed and altitude
  4. Checks location
  5. Responds with: threat level and solution
    5.1. If it's a threat, check speed and altitude
    5.2. Choose solution based on speed and altitude
    5.3. Print threat level. If it's a threat, print the solution as well
  */
};

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<p>My threat detection app</p>
`;
