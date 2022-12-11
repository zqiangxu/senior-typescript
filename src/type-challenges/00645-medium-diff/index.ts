type Foo = {
  name: string;
  age: string;
};
type Bar = {
  name: string;
  age: string;
  gender: number;
};
type Coo = {
  name: string;
  gender: number;
};

type Diff<T, U> = {
  [K in keyof Omit<U, keyof T> | keyof Omit<T, keyof U>]: K extends keyof T ? T[K] : K extends keyof U ? U[K] : never;
};

type a = Omit<Foo, 'name'>;

type Result1 = Diff<Foo, Bar>;
type Result2 = Diff<Bar, Foo>;
type Result3 = Diff<Foo, Coo>;
type Result4 = Diff<Coo, Foo>;

export { Diff };
