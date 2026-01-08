export type IsString<T> = T extends string ? true : false;

export type ExtractString<T> = T extends string ? string : never;

export type NonNullableValue<T> = T extends null | undefined ? never : T;
