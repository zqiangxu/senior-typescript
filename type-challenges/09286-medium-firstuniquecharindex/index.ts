import { IndexOf } from 'type-challenges/05153-medium-indexof';

type StringToArray<T extends string, Result extends any[] = []> = T extends `${infer First}${infer D}`
  ? StringToArray<D, [...Result, First]>
  : Result;

// 创建一个临时的 TempArray . 只是为了记录当前递归的数组索引
type FirstUniqueCharIndex<T extends string, TempArray extends any[] = []> = T extends `${infer First}${infer Rest}`
  ? // 在后面的元素中查找.
    IndexOf<StringToArray<Rest>, First> extends -1
    ? // 这里再往前找一找
      IndexOf<TempArray, First> extends -1
      ? // 如果没有找到.返回结果即可
        TempArray['length']
      : // 否则继续递归下一个元素
        FirstUniqueCharIndex<Rest, [...TempArray, First]>
    : FirstUniqueCharIndex<Rest, [...TempArray, First]>
  : -1;

type R1 = FirstUniqueCharIndex<'leetcode'>; // 0
type R2 = FirstUniqueCharIndex<'loveleetcode'>; // 2
type R3 = FirstUniqueCharIndex<'aabb'>; // -1
type R4 = FirstUniqueCharIndex<''>; // -1
type R5 = FirstUniqueCharIndex<'aabbc'>; // 4
type R6 = FirstUniqueCharIndex<'a'>; // 0

export { FirstUniqueCharIndex };
