import { Equal } from './Equal';

/**
 * 判断两个对象是否不相等
 * @version 1.0.0
 */
type NotEqual<X, Y> = true extends Equal<X, Y> ? false : true;

type T1 = NotEqual<false, false>; // false
type T2 = NotEqual<true, false>; // true
type T3 = NotEqual<1, 1>; // false
type T4 = NotEqual<1, '1'>; // true
type T5 = NotEqual<any, any>; // false
type T6 = NotEqual<'1', '1'>; // false
type T7 = NotEqual<1, number>; // true
type T8 = NotEqual<number, number>; // false
type T9 = NotEqual<string, string>; // false
type T10 = NotEqual<{ a: string }, { a: string }>; // false !!!
type T11 = NotEqual<{ a: string }, { readonly a: string }>; // true !!!
type T12 = NotEqual<{ a?: string }, { a: string }>; // true !!!
type T13 = NotEqual<{ a?: string }, { a?: string }>; // false
type T14 = NotEqual<[1, 2, 3], [1, 2, 3]>; // false
type T15 = NotEqual<[1, 2, 3], [1, 2, 3, 4]>; // true
type T16 = NotEqual<[1, 2, 3, number], [1, 2, 3, number]>; // false
type T17 = NotEqual<[1, 2, 3, number, number], [1, 2, 3, number]>; // true
type T18 = NotEqual<1 | 2 | 3, 1 | 2 | 3>; // false
type T19 = NotEqual<never, 1 | 2 | 3 | never>; // true
type T20 = NotEqual<unknown, unknown>; // false
type T21 = NotEqual<never, never>; // false
type T22 = NotEqual<{ a: 1 }, any>; // true
type T23 = NotEqual<unknown, any>; // true
type T24 = NotEqual<never, any>; // true

type T30 = NotEqual<any, unknown & any>; // false
type T31 = NotEqual<any, 1 | any>; // false

export { NotEqual };
