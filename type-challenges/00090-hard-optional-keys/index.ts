type OptionalKeys<T, Key extends keyof T = keyof T> = Key extends keyof T
  ? T[Key] extends Required<T>[Key]
    ? never
    : Key
  : never;

type Result = OptionalKeys<{ foo: number; bar?: string; boo: string }>;

export { OptionalKeys };
