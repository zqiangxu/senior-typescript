// 数字转字符串
type NumberToString<T extends number | bigint> = `${T}`;

type StringA = NumberToString<12>;

export { NumberToString };
