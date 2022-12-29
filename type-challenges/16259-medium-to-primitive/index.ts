// 判断是否为一个 object
type IsObject<T> = T extends Record<string | number | symbol, unknown> ? true : false;

// 转换为原始类型
type ToPrimitiveType<T> = T extends number ? number : T extends boolean ? boolean : T extends string ? string : unknown;

type ToPrimitive<T> = {
  [Key in keyof T]: IsObject<T[Key]> extends true ? ToPrimitive<T[Key]> : ToPrimitiveType<T[Key]>;
};

type X = {
  name: 'Tom';
  age: 30;
  married: false;
  addr: {
    home: '123456';
    phone: '13111111111';
  };
};

type Expected = {
  name: string;
  age: number;
  married: boolean;
  addr: {
    home: string;
    phone: string;
  };
};
type Todo = ToPrimitive<X>; // should be same as `Expected`
type a = Todo['addr'];
