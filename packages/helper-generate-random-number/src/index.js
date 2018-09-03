// Inspired by https://stackoverflow.com/questions/21816595/generate-a-random-number-of-fixed-length-using-javascript#answer-39774334

export default function generateRandomNumber(length = 1) {
  const add = 1;
  let max = 12 - add;

  if (length > max) return generateRandomNumber(max) + generateRandomNumber(length - max);

  max = 10 ** (length + add);
  const min = max / 10;
  const number = Math.floor(Math.random() * (max - min + 1)) + min;

  return String(number).substring(add);
}
