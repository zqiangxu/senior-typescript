
/**
 * 检测字符串是否以指定的后缀结束
 * 使用 ${string} 代替任意的字符串
 * @version 1.0.0
 */ 
type EndsWith<T extends string, U extends string> = T extends `${string}${U}` ? true : false;

type R1 = EndsWith<'abc', 'bc'>; // true
type R2 = EndsWith<'abc', 'abc'>; // true
type R3 = EndsWith<'abc', 'd'>; // false
type R4 = EndsWith<'', ''>; // false

export { EndsWith };
