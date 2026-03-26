import { waitOneSecond } from './utils/waitOneSecond';
import { threatInterceptors } from '../data/threatInterceptors';
import { generateThreats } from './utils/generateThreats';
import type { potentialThreat } from './potentialThreatClass';
import { airDefenseBase } from '../data/airDefenseBase';

const provideDefenseSolution = (potentialThreat: potentialThreat) => {
  if (
    (potentialThreat.speed_ms >= 80 && potentialThreat.speed_ms < 700) ||
    potentialThreat.altitude_m <= 2000
  ) {
    document.getElementById('threat-solution')!.innerHTML =
      `Send the ${threatInterceptors[0].name}`;
  } else if (
    (potentialThreat.speed_ms >= 700 && potentialThreat.speed_ms <= 1500) ||
    (potentialThreat.altitude_m > 2000 && potentialThreat.altitude_m <= 15000)
  ) {
    document.getElementById('threat-solution')!.innerHTML =
      `Send the ${threatInterceptors[1].name}`;
  } else if (
    (potentialThreat.speed_ms >= 1500 && potentialThreat.altitude_m > 15000) ||
    potentialThreat.altitude_m <= 300000
  ) {
    document.getElementById('threat-solution')!.innerHTML =
      `Send the ${threatInterceptors[2].name}`;
  } else if (
    potentialThreat.speed_ms <= 900 &&
    potentialThreat.speed_ms >= 1500 &&
    potentialThreat.altitude_m <= 2000
  ) {
    document.getElementById('threat-solution')!.innerHTML =
      `Send the ${threatInterceptors[3].name}`;
  }
};

export const respondToThreats = async (stopperFunction: () => boolean) => {
  let objectCounter = 1;

  // Will split this into another function later
  const potentialThreats: potentialThreat[] = [];

  let potentialThreat = generateThreats();
  potentialThreats.push(potentialThreat);

  let isInRangeOfRigaBase: boolean = false;

  while (stopperFunction()) {
    await waitOneSecond();

    potentialThreats.forEach((threat) => threat.movePotentialThreat());

    // doesn't work yet, will refactor later
    if (
      potentialThreat.latitude === airDefenseBase.latitude &&
      potentialThreat.longitude === airDefenseBase.longitude
    ) {
      isInRangeOfRigaBase = true;
    }

    if (stopperFunction() === true) {
      /*
      The idea about the padStart() function was found here - 
      https://www.javaspring.net/blog/javascript-date-ensure-getminutes-gethours-getseconds-puts-0-in-front-if-necessary/
      */
      let reportTimeHours = potentialThreat.report_time
        .getHours()
        .toString()
        .padStart(2, '0');
      let reportTimeMinutes = potentialThreat.report_time
        .getMinutes()
        .toString()
        .padStart(2, '0');
      let reportTimeSeconds = potentialThreat.report_time
        .getSeconds()
        .toString()
        .padStart(2, '0');

      let reportTime = `${reportTimeHours}:${reportTimeMinutes}:${reportTimeSeconds}`;

      if (potentialThreat.speed_ms < 15 || potentialThreat.altitude_m < 200) {
        document.getElementById('threat-level')!.innerHTML =
          `Object ${objectCounter} is not a threat. No need to respond`;

        document.getElementById('report-time')!.innerHTML =
          `Report time: ${reportTime}`;

        objectCounter++;
      } else if (
        potentialThreat.speed_ms > 15 &&
        potentialThreat.speed_ms < 150
      ) {
        document.getElementById('threat-level')!.innerHTML =
          `Object ${objectCounter} - caution.`;

        document.getElementById('report-time')!.innerHTML =
          `Report time: ${reportTime}`;

        objectCounter++;
      } else if (potentialThreat.speed_ms > 150) {
        document.getElementById('threat-level')!.innerHTML =
          `Object ${objectCounter} - threat`;

        document.getElementById('report-time')!.innerHTML =
          `Report time: ${reportTime}`;

        provideDefenseSolution(potentialThreat);

        objectCounter++;
      } else {
        document.getElementById('threat-level')!.innerHTML =
          `Object ${objectCounter} - potential threat.`;

        document.getElementById('report-time')!.innerHTML =
          `Report time: ${reportTime}`;

        objectCounter++;
      }
    }
    // potentialThreats.pop();
  }
};
