export function capitalize(s: string): string {
  if (s.length === 0) return s;
  return s[0]?.toUpperCase() + s.slice(1);
}

export function truncate(s: string, maxLen: number): string {
  if (maxLen < 0) throw new RangeError('maxLen must be >= 0');
  return s.length <= maxLen ? s : s.slice(0, maxLen - 3) + '...';
}
