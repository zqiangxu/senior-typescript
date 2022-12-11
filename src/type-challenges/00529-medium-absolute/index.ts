// 数字转字符串
type Absolute<T extends string | number | bigint> = `${T}` extends `${infer D}${infer E}`
  ? D extends '-'
    ? E
    : `${D}${E}`
  : T;

type Result1 = Absolute<0>;
type Result2 = Absolute<-0>;
type Result3 = Absolute<10>;
type Result4 = Absolute<-5>;
type Result5 = Absolute<'0'>;
type Result6 = Absolute<'-0'>;
type Result7 = Absolute<'-10.2'>;
type Result8 = Absolute<'-5'>;
type Result9 = Absolute<-1_000_000n>;
type Result10 = Absolute<9_999n>;
