type IsArray<T> = T extends any[] ? true : false;

type Flatten<T extends any[]> = T extends [infer D, ...infer F]
  ? D extends any[]
    ? [...Flatten<D>, ...Flatten<F>]
    : [D, ...Flatten<F>]
  : [];

type flatten = Flatten<[1, 2, [3, 4], [[[5]]], [6, 7], [8]]>;

export { Flatten };
