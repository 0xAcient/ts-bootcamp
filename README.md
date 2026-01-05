# Typescript Bootcamp

## A self study typescript lessons

# Week-1

## Typescript Fundamentals

Setting up typescript types, compiler options, strict mode etc

#### Setup

- Set up a git repository
- install necessary dependencies
- husky: for pre-commit hook
- ESLint for liniting issues
- prettier: for config accross IDE

#### Union Types & Optional Parameters

- Union types
  ```typescript
  let value: string | number;
  ```
  ***
- Optional & Default Parameters

  ```typescript
  function greet(name: string = 'Guest') {
    return `Hello, ${name}`;
  }
  ```

  If a value is not provided the default is used

---

- Literal Types
  ```typescript
  const size: 'small' | 'medium' | 'large';
  ```
  can only be any one of the 3 specified values any other value will throw an error

---

### Interface and Type Aliases

- interface: Allows you to create an object like type

```typescript
interface User {
  id: string;
  name: string;
  birthYear: number;
  calculateAge: (age: number) => number;
}
```

---

- type: type also serve the same function as interface but the main difference is interface can be extended and new properties can be added but type can't take in new property unless you modify the orginal declaration

  ```typescript
  type User = {
    id: string;
    name: string;
    birthYear: number;
    calculateAge: (year: number) => number;
  };

  const user: User = {
    name: 'Sam',
    birthYear: 1990,
    calculateAge: (year: number) => {
      const currentYear = new Date().getFullYear();
      return currentYear - year;
    },
  };
  ```

---

### Generics

Generics let us write functions, classes, or types that work with any type while keeping type safety. Instead of hardcoding a type like string or number.

```typescript
function identity<T>(value: T): T {
  return T;
}
```

### Enums & Tuples

Enums allows you name a set of related value. e.g (status codes, modes, directions).
There are two common flavours of enum in typescript.

- Numeric enums (default): members map to number
  ```typescript
  enum Status {
    Error, // 0
    Pending, // 1
    Success, // 2
  }
  ```
- String enums: member map to string

  ```typescript
  enum Status {
    Error = 'ERROR',
    Pending = 'PENDING',
    Success = 'SUCCESS',
  }
  ```

  Tuples are fixed-length arrays with known types at each position, they are useful for returning multiple heterogenous values with fixed positions. e.g([value, error], [x, y]).

- ```typescript
  type Point = [number, number];
  const p: Point = [-1, 3];

  type Result = [boolean, string?];
  const ok: Result = [true];
  const fail: Result: [false, "Something went wrong"];

  // You can also you generic types if your are not sure of the type
  type Response<T> = [data: T | null, error: string | null];

  function getResponeFromApi(data: T):Response<T> {
    if (data) {
      return [data, null];
    }
    return [null, "Something went wrong"];
  }
  ```
