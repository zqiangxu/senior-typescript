// 数组可以直接通过 ... 遍历. 把它当做正常的语法即可
type Concat<T extends any[], U extends any[]> = [...T, ...U];

type Result = Concat<[1], [2, 3, 4]>;

export { Concat };
