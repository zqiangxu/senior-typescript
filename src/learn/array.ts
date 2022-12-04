type ArrayTuple = ['a', 'b'];

// type 的数组可以...遍历 => ['a', 'b']
type CopyArray = [...ArrayTuple];

const ArrayTuple = ['a', 'b'] as const;

// 如果是 const. 先用 typeof 转成 TS 类型 => ['a', 'b']
type CopiedArray = [...typeof ArrayTuple];
