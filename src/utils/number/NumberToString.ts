/**
 * 数字转字符串
 * @version 1.0.0
 * @description 通过模板字符串可以把数字、boolean 等转字符串
 */ 
type NumberToString<T extends number | bigint> = `${T}`;

type StringA = NumberToString<12>; // 12
type StringB = NumberToString<12.120>; // 12.12
type StringC = NumberToString<12.1201>; // 12.1201

export { NumberToString };
