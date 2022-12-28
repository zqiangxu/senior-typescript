type GetMiddleElement<
  T extends readonly any[],
  Rest extends readonly any[] = T,
  TempArray extends any[] = []
> = Rest extends [infer First, ...infer Rest]
  ? // 补一个, 如果长度等于 T['length']. 说明是奇数个, 返回 First 即可
    [...TempArray, 1]['length'] extends T['length']
    ? [First]
    : // 如果补两个相等，说明是偶数个，返回 [First, Rest[0]]
    [...TempArray, 1, 1]['length'] extends T['length']
    ? [First, Rest[0]]
    : // 否则继续第一个下个元素，并追加两个临时元素
      GetMiddleElement<T, Rest, [...TempArray, 1, 1]>
  : [];

type simple1 = GetMiddleElement<[1, 2, 3, 4, 5]>; // expected to be [3]
type simple2 = GetMiddleElement<[1, 2, 3, 4, 5, 6]>; // expected to be [3, 4]
type simple3 = GetMiddleElement<[1, 2, 3, 4]>; // expected to be [2, 3]
type simple4 = GetMiddleElement<[1, 2, 3]>; // expected to be [2]
type simple5 = GetMiddleElement<[1, 2]>; // expected to be [1, 2]
type simple6 = GetMiddleElement<[1]>; // expected to be [1]
type simple7 = GetMiddleElement<[never]>;
type simple8 = GetMiddleElement<[() => string, () => number]>;
