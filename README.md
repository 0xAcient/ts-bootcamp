# Typescript Bootcamp

## A self study typescript lessons

# Week-1

## Typescript Fundamentals

Setting up typescript types, compiler options, strict mode etc

### Day-1

- Set up a git repository
- install necessary dependencies
- husky: for pre-commit hook
- ESLint for liniting issues
- prettier: for config accross IDE

### Day-2

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

### Day-3

#### Interface and Type Aliases

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
