// 遍历数组. 使用一个临时的 IndexArray. 用于表示当前的遍历数组的索引位置
type IndexOf<T extends readonly any[], Element, IndexArray extends any[] = []> = T extends [infer First, ...infer Rest]
  ? // 如果查找的指定的元素. 则返回索引数组的长度
    First extends Element
    ? IndexArray['length']
    : // 否则继续从后面的元素中进行查找，此时 IndexArray 长度增加1
      IndexOf<Rest, Element, [1, ...IndexArray]>
  : // 没有找到，返回 -1
    -1;

type Res = IndexOf<[1, 2, 3], 2>; // expected to be 1
type Res1 = IndexOf<[2, 6, 3, 8, 4, 1, 7, 3, 9], 3>; // expected to be 2
type Res2 = IndexOf<[0, 0, 0], 2>; // expected to be -1

export { IndexOf };
