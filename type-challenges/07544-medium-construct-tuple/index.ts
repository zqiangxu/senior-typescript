type ConstructTuple<N extends number, Result extends unknown[] = []> = Result['length'] extends N
  ? Result
  : ConstructTuple<N, [...Result, unknown]>;

type result = ConstructTuple<2>; // expect to be [unknown, unknown]
type result2 = ConstructTuple<0>;
type result3 = ConstructTuple<999>['length'];

export { ConstructTuple };
