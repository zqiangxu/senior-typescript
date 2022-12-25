type Trunc<T extends number | string> = `${T}` extends `${infer Value}.${infer Suffix}` ? Value : `${T}`;

type T1 = Trunc<0.1>;
type T2 = Trunc<1.234>;
type T3 = Trunc<12.345>;
type T4 = Trunc<-5.1>;
type T5 = Trunc<'1.234'>;
type T6 = Trunc<'-10.234'>;
type T7 = Trunc<10>;

export { Trunc };
