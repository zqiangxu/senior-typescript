type OmitKeys<T, U, Key = keyof T> = Key extends keyof T ? (T[Key] extends U ? never : Key) : never;

type OmitByType<T, U> = {
  [Key in OmitKeys<T, U>]: T[Key];
};

type Boo = {
  name: string;
  count: number;
  isReadonly: boolean;
  isEnable: boolean;
};

type OmitKeysRes = OmitKeys<Boo, boolean>;

type OmitBoolean = OmitByType<Boo, boolean>; // { name: string; count: number }

export { OmitByType, OmitKeys };
