import './././../style.css';
import { respondToThreats } from '../logic/threatResponse';

let continueFiring: boolean = true;

const continueFiringObjects = () => {
  return continueFiring;
};

const clearTheUI = () => {
  document.getElementById('threat-level')!.innerHTML = '';
  document.getElementById('threat-solution')!.innerHTML = '';
  document.getElementById('report-time')!.innerHTML = '';
};

const main = () => {
  const generateThreats = document.getElementById('generate-threats');
  generateThreats?.addEventListener('click', () => {
    continueFiring = true;
    // for later when the threat generation and processing logic is separated
    console.log('Generating threats');
  });

  const startButton = document.getElementById('start-radar');
  startButton?.addEventListener('click', () => {
    continueFiring = true;
    respondToThreats(continueFiringObjects);
  });

  const stopButton = document.getElementById('stop-radar');
  stopButton?.addEventListener('click', () => {
    continueFiring = false;
    clearTheUI();
  });
  // Will stop threat processing later
};

main();
