interface Todo1 {
  title: string;
  description: string;
  completed: boolean;
  meta: {
    author: string;
  };
}

type List = [1, 2, 3];

// -readonly 可以去掉可选属性.
type Mutable<T extends Record<PropertyKey, unknown> | readonly unknown[]> = {
  -readonly [Key in keyof T]: T[Key];
};

type R1 = Mutable<Readonly<Todo1>>;
type R2 = Mutable<Readonly<List>>;

// @ts-expect-error
type R3 = Mutable<1>;
