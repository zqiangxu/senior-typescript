type IsTrue<T extends true> = T;

// @ts-expect-error
type R1 = IsTrue<false>;
type R2 = IsTrue<true>;

export { IsTrue };
