/**
 * 有点难理解，可以参考
 * @see https://github.com/type-challenges/type-challenges/blob/main/utils/index.d.ts
 */
type Equal<X, Y> = (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y ? 1 : 2 ? true : false;

type T1 = Equal<false, false>; // true
type T2 = Equal<true, false>; // false
type T3 = Equal<1, 1>; // true
type T4 = Equal<1, '1'>; // false
type T5 = Equal<any, any>; // true
type T6 = Equal<'1', '1'>; // true
type T7 = Equal<1, number>; // false
type T8 = Equal<number, number>; // true
type T9 = Equal<string, string>; // true
type T10 = Equal<{ a: string }, { a: string }>; // true !!!
type T11 = Equal<{ a: string }, { readonly a: string }>; // false !!!
type T12 = Equal<{ a?: string }, { a: string }>; // false !!!
type T13 = Equal<{ a?: string }, { a?: string }>; // true
type T14 = Equal<[1, 2, 3], [1, 2, 3]>; // true
type T15 = Equal<[1, 2, 3], [1, 2, 3, 4]>; // false
type T16 = Equal<[1, 2, 3, number], [1, 2, 3, number]>; // true
type T17 = Equal<[1, 2, 3, number, number], [1, 2, 3, number]>; // false
type T18 = Equal<1 | 2 | 3, 1 | 2 | 3>; // true
type T19 = Equal<never, 1 | 2 | 3 | never>; // false
type T20 = Equal<unknown, unknown>; // true
type T21 = Equal<never, never>; // true
type T22 = Equal<{ a: 1 }, any>; // false

type T30 = Equal<any, unknown & any>; // true
type T31 = Equal<any, 1 | any>; // true

export { Equal };
