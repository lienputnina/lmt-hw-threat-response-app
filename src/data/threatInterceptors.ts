export interface threatInterceptor {
  name: string;
  speed_ms: number;
  range_of_operations_m: number;
  max_altitude: number;
  price_eur: number;
}

// Radar range is 100 km
export const threatInterceptors: threatInterceptor[] = [
  {
    name: 'Interceptor drone',
    speed_ms: 80,
    range_of_operations_m: 30000, // 30 000 m = 30 km
    max_altitude: 2000,
    price_eur: 10000,
  },
  {
    name: 'Fighter jet',
    speed_ms: 700,
    range_of_operations_m: 350000, // 3 500 000 m = 3 500 km
    max_altitude: 15000,
    price_eur: 1000,
  },
  {
    name: 'Rocket',
    speed_ms: 1500,
    range_of_operations_m: 10000000, // 10 000 000 m = 10 000 km
    max_altitude: 300000,
    price_eur: 300000,
  },
  {
    name: '50Cal',
    speed_ms: 900,
    range_of_operations_m: 2000, // 2 000 m = 2 km
    max_altitude: 2000,
    price_eur: 1, // per shot
  },
];
