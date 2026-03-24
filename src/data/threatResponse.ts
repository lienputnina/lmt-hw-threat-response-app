import type { radarDataObject } from './radarData';
import { waitOneSecond } from './waitOneSecond';

const provideDefenseSolution = (potentialThreat: radarDataObject) => {
  if (
    (potentialThreat.speed_ms >= 80 && potentialThreat.speed_ms < 700) ||
    potentialThreat.altitude_m <= 2000
  ) {
    document.getElementById('threat-solution')!.innerHTML =
      'Send the interceptor drone';
  } else if (
    (potentialThreat.speed_ms >= 700 && potentialThreat.speed_ms <= 1500) ||
    (potentialThreat.altitude_m > 2000 && potentialThreat.altitude_m <= 15000)
  ) {
    document.getElementById('threat-solution')!.innerHTML =
      'Send the fighter jet';
  } else if (
    (potentialThreat.speed_ms >= 1500 && potentialThreat.altitude_m > 15000) ||
    potentialThreat.altitude_m <= 300000
  ) {
    document.getElementById('threat-solution')!.innerHTML = 'Send the rocket';
  } else if (
    potentialThreat.speed_ms <= 900 &&
    potentialThreat.speed_ms >= 1500 &&
    potentialThreat.altitude_m <= 2000
  ) {
    document.getElementById('threat-solution')!.innerHTML = 'Use the 50Cal';
  }
};

export const respondToThreats = async (radarSystemData: radarDataObject[]) => {
  let potentialThreat: radarDataObject;
  let threatCounter = 1;

  for (let i = 0; i < radarSystemData.length; i++) {
    await waitOneSecond();
    potentialThreat = radarSystemData[i];

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
        `Object ${threatCounter} is not a threat. No need to respond`;

      document.getElementById('report-time')!.innerHTML =
        `Report time: ${reportTime}`;

      threatCounter++;
    } else if (
      potentialThreat.speed_ms > 15 &&
      potentialThreat.speed_ms < 150
    ) {
      document.getElementById('threat-level')!.innerHTML =
        `Object ${threatCounter} - caution.`;

      document.getElementById('report-time')!.innerHTML =
        `Report time: ${reportTime}`;

      threatCounter++;
    } else if (potentialThreat.speed_ms > 150) {
      document.getElementById('threat-level')!.innerHTML =
        `Object ${threatCounter} - threat.`;

      provideDefenseSolution(potentialThreat);

      threatCounter++;
    } else {
      document.getElementById('threat-level')!.innerHTML =
        `Object ${threatCounter} - potential threat.`;

      document.getElementById('report-time')!.innerHTML =
        `Report time: ${reportTime}`;

      threatCounter++;
    }
  }
};
