type ExampleType = Promise<string>;

type MyAwaited<T> = T extends Promise<infer Type> ? Type : never;

type Result2 = MyAwaited<ExampleType>;
type Result3 = MyAwaited<string>;

// => Promise<number>
type Result4 = MyAwaited<Promise<Promise<number>>>;

// 递归(如果要取出递归后的类型数据)
type FullMyAwaited<T> = T extends Promise<infer Type>
  ? Type extends Promise<infer InnerType>
    ? FullMyAwaited<Type>
    : Type
  : never;

type Result5 = FullMyAwaited<string>;
type Result6 = FullMyAwaited<Promise<number>>;

// => number
type Result7 = FullMyAwaited<Promise<Promise<number>>>;

export { FullMyAwaited };
