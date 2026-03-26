import { generateThreats } from './utils/generateThreats';
import { potentialThreat } from '../logic/potentialThreatClass';

export const accumulateThreats = () => {
  const potentialThreats: potentialThreat[] = [];

  let potentialThreat = generateThreats();
  potentialThreats.push(potentialThreat);

  return potentialThreats;
};
