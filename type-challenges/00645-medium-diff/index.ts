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

type Result1 = Diff<Foo, Bar>;
type Result2 = Diff<Bar, Foo>;
type Result3 = Diff<Foo, Coo>;
type Result4 = Diff<Coo, Foo>;

// 合并 U 和 T，并排除公共的属性的属性
type BestDiff<T, U> = Omit<U & T, keyof T & keyof U>;

// => B
type Key = ('A' | 'B') & 'B';

type Result5 = Diff<Foo, Bar>;
type Result6 = Diff<Bar, Foo>;
type Result7 = Diff<Foo, Coo>;
type Result8 = Diff<Coo, Foo>;

export { Diff };
