interface Todo1 {
  title: string;
  description?: string;
  completed: boolean;
}

interface Todo2 {
  readonly title: string;
  description?: string;
  completed: boolean;
}

// type MyReadonly2<T, U extends keyof T = keyof T> =
//   | {
//       [K in Exclude<keyof T, U>]: T[K];
//     } & {
//       readonly [K in U]: T[K];
//     };

// 简化写法

/* 如果是默认的没有加参数. 则默认为所有 key 值 */
type MyReadonly2<T, U extends keyof T = keyof T> = Omit<T, U> & {
  readonly [K in U]: T[K];
};

type Result1 = MyReadonly2<Readonly<Todo1>>;
type Result2 = MyReadonly2<Todo1, 'title' | 'description'>;
type Result3 = MyReadonly2<Todo2, 'title'>;

const todo: Result2 = {
  title: 'Hey',
  description: 'foobar',
  completed: false,
};

// @ts-expect-error
todo.title = 'Hello';

// @ts-expect-error
todo.description = 'barFoo';

// ok
todo.completed = true;

export { MyReadonly2 };
