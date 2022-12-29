// 这个方法出题并不严谨, 测试用例也没有考虑到边界情况，所以只能以满足测试用例为条件编写了

// 判断是否为一个 object
type IsObject<T> = T extends Record<string | number | symbol, unknown> ? true : false;

// 判断是否为一个数组
type IsArray<T> = T extends any[] ? true : false;

type IA1 = IsArray<[]>;
type IA2 = IsArray<[1, 2]>;
type IA3 = IsArray<1>;

// 转换数组中的元素为原始类型
type ToArrayPrimitiveType<T extends any[]> = T extends [infer First, ...infer Rest]
  ? [ToPrimitiveType<First>, ...ToArrayPrimitiveType<Rest>]
  : [];

// 转换为原始类型
type ToPrimitiveType<T> = T extends number
  ? number
  : T extends boolean
  ? boolean
  : T extends string
  ? string
  : T extends null
  ? null
  : T extends undefined
  ? undefined
  : never;

// 如果是一个对象
type ToPrimitive<T> = IsObject<T> extends true
  ? {
      // 遍历对象属性. 如果是一个数组, 则遍历数组的元素. 否则继续遍历当前属性值
      [Key in keyof T]: T[Key] extends any[] ? ToArrayPrimitiveType<T[Key]> : ToPrimitive<T[Key]>;
    }
  : ToPrimitiveType<T>;

type X = {
  name: 'Tom';
  age: 30;
  married: false;
  addr: {
    home: '123456';
    phone: '13111111111';
    hobbies: ['sing', 'dance'];
  };
  hobbies: ['sing', 'dance'];
};

type Todo = ToPrimitive<X>; // should be same as `Expected`
type a = Todo['addr'];
