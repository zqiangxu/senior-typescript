type GetOptional<T> = {
  [Key in keyof T as T[Key] extends Required<T>[Key] ? never : Key]: T[Key];
};

type I = GetOptional<{ foo: number; bar?: string }>; // expected to be { bar?: string }

export { GetOptional };
