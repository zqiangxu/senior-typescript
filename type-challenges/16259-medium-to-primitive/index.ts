// 判断是否为一个 object
type IsObject<T> = T extends Record<string | number | symbol, unknown> ? true : false;

// 判断是否为一个数组
type IsArray<T> = T extends any[] ? true : false;

type IA1 = IsArray<[]>;
type IA2 = IsArray<[1, 2]>;
type IA3 = IsArray<1>;
type ToArrayPrimitiveType<T extends any[]> = T extends [infer First, ...infer Rest]
  ? [ToPrimitiveType<First>, ...ToArrayPrimitiveType<Rest>]
  : [];

// 转换为原始类型
type ToPrimitiveType<T> = T extends number ? number : T extends boolean ? boolean : T extends string ? string : unknown;

type ToPrimitive<T> = {
  [Key in keyof T]: IsObject<T[Key]> extends true
    ? ToPrimitive<T[Key]>
    : T[Key] extends any[]
    ? ToArrayPrimitiveType<T[Key]>
    : ToPrimitiveType<T[Key]>;
};

type X = {
  name: 'Tom';
  age: 30;
  married: false;
  addr: {
    home: '123456';
    phone: '13111111111';
  };
  hobbies: ['sing', 'dance'];
};

type Todo = ToPrimitive<X>; // should be same as `Expected`
type a = Todo['addr'];
