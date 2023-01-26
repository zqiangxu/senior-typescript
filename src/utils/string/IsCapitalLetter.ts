import { StringToTuple } from "./StringToTuple";

/**
 * 判断是否为大写字母
 * @version 1.0.0
 */
type CapitalLetter = StringToTuple<'ABCDEFGHIJKLMNOPQRSTUVWXYZ'>;
type IsCapitalLetter<T extends string> = T extends CapitalLetter[number] ? true : false;

type R1 = IsCapitalLetter<'S'>; // true
type R2 = IsCapitalLetter<'s'>; // false
type R3 = IsCapitalLetter<'String'>; // false
type R4 = IsCapitalLetter<'STRING'>; // true

export { IsCapitalLetter };
