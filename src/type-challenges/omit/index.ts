interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type MyExclude2<T, U> = T extends U ? never : T;

// 属性内部仍然可以使用泛型
type MyOmit<T, U extends keyof T> = {
  [Key in MyExclude2<keyof T, U>]: T[Key];
  // [Key in Exclude<keyof T, U>]: T[Key];
};

type OmitResult1 = MyOmit<Todo, 'description'>;
type OmitResult2 = MyOmit<Todo, 'description' | 'completed'>;

// @ts-expect-error
type OmitResult3 = MyOmit<Todo, 'description' | 'invalid'>;
