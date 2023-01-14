type CapitalizeNestObjectKeys<T> = T extends any[]
  ? // 如果是数组，直接遍历
    { [K in keyof T]: CapitalizeNestObjectKeys<T[K]> }
  : T extends Record<PropertyKey, any>
  ? {
      // 如果是对象，需要继续深度遍历
      [K in keyof T as K extends string ? Capitalize<K> : K]: CapitalizeNestObjectKeys<T[K]>;
    }
  : T;

type foo = {
  foo: string;
  bars: [{ foo: string }];
};

type Foo = {
  Foo: string;
  Bars: [
    {
      Foo: string;
    }
  ];
};

type cases = CapitalizeNestObjectKeys<foo>;
