type RequiredKeys<T, Key extends keyof T = keyof T> = Key extends keyof T
  ? T[Key] extends Required<T>[Key]
    ? Key
    : never
  : never;

type Result = RequiredKeys<{ foo: number; bar?: string; boo: string }>;

export { RequiredKeys };
