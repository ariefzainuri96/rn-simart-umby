export function delay(ms: number) {
  // function to delay the execution of a function
  return new Promise((resolve) => setTimeout(resolve, ms));
}
