// 1 & T 当 T 为 any 的时候返回 any. 此时 0 extends any => true
// 1 & T，如果是非 any 类型，除非返回 0 | 包含0的union类型，否则只可能返回 false. 而这个不可能
// 当然 0 和 1 可以换成其它合理的值
type IsAny<T> = 0 extends 1 & T ? true : false;

/**
 * 判断是否为 any
 * @version 1.0.0
 */

// 任何一个类型都 extends any
type T1 = number extends any ? true : false; // true
type T2 = string extends any ? true : false; // true
type T3 = boolean extends any ? true : false; // true
type T4 = undefined extends any ? true : false; // true
type T5 = never extends any ? true : false; // true
type T6 = unknown extends any ? true : false; // true

// 任何一个类型 & any 都为 any
type A1 = number & any; // any
type A2 = string & any; // any
type A3 = boolean & any; // any
type A4 = undefined & any; // any
type A5 = never & any; // any
type A6 = unknown & any; // any

type B1 = number & string; // never
type B2 = string & string; // number
type B3 = (number | string) & string; // string

type R1 = IsAny<Boolean>;
type R2 = IsAny<string>;
type R3 = IsAny<number>;
type R4 = IsAny<unknown>;
type R5 = IsAny<string | number>;
type R6 = IsAny<0 | 1>;
type R7 = IsAny<any>;

export { IsAny };
