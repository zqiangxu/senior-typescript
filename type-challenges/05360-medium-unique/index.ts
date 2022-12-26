// 遍历数组. 使用一个临时的 IndexArray. 用于表示当前的遍历数组的索引位置
type IndexOf<T extends readonly any[], Element, IndexArray extends any[] = []> = T extends [infer First, ...infer Rest]
  ? // 如果查找的指定的元素. 则返回索引数组的长度
    First extends Element
    ? IndexArray['length']
    : // 否则继续从后面的元素中进行查找，此时 IndexArray 长度增加1
      IndexOf<Rest, Element, [1, ...IndexArray]>
  : // 没有找到，返回 -1
    -1;

type Unique<T extends readonly any[], Result extends any[] = []> = T extends [infer First, ...infer Rest]
  ? // 如果当前元素不存在 Result 中，则存入到 Result 中
    IndexOf<Result, First> extends -1
    ? Unique<Rest, [...Result, First]>
    : // 否则直接递归下一个子序列
      Unique<Rest, Result>
  : Result;

type Res = Unique<[1, 1, 2, 2, 3, 3]>; // expected to be [1, 2, 3]
type Res1 = Unique<[1, 2, 3, 4, 4, 5, 6, 7]>; // expected to be [1, 2, 3, 4, 5, 6, 7]
type Res2 = Unique<[1, 'a', 2, 'b', 2, 'a']>; // expected to be [1, "a", 2, "b"]
type Res3 = Unique<[string, number, 1, 'a', 1, string, 2, 'b', 2, number]>; // expected to be [string, number, 1, "a", 2, "b"]
type Res4 = Unique<[unknown, unknown, any, any, never, never]>; // expected to be [unknown, any, never]

export { Unique };
