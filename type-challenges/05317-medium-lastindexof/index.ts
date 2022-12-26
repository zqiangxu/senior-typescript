// 遍历数组.
type LastIndexOf<T extends readonly any[], Element, IndexArray extends any[] = []> = T extends [
  ...infer Rest,
  infer End
]
  ? // 如果查找的指定的元素. 则返回索引数组的长度
    End extends Element
    ? Rest['length']
    : // 否则继续从后面的元素中进行查找
      LastIndexOf<Rest, Element>
  : // 没有找到，返回 -1
    -1;

type Res1 = LastIndexOf<[1, 2, 3, 2, 1], 2>; // 3
type Res2 = LastIndexOf<[0, 0, 0], 2>; // -1

export { LastIndexOf };
