/**
 * A function that uses a generic type to demine which type to use due to the value been passed in making it dynamic
 */

export function identity<T>(value: T): T {
  return value;
}

/**
 * A function that returns the first item of an array the array type is also dynamic due to the generic types
 */
export function firstItem<T>(arr: T[]): T | undefined {
  return arr[0];
}

/**
 * A function that uses dynamic type to detetmine the type of the object key
 */
export function pluck<T extends object, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

/**
 * A function that merges to object together by using the intersection operator
 */
export function mergeObjects<A extends object, B extends object>(a: A, b: B): A & B {
  return { ...a, ...b };
}
