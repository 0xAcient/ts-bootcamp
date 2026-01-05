type Input = string | number;

export function normalizeInput(value: Input): string {
  if (typeof value === 'string') return value.toLowerCase();

return `"Number:" ${value}`;
}


