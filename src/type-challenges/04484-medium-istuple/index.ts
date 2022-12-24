type IsTuple<T> = [T] extends [never]
  ? false
  : T extends readonly any[]
  ? // 如果是元组，则 T['length'] 返回的是固定的数组大小，数组则返回的是 number
    number extends T['length']
    ? false
    : true
  : false;

type case1 = IsTuple<[number]>; // true
type case2 = IsTuple<readonly [number]>; // true
type case3 = IsTuple<number[]>; // false
type case4 = IsTuple<never>; // false

export { IsTuple };
