type ControlsMap = {
  s: string;
  d: number;
};

type Format<T extends string> = T extends `${string}%${infer Control}${infer Rest}`
  ? // 判断是否属于 ControlsMap
    Control extends keyof ControlsMap
    ? (n: ControlsMap[Control]) => Format<Rest>
    : Format<Rest>
  : string;

type FormatCase1 = Format<'%sabc'>; // FormatCase1 : string => string
type FormatCase2 = Format<'a%sbc'>; // FormatCase2 : string => string
type FormatCase3 = Format<'a%dbc'>; // FormatCase3 :  (d1: number) => string
type FormatCase4 = Format<'a%%dbc'>; // FormatCase4 :  string
type FormatCase5 = Format<'a%dbc%s'>; // (d1: number) => (s1: string) => string>
type FormatCase6 = Format<'a%%%dbc'>; // (d1: number) => string>
