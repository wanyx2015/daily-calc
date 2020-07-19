export const getDigit = function (): number {
  let i = 0.0;
  // i = Math.floor(Math.random() * 100) / 10;
  while (i === 0) { i = Math.floor(Math.random() * 100) / 10; }
  return i;
};


export const get1DigitNumber = function () {
  let i = 0;
  while (i <= 1) { i = Math.floor(Math.random() * 10); }
  return i;
}

export const get2DigitNumber = function () {
  let i = 0;
  while (i < 10) { i = Math.floor(Math.random() * 100); }
  return i;
}

export const get3DigitNumber = function () {
  let i = 0;
  while (i <= 0) { i = Math.floor(Math.random() * 1000); }
  return i;
}
