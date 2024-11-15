export function delay(ms: number) {
  // function to delay the execution of a function
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const getRandomNumber = (start: number, end: number): number => {
  return Math.floor(Math.random() * (end - start + 1)) + start;
};
