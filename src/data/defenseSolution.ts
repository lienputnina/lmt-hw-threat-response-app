export interface defenseSolution {
  name: string;
  speed_ms: number;
  range_of_operations_m: number;
  max_altitude: number;
  price_eur: number;
}

export const defenseSolutions: defenseSolution[] = [
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
