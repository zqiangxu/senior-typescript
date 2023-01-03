// T & string => 如果为 string, 返回 string, 为 any 返回 any. 其它返回 never
type IsAny<T> = string extends T & string
  ? // 可能为 any ，可能为 string, 排除掉 string 本身
    T extends string
    ? false
    : true
  : false;

type T1 = number extends any ? true : false; // true
type T2 = string extends any ? true : false; // true
type T3 = boolean extends any ? true : false; // true
type T4 = undefined extends any ? true : false; // true
type T5 = never extends any ? true : false; // true
type T6 = unknown extends any ? true : false; // true

type A1 = number & any; // any
type A2 = string & any; // any
type A3 = boolean & any; // any
type A4 = undefined & any; // any
type A5 = never & any; // any
type A6 = unknown & any; // any

type B1 = number & string; // never
type B2 = string & string; // number

type R1 = IsAny<Boolean>;
type R2 = IsAny<string>;
type R3 = IsAny<number>;
type R4 = IsAny<unknown>;

export { IsAny };
