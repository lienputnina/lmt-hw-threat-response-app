/* Took this function below from - 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
Modified it with my preferred variable names.
*/

export const generateRandomNumber = (minNumber: number, maxNumber: number) => {
  const minNumberInRange = Math.ceil(minNumber);
  const maxNumberInRange = Math.floor(maxNumber);
  return (
    Math.floor(Math.random() * (maxNumberInRange - minNumberInRange + 1)) +
    minNumber
  );
};
