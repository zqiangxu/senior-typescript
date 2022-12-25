type Fill<
  T extends readonly any[],
  FillNumber extends any,
  Start extends number = 0,
  End extends number = T['length'],
  Arr extends any[] = [],
  Flag extends boolean = false
> = T extends [infer First, ...infer Rest]
  ? // 如果元素个数 > End, 则重新填充数组中的元素
    Arr['length'] extends End
    ? Fill<Rest, FillNumber, Start, End, [...Arr, First], false>
    : // 如果元素个数>=Start. 则开始填 FillNumber
    Arr['length'] extends Start
    ? Fill<Rest, FillNumber, Start, End, [...Arr, FillNumber], true>
    : // 如果 Flag 为 true. 则继续填 FillNumber
    Flag extends true
    ? Fill<Rest, FillNumber, Start, End, [...Arr, FillNumber], Flag>
    : // 否则填写当前数组中的元素
      Fill<Rest, FillNumber, Start, End, [...Arr, First], false>
  : Arr;

type exp = Fill<[], 0>;
type exp1 = Fill<[1, 2, 3], 0>; // expected to be [0, 0, 0]
type exp2 = Fill<[1, 2, 3], 0, 0, 0>;
type exp3 = Fill<[1, 2, 3], 0, 2, 2>;
type exp4 = Fill<[1, 2, 3], true>;
type exp5 = Fill<[1, 2, 3], true, 0, 1>;
type exp6 = Fill<[1, 2, 3], true, 1, 3>;
type exp7 = Fill<[1, 2, 3], true, 10, 0>;
type exp8 = Fill<[1, 2, 3], true, 0, 10>;

export { Fill };
