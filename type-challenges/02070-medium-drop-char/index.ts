type DropChar<T extends string, U extends string> = T extends `${infer D}${infer F}`
  ? D extends U
    ? DropChar<F, U>
    : `${D}${DropChar<F, U>}`
  : '';

type DropCharResult = DropChar<'butter fly!', ''>;
type DropCharResult2 = DropChar<'butter fly!', ' '>;
type DropCharResult3 = DropChar<'butter fly!', '!'>;
type DropCharResult4 = DropChar<'    butter fly!        ', ' '>;
type DropCharResult5 = DropChar<' b u t t e r f l y ! ', ' '>;
type DropCharResult6 = DropChar<' b u t t e r f l y ! ', 'b'>;
type DropCharResult7 = DropChar<' b u t t e r f l y ! ', 't'>;

export { DropChar };
