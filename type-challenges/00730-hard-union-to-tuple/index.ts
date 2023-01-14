type ExtractValuesOfTuple<T extends any[]> = T[keyof T & number];

type Tuples<T extends any, Result extends any[] = []> = T extends any[] ? [...Result, ...T] : Result;

type T1 = Tuples<['a']>;
type T2 = Tuples<['a'] | ['b']>;

type UnionToTuple<T> = Tuples<T extends any ? [T] : never>;

type R1 = UnionToTuple<'a' | 'b'>['length']; // 2
type R2 = ExtractValuesOfTuple<UnionToTuple<'a' | 'b'>>; // 'a' | 'b'
type R3 = ExtractValuesOfTuple<UnionToTuple<'a'>>; // 'a'
type R4 = ExtractValuesOfTuple<UnionToTuple<any>>; // any
type R5 = ExtractValuesOfTuple<UnionToTuple<undefined | void | 1>>; // void | 1
type R6 = ExtractValuesOfTuple<UnionToTuple<any | 1>>; // any | 1
type R7 = ExtractValuesOfTuple<UnionToTuple<any | 1>>; // any
type R8 = ExtractValuesOfTuple<UnionToTuple<'d' | 'f' | 1 | never>>; // 'f' | 'd' | 1
type R9 = ExtractValuesOfTuple<UnionToTuple<[{ a: 1 }] | 1>>; // [{ a: 1 }] | 1
type R10 = ExtractValuesOfTuple<UnionToTuple<never>>; // never
type R11 = ExtractValuesOfTuple<UnionToTuple<'a' | 'b' | 'c' | 1 | 2 | 'd' | 'e' | 'f' | 'g'>>; // 'f' | 'e' | 1 | 2 | 'g' | 'c' | 'd' | 'a' | 'b'

export { UnionToTuple };
