import { Equal } from '@/utils/Equal';

/**
 * 判断是否为 Never 类型
 * @version 1.0.0
 */

type IncorrectIsNever<T> = T extends never ? true : false;

// never 类型无法直接判断

type T1 = IncorrectIsNever<never>; // never
type T2 = IncorrectIsNever<false>; // false
type T3 = IncorrectIsNever<number>; // false
type T4 = IncorrectIsNever<() => void>; // false
type T5 = IncorrectIsNever<typeof Promise>; // false
type T6 = IncorrectIsNever<string>; // false
type T7 = IncorrectIsNever<typeof WeakMap>; // false
type T8 = IncorrectIsNever<any>; // boolean
type T9 = IncorrectIsNever<unknown>; // false

type IsNever<T> = [T] extends [never] ? true : false;

type R1 = IsNever<never>; // true
type R2 = IsNever<false>; // false
type R3 = IsNever<number>; // false
type R4 = IsNever<() => void>; // false
type R5 = IsNever<typeof Promise>; // false
type R6 = IsNever<string>; // false
type R7 = IsNever<typeof WeakMap>; // false
type R8 = IsNever<any>; // false
type R9 = IsNever<unknown>; // false

// 我们还可以使用 utils/Equal 来判断
type IsEqualNever<T> = Equal<T, never>;

type E1 = IsEqualNever<never>; // true
type E2 = IsEqualNever<false>; // false
type E3 = IsEqualNever<number>; // false
type E4 = IsEqualNever<() => void>; // false
type E5 = IsEqualNever<typeof Promise>; // false
type E6 = IsEqualNever<string>; // false
type E7 = IsEqualNever<typeof WeakMap>; // false
type E8 = IsEqualNever<any>; // false
type E9 = IsEqualNever<unknown>; // false

export { IsNever, IsEqualNever };
