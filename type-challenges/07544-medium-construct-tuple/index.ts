// 比较简单. 通过构建一个 Result 数组. 如果数组长度没有超过 N, 则往数组中追加一个 unknown 元素即可
type ConstructTuple<N extends number, Result extends unknown[] = []> = Result['length'] extends N
  ? Result
  : ConstructTuple<N, [...Result, unknown]>;

type result = ConstructTuple<2>; // expect to be [unknown, unknown]
type result2 = ConstructTuple<0>;
type result3 = ConstructTuple<999>['length'];

export { ConstructTuple };
