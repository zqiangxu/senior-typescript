import { IsAny } from "./IsAny";

/**
 * 判断是否为 Function 类型
 * @version 1.0.0
 */
type IsFunction<T> = IsNever<T> extends true ? false : IsAny<T> extends true ? false : T extends Function ? true : false;

type F1 = IsFunction<{}>; // false
type F2 = IsFunction<() => void>; // true
type F3 = IsFunction<number>; // false 
type F4 = IsFunction<string>; // false
type F5 = IsFunction<never>; // never
type F6 = IsFunction<unknown>; // false
type F7 = IsFunction<typeof setTimeout>; // true
type F8 = IsFunction<typeof Promise>; // true 
type F9 = IsFunction<any>; // false
type F10 = IsFunction<(a: number, b: number) => void>; // true
type F11 = IsFunction<Promise<unknown>>; // false

export { IsFunction }