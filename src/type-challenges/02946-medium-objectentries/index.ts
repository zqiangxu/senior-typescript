type OmitUndefined<T> = T extends [undefined] ? undefined : T extends undefined ? never : T;

type ObjectEntries<T, Key = keyof T> = Key extends keyof T ? [Key, OmitUndefined<T[Key]>] : never;

interface Model {
  name: string;
  age: number;
  locations: string[] | null;
}

interface Student {
  name?: string;
  age: undefined;
}

type modelEntries = ObjectEntries<Model>;
type modelEntries1 = ObjectEntries<Student>;

export { ObjectEntries, OmitUndefined };
