import './style.css';
import { respondToThreats } from './logic/threatResponse';
import { radarSystemData } from './data/radarData';

const main = () => {
  const startButton = document.getElementById('start-radar');
  startButton?.addEventListener('click', () => {
    respondToThreats(radarSystemData);
  });
};

main();
