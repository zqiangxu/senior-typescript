// 向数组中填满指定长度的0元素
type FillRepeatZeroArray<N extends number, Arr extends any[] = []> = Arr['length'] extends N
  ? Arr
  : FillRepeatZeroArray<N, [0, ...Arr]>;

type A1 = FillRepeatZeroArray<1>; // [0]
type A2 = FillRepeatZeroArray<2>; // [0,0]

type Fibonacci<
  N extends number,
  Fibs extends number[] = [1],
  CurrentFibs extends number[] = [0],
  PrevFibs extends number[] = []
> = Fibs['length'] extends N
  ? CurrentFibs['length']
  : // [1, ...Fibs] 用于索引 + 1
    // 更新两个临时的 Fibs . 通过合并数组的长度来表示加法
    Fibonacci<N, [1, ...Fibs], [...CurrentFibs, ...PrevFibs], CurrentFibs>;

type Result1 = Fibonacci<3>; // 2
type Result2 = Fibonacci<8>; // 21
type Result3 = Fibonacci<4>; // 3
type Result4 = Fibonacci<2>; // 1
type Result5 = Fibonacci<7>; // 13
type Result6 = Fibonacci<9>; // 34
type Result7 = Fibonacci<1>; // 1

export { Fibonacci };
