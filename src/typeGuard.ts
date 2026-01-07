export function describeValue(input: string | number): any | number {
  if (typeof input === 'number') {
    return input;
  }

  return input;
}
