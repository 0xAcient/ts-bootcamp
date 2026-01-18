# Week-3

## readonly, Immutability & Value Semantics

There's has been certain misconception about `readonly` and what immutabibily actually means in typescript

### readonly

readonly prevents reassignment through the type system, not mutation at runtime

```typescript
type User = {
  readonly id: string;
  readonly name: string;
};

const user: User = {
  id: '1u',
  name: 'John Doe',
};

console.log(user.name); // John Doe

// This will throw a compile time error
// name property is readonly and can't
// be reassigned
user.name = 'Mary Jane';
```

### Value Semantics vs Reference Semantics

Reference semantics refers to the same memory, same object

```typescript
const a = { count: 1 };

const b = a;

//mutates value of the original object
b.count = 2;

console.log(a.count); // 2
```

Value semantics refers to a new object entirely in a seperate memory

```typescript
const a = { count: 1 };

const b = { ...a, count: 2 };

console.log(a.count); // 1
```

#### Readonly<T> vs readonly properties

```typescript
type ReadonlyUser = Readonly<{
  id: string;
  name: string;
}>;

//equivalent to
type ReadonlyUser = {
  readonly id: string;
  readonly name: string;
};
```

#### Shallow vs Deep Immuntability

```typescript
//this is a shallow readonly
type State = {
  readonly user: {
    name: string;
  };
};

//which means we can do this
const state: State = {
  user: {
    name: 'Samuel',
  },
};

state.user.name = 'Alice'; // ✅ allowed

//The reason it's permissible is because `user`
//is readonly only not its contents
```
