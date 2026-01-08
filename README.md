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

### Mapped Types (Transforming Object Types)

This let you create new types by transforming the properties of an existing types. (i.e They work like a `loop over keys` at the type level)

```typescript
type Mapped<T> = {
  [K in keyof T]: T[K];
};

//This allows us to create a generic type that can be used with any object
```

Explanation:
[K in keyof T]: basically means for every K i.e (key in T; T = Object) use that as a key for this type, T[K] then assign the type of that key.
This basically is like creating a dubplicate of another type and saves you the hassle of retyping everything

```typescript
type User = {
  id: string;
  age: number;
};

type DuplicateUser = {
  [K in keyof User]: User[K];
};
```

But where mapped types really shine is where you want to preserve the key but change the type

```typescript
type ReadonlyUser = {
  readonly [K in keyof User]: User[K];
};

type OnlyBoolean = {
  [K in keyof User]: boolean;
};
```

### Conditional Types (Type Logic)

It allows you to create types that depends on a condition, just like a tenary operator (? :) but at the type level.
This allows Typescript to choose different types based on checks performed on other types.

```typescript
T extends U ? X : Y;
```

- If type T is assignable to (extends) U return X
- Otherwise return Y

```typescript
type IsString<T> = T extends string ? true : false;

//example
type Test = IsString<string>; // true
type Test2 = IsString<number>; // false
type Test3 = IsString<string | number>; // returns true | false
```
