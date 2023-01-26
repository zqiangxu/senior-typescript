import { StringToTuple } from './StringToTuple';

/**
 * 将字符串转换为 union
 * @version 1.0.0
 * @description 需要处理下 any 和 never. any 和 never 返回 never 
 */
type StringToUnion<T extends string> = StringToTuple<T>[number];

type R1 = StringToUnion<'string'>; // "s" | "t" | "r" | "i" | "n" | "g"
type R2 = StringToUnion<'foo'>; // "f" | "o"
type R3 = StringToUnion<''>; // never
type R4 = StringToUnion<never>; // never
type R5 = StringToUnion<any>; // never
type R6 = StringToUnion<string>; // never
type R7 = StringToUnion<'string' | 'union'>; // "s" | "t" | "r" | "i" | "n" | "g" | "o" | "u"
type R8 = StringToUnion<'string' | 'union' | never>; //  "s" | "t" | "r" | "i" | "n" | "g" | "o" | "u"
type R9 = StringToUnion<'string' | 'union' | any>; // never 

export { StringToUnion };
