/**
 * 检测字符串是否以指定的前缀开始
 * 使用 ${string} 来代表任意的字符串
 * @version 1.0.0
 */
type BestStartsWith<T extends string, U extends string> = T extends `${U}${string}` ? true : false;

type R1 = BestStartsWith<'abc', 'ac'>; // false
type R2 = BestStartsWith<'abc', 'ab'>; // true
type R3 = BestStartsWith<'abc', 'abcd'>; // false
type R4 = BestStartsWith<'', any>; // false

export { BestStartsWith };
