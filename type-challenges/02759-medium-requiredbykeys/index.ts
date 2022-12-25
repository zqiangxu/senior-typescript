interface User {
  name?: string;
  age?: number;
  address?: string;
}

interface UserRequiredName {
  name: string;
  age?: number;
  address?: string;
}

interface UserRequiredNameAndAge {
  name: string;
  age: number;
  address?: string;
}

type RequiredByKeys<T, U extends keyof T = keyof T> = Omit<T, U> & {
  [Key in U extends keyof T ? U : never]: Key extends keyof T ? T[Key] : never;
};

type R1 = RequiredByKeys<User, 'name'>;
type R2 = RequiredByKeys<User, 'name' | 'age'>;
type R3 = RequiredByKeys<User>;

// @ts-expect-error
type R4 = RequiredByKeys<User, 'name' | 'unknown'>;

export { RequiredByKeys };
