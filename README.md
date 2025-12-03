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
