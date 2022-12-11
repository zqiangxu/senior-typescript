type Chainable<T extends any = {}> = {
  // 递归和链式调用
  option<Key extends string, Value>(key: Key, value: Value): Chainable<T & Record<Key, Value>>;
  get(): T;
};

type Chainable2<T extends any = {}> = {
  // 递归和链式调用
  option<Key extends string, Value>(
    /* 重复的 key */
    key: Key extends keyof T ? never : Key,
    value: Value
    /* 把之前设置的排除掉.然后重新赋值 */
  ): Chainable2<Omit<T, Key> & Record<Key, Value>>;
  get(): T;
};

declare const a: Chainable2;

const result1 = a.option('foo', 123).option('bar', { value: 'Hello World' }).option('name', 'type-challenges').get();

const result2 = a
  .option('name', 'another name')
  // @ts-expect-error
  .option('name', 'last name')
  .get();

const result3 = a
  .option('name', 'another name')
  // @ts-expect-error
  .option('name', 123)
  .get();

type Result1 = typeof result1;
type Result2 = typeof result2;
type Result3 = typeof result3;

result2.name;
result3.name;

type Expected1 = {
  foo: number;
  bar: {
    value: string;
  };
  name: string;
};

type Expected2 = {
  name: string;
};

type Expected3 = {
  name: number;
};

export { Chainable };
