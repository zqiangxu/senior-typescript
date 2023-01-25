type IsFalse<T extends false> = T;

type R1 = IsFalse<false>;
// @ts-expect-error
type R2 = IsFalse<true>;

export { IsFalse };