// 很简单的一道题. 遍历数组即可
type All<T extends readonly any[], Element> = T extends [infer First, ...infer Rest]
  ? First extends Element
    ? // 如果相同. 继续比对下一个元素
      All<Rest, Element>
    : // 有一个不相同则直接退出
      false
  : true;

type A1 = All<[1, 1, 1], 1>;
type A2 = All<[1, 1, 2], 1>;
type A3 = All<['1', '1', '1'], '1'>;
type A4 = All<['1', '1', '1'], 1>;
type A5 = All<[number, number, number], number>;
type A6 = All<[number, number, string], number>;
type A7 = All<[null, null, null], null>;
type A8 = All<[[1], [1], [1]], [1]>;
type A9 = All<[{}, {}, {}], {}>;

export { All };
