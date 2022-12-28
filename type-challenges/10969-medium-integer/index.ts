let x = 1;
let y = 1 as const;

// 判断是否为一个真实的数字，number extends T 过滤掉本身类型为 number 的类型，因为 1 extends number = true, 但是 number extends 1 = false
type IsRealNumber<T> = number extends T ? false : T extends number ? true : false;
type IR1 = IsRealNumber<typeof x>;
type IR2 = IsRealNumber<typeof y>;
type IR3 = IsRealNumber<1>;
type IR4 = IsRealNumber<1.0>;
type IR5 = IsRealNumber<'1.0'>;
type IR6 = IsRealNumber<true>;

type Integer<T extends number> = IsRealNumber<T> extends true
  ? `${T}` extends `${infer TruncNumber}.${infer Suffix}`
    ? `${Suffix}` extends '0'
      ? true
      : false
    : true
  : false;

type R1 = Integer<1>;
type R2 = Integer<1.1>;
type R3 = Integer<1.0>;
type R4 = Integer<typeof x>;
type R5 = Integer<typeof y>;
type R6 = Integer<1.12>;

export { Integer };
