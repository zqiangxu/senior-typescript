interface User {
  name: string;
  age: number;
  address: string;
}

// 会自动取|
type PickValidKey<T, U> = U extends keyof T ? U : never;

type PartialByKeys<T, U extends keyof T = keyof T> = Omit<T, U> & {
  // [key in PickValidKey<T, U>]?: key extends keyof T ? T[key] : never;
  [key in U extends keyof T ? U : never]?: key extends keyof T ? T[key] : never;
};

type r1 = PartialByKeys<User, 'name'>;
type r2 = PartialByKeys<User, 'name' | 'age'>;
type r3 = PartialByKeys<User>;

// @ts-expect-error
type r4 = PartialByKeys<User, 'name' | 'unknown'>;

const a: r1 = { age: 12, address: 'address' };
const b: r3 = {};
const c: r4 = { age: 12, address: 'address' };

export { PartialByKeys };
