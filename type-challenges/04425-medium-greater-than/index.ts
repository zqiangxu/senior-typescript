// 比较简单，维护一个数组，比较一次则往数组中增加一个元素，先匹配到T 则表示  T < U，否则 T >= U
type GreaterThan<T extends number, U extends number, TArray extends any[] = [0]> = TArray['length'] extends T
  ? false
  : TArray['length'] extends U
  ? true
  : GreaterThan<T, U, [0, ...TArray]>;

type G1 = GreaterThan<2, 1>; //should be true
type G2 = GreaterThan<1, 1>; //should be false
type G3 = GreaterThan<10, 100>; //should be false
type G4 = GreaterThan<111, 11>; //should be true

export { GreaterThan };
