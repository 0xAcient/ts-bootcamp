export type User = {
  id: string;
  name: string;
  age: number;
  isAlive: boolean;
};

export type Product = {
  id: string;
  title: string;
  price: number;
};

export type PropertyType<T, K extends keyof T> = T[K];

export function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

export type AppConfig = {
  port: number;
  env: 'dev' | 'prod';
  debug: boolean;
};

export function readConfig<T, K extends keyof T>(config: T, key: K): T[K] {
  return config[key];
}
