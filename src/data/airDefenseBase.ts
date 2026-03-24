export interface airDefenseBase {
  id: string;
  name: string;
  latitude: number;
  longitude: number;
  radar_range: number;
}

export const airDefenseBase: airDefenseBase = {
  id: '12345',
  name: 'Riga Base',
  latitude: 56.97475845607155,
  longitude: 24.1670070219384,
  radar_range: 100,
};
