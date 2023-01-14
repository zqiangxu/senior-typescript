type Mod<
  T extends unknown[],
  N extends number,
  A extends unknown[] = [1],
  B extends unknown[] = [1]
> = B['length'] extends T['length']
  ? A['length'] extends N
    ? true
    : false
  : A['length'] extends N
  ? Mod<T, N, [1], [1, ...B]>
  : Mod<T, N, [1, ...A], [1, ...B]>;

type M1 = Mod<[1, 1, 1], 3>;
type M2 = Mod<[1, 1, 1, 1, 1], 5>;
type M3 = Mod<[1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 5>;

type Output<T extends unknown[]> = Mod<T, 3> extends true
  ? Mod<T, 5> extends true
    ? 'FizzBuzz'
    : 'Fizz'
  : Mod<T, 5> extends true
  ? 'Buzz'
  : T['length'];

type FizzBuzz<T extends number, Arr extends unknown[] = [1]> = Arr['length'] extends T
  ? [Output<Arr>]
  : [Output<Arr>, ...FizzBuzz<T, [...Arr, 1]>];

type F1 = FizzBuzz<23>;
type F2 = FizzBuzz<5>;

export { FizzBuzz };
