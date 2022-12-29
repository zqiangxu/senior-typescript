// 同样很简单的一道题. 遍历数组即可
type Filter<T extends readonly any[], Predicate> = T extends [infer First, ...infer Rest]
  ? // 如果满足条件，则加入到结果数组中
    First extends Predicate
    ? [First, ...Filter<Rest, Predicate>]
    : Filter<Rest, Predicate>
  : [];

type Falsy = false | 0 | '' | null | undefined;

type F1 = Filter<[0, 1, 2], 2>;
type F2 = Filter<[0, 1, 2], 0 | 1>;
type F3 = Filter<[0, 1, 2], Falsy>;

export { Filter };
