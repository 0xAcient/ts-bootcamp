export type KeysOfType<T, V> = { [K in keyof T]: T[K] extends V ? K : never }[keyof T];

export type PickByValue<T, V> = {
  [K in KeysOfType<T, V>]: T[K];
};

export type NullableOptional<T> = {
  [K in keyof T]?: T[K] extends undefined | null ? K : T[K];
};

export type RemoveNullable<T> = T extends undefined | null ? never : T;

export type NullableKeys<T> = {
  [K in keyof T]: null extends T[K] ? K : undefined extends T[K] ? K : never;
}[keyof T];

export type RequiredKeys<T> = { [K in keyof T]: undefined extends T[K] ? never : K }[keyof T];
