type GetRequired<T> = {
  [Key in keyof T as T[Key] extends Required<T>[Key] ? never : Key]: T[Key];
};
type I = GetRequired<{ foo: number; bar?: string }>;

type TestIsOptional1 = { bar?: string };
type TestIsOptional2 = { bar: string };

// string | undefined => false
type R1 = TestIsOptional1['bar'] extends string ? true : false;
// string => true
type E2 = TestIsOptional2['bar'] extends string ? true : false;

// string | undefined => false
type R3 = TestIsOptional1['bar'] extends Required<TestIsOptional1>['bar'] ? true : false;
// string => true
type E4 = TestIsOptional2['bar'] extends Required<TestIsOptional2>['bar'] ? true : false;

export { GetRequired };
