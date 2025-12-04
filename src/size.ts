export function sizeMessage(size: 'small' | 'medium' | 'large'): string {
  switch (size) {
    case 'small':
      return 'You choose small';
    case 'medium':
      return 'You choose medium';
    case 'large':
      return 'You choose large';
  }
}
