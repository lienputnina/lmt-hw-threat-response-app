/*
Took this function from a bigger function that returns both latitude and 
longitude. The example can be found here - https://www.javaspring.net/blog/javascript-how-to-create-random-longitude-and-latitudes/
*/
export const generateLatitude = (precision: number = 14) => {
  let latitude = Number(
    (Math.random() * (57.97 - 55.67) + 55.67).toFixed(precision),
  );
  return latitude;
};
