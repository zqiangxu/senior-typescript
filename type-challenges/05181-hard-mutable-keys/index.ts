/**
 * @see {@link https://github.com/type-challenges/type-challenges/blob/fbd74f4067fb43ebbf020f864ef404e99deb585f/utils/index.d.ts#L7}
 */
type IsEqual<A, B> = (<T>() => T extends A ? 1 : 2) extends <T>() => T extends B ? 1 : 2 ? true : false;

type IsReadonlyKey<T, Key extends keyof T> = IsEqual<Pick<T, Key>, Readonly<Pick<T, Key>>> extends true ? true : false;

type I1 = IsReadonlyKey<{ name: string }, 'name'>; // false
type I2 = IsReadonlyKey<{ readonly name: string }, 'name'>; // true

type MutableKeys<T> = keyof {
  [Key in keyof T as IsReadonlyKey<T, Key> extends true ? Key : never]: T[Key];
};

type Keys = MutableKeys<{ readonly foo: string; bar: number }>;

// true
type E = { a: 1 } extends { readonly a: 1 } ? true : false;

export { Keys };
