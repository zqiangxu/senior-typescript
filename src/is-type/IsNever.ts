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

export { IsNever };
