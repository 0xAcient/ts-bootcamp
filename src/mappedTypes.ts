export type MakeOptional<T> = { [K in keyof T]?: T[K] };
export type MakeReadonly<T> = { readonly [K in keyof T]: T[K] };

export type Features = {
  darkMode: boolean;
  betaUser: boolean;
  analytics: boolean;
};

export type BooleanFlags<T> = {
  [K in keyof T]: boolean;
};
