/*
Took this function from a bigger function that returns both latitude and 
longitude. The example can be found here - https://www.javaspring.net/blog/javascript-how-to-create-random-longitude-and-latitudes/
*/
export const generateLongitude = (precision: number = 14) => {
  let longitude = Number(
    (Math.random() * (28.24 - 20.97) + 20.97).toFixed(precision),
  );
  return longitude;
};
