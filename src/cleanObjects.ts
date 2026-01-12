import { RemoveNullable } from './advancedTypes';

export type CleanObject<T> = {
  [K in keyof T]: RemoveNullable<T[K]>;
};
