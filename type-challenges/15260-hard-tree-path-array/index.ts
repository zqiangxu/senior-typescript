type Path<T, Paths extends (string | number)[] = [], Key extends keyof T = keyof T> = Key extends string | number
  ? [...Paths, Key] | (T[Key] extends object ? Path<T[Key], [...Paths, Key]> : [...Paths, Key])
  : never;

declare const example: {
  foo: {
    bar: {
      a: string;
    };
    baz: {
      b: number;
      c: number;
    };
  };
};

type R1 = Path<typeof example['foo']['bar']>;
type R2 = Path<typeof example['foo']['baz']>;
type R3 = Path<typeof example['foo']>;
type R4 = Path<typeof example['foo']['bar']>;
type R5 = Path<typeof example>;

export { Path };
