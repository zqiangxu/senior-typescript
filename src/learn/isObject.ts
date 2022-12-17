// error
type IsNotObject<T> = keyof T extends 0 ? true : false;

type IsNotObjectTest1 = IsNotObject<() => void>;

// error => keyof 1 => "toFixed" | "toString" | "toExponential" ...
type IsNotObjectTest2 = IsNotObject<1>;

// error

// "toString" | "toFixed" | "toExponential" | "toPrecision" | "valueOf" | "toLocaleString"
type numberK = keyof number;

// error
type IsNotObjectTest3 = IsNotObject<number>;

// | "toString" | "valueOf" | "charCodeAt" | "concat" | "indexOf" | "lastIndexOf" | "localeCompare" ....
type stringK = keyof string;

// error
type IsNotObjectTest4 = IsNotObject<string>;

type IsNotObjectTest5 = IsNotObject<{ a: number; b: number }>;

// ------

// error
type IsNotObject2<T> = T extends {} ? false : true;

// correct
type IsObject<T> = T extends Record<string | number | symbol, unknown> ? true : false;
type IO1 = IsObject<1>;
type IO2 = IsObject<false>;
type IO3 = IsObject<[1]>;
type IO4 = IsObject<'12'>;
type IO5 = IsObject<{ a: number; b: string }>;
type IO6 = IsObject<Map<string, string>>;
type IO7 = IsObject<Set<string>>;

interface Todo {
  readonly title: string;
  readonly description: string;
  readonly completed: boolean;
}

// => false. 需要注意这个会返回 false.
type IO8 = IsObject<Todo>;

interface Todo2 {
  title: string;
  description: string;
  completed: boolean;
}

// => true. 不可变. 返回 true
type IO9 = IsObject<Readonly<Todo2>>;

export { IsObject };
