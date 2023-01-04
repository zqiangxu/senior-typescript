type StringToUnion<T extends string> = T extends `${infer First}${infer Rest}` ? First | StringToUnion<Rest> : never;
type Numbers = StringToUnion<'0123456789'>;

// 去掉多余的0.
type TrimZero<T extends string | never> = T extends `${infer First}${infer Rest}`
  ? First extends '0'
    ? TrimZero<Rest>
    : T
  : T;

type T1 = TrimZero<'0012'>;
type T2 = TrimZero<'10012'>;
type T3 = TrimZero<'12'>;
type T4 = TrimZero<'0000'>;

type StringToNumberString<
  T extends string,
  Result extends string | never = never
> = T extends `${infer First}${infer Rest}`
  ? // 如果是 Number
    First extends Numbers
    ? StringToNumberString<Rest, `${[Result] extends [never] ? `${First}` : `${Result}${First}`}`>
    : Result
  : Result;

type N1 = StringToNumberString<'ABC'>;
type N2 = StringToNumberString<'0'>;
type N3 = StringToNumberString<'5'>;
type N4 = StringToNumberString<'12'>;
type N5 = StringToNumberString<'27'>;
type N6 = StringToNumberString<'18@7_$%'>;
type N7 = StringToNumberString<'27.12'>;
type N8 = StringToNumberString<'012'>;
type N9 = StringToNumberString<'000012'>;
type N10 = StringToNumberString<'0000.12'>;

type StringToIntNumberString<T extends string> = TrimZero<StringToNumberString<T>>;
type NI1 = StringToIntNumberString<'ABC'>;
type NI2 = StringToIntNumberString<'0'>;
type NI3 = StringToIntNumberString<'5'>;
type NI4 = StringToIntNumberString<'12'>;
type NI5 = StringToIntNumberString<'27'>;
type NI6 = StringToIntNumberString<'18@7_$%'>;
type NI7 = StringToIntNumberString<'27.12'>;
type NI8 = StringToIntNumberString<'012'>;
type NI9 = StringToIntNumberString<'000012'>;
type NI10 = StringToIntNumberString<'0000.12'>;

// 通过数组转成数字
type ToNumber<T extends string, Result extends any[] = [], NT = StringToIntNumberString<T>> = [NT] extends [never]
  ? never
  : NT extends ''
  ? 0
  : `${Result['length']}` extends NT
  ? Result['length']
  : ToNumber<T, [...Result, 1]>;

type TN1 = ToNumber<'ABC'>;
type TN2 = ToNumber<'0'>;
type TN3 = ToNumber<'5'>;
type TN4 = ToNumber<'12'>;
type TN5 = ToNumber<'27'>;
type TN6 = ToNumber<'18@7_$%'>;
type TN7 = ToNumber<'27.12'>;
type TN8 = ToNumber<'012'>;
type TN9 = ToNumber<'000012'>;
type TN10 = ToNumber<'0000.12'>;
type TN11 = ToNumber<'A19'>;

export { ToNumber };
