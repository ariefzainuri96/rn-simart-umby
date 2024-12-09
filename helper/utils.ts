export function delay(ms: number) {
  // function to delay the execution of a function
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const getRandomNumber = (start: number, end: number): number => {
  return Math.floor(Math.random() * (end - start + 1)) + start;
};

export function generateRandomString(length: number): string {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  let result = '';

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charactersLength);
    result += characters[randomIndex];
  }

  return result;
}
