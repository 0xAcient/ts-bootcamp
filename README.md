# Week-2

## Advanced Types & Type System Patterns

Getting familiar with concepts from `Week-1` and more.

### Literal Types

A literal type is a value and a type

```typescript
type Role = 'admin' | 'user' | 'guest';
```

- Union types: The misconception about union is that it's a variable that can be many things. But the actual correct concept is that, its a closed set of allowed states

  ```typescript
  type Result = { kind: 'ok'; data: string } | { kind: 'error'; error: string };

  // This is not flexibility
  // this is a controlled design
  ```

- Discriminated Unions: This is a union of object types. Each object has:
  - A shared property (the discriminant).
  - A unique literal value for that property.

  ```typescript
  type Shape = { type: 'circle'; radius: number } | { type: 'square'; size: number };
  ```

  This allows for:
  - Automatic narrowing.
  - Exhaustiveness checking.
  - Safer refactors.

- Exhaustiveness (Why it matters): consider the code below

  ```typescript
  function area(shape: Shape) {
    switch (shape.type) {
      case 'circle':
        return Math.PI * shape.radius ** 2;
      case 'square':
        return shape.size ** 2;
    }

    // in case none of the case was satisfied
    return 'something went wrong';
  }
  ```

### Indexed Access Types & `keyof`

Indexed access type (also called a lookup type) let you extract the type of a specific property from an object type, array or tuple.

```typescript
//Basic syntax
Type[Key];

//example
type PropertyType<T, K extends keyof T> = T[K];

//Usage
type User = {
  id: string;
  name: string;
  age: number;
};

type UserAgeType = PropertyType<User, 'age'>; // number
let age: UserAgeType = 25; // OK
age = 'Sam'; // Error
```

Indexed access type can also be used with functions but in this case the function needs to be generic.

```typescript
function getProperty<T, K extends typeof T>(obj: T, key: K): T[K] {
  return obj[key];
}

//the above function make sure any key supplied
// is a property in the object making it
//impossible to pass in a wrong key
```
