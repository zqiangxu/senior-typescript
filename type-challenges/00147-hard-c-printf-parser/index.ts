type ControlsMap = {
  c: 'char';
  s: 'string';
  d: 'dec';
  o: 'oct';
  h: 'hex';
  f: 'float';
  p: 'pointer';
};

type SignControlsMap<T> = {
  [key in keyof ControlsMap as `%${key}`]: key extends keyof T ? T[key] : never;
};

type Controls = SignControlsMap<ControlsMap>;

type ParsePrintFormat<T extends string> = T extends `${string}%${infer Sub}`
  ? // 取出匹配子串的第一个字母
    Sub extends `${infer First}${infer Rest}`
    ? // 判断第一个字母是否在 ControlsMap 中.
      First extends keyof ControlsMap
      ? // 如果在，继续匹配子串
        [ControlsMap[First], ...ParsePrintFormat<Rest>]
      : // 否则匹配完整的子串
        ParsePrintFormat<Sub>
    : []
  : [];

type P1 = ParsePrintFormat<''>;
type P2 = ParsePrintFormat<'Any string.'>;
type P3 = ParsePrintFormat<'The result is %d.'>;
type P4 = ParsePrintFormat<'The result is %%d.'>;
type P5 = ParsePrintFormat<'The result is %%%d.'>;
type P6 = ParsePrintFormat<'The result is %f.'>;
type P7 = ParsePrintFormat<'The result is %h.'>;
type P8 = ParsePrintFormat<'The result is %q.'>;
type P9 = ParsePrintFormat<'Hello %s: score is %d.'>;
type P10 = ParsePrintFormat<'The result is %'>;
