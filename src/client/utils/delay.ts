/**
 * returns promise that will be resolved after the given ms
 */
export const delay = (ms: number, data?: any) =>
  new Promise((resolve) => setTimeout(() => resolve(data), ms));
