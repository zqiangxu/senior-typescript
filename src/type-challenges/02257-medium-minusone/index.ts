// 维持 B 数组比 A 数组少一个
type MinusOne<T extends number, A extends any[] = [1], B extends any[] = []> = A['length'] extends T
  ? B['length']
  : // 增加一个元素
    MinusOne<T, [...A, 1], [...B, 1]>;

type Zero = MinusOne<1>; // 0

type FiftyFour = MinusOne<55>; // 54
