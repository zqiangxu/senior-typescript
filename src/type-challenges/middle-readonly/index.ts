interface MyReadonly2Todo1 {
  title: string;
  description?: string;
  completed: boolean;
}

interface MyReadonly2Todo2 {
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

type MyReadonly2Result1 = MyReadonly2<Readonly<MyReadonly2Todo1>>;
type MyReadonly2Result2 = MyReadonly2<MyReadonly2Todo1, 'title' | 'description'>;
type MyReadonly2Result3 = MyReadonly2<MyReadonly2Todo2, 'title'>;

const myReadonly2Todo: MyReadonly2Result2 = {
  title: 'Hey',
  description: 'foobar',
  completed: false,
};

// 错误，不能修改只读的 title
myReadonly2Todo.title = 'Hello';
// 错误，不能修改只读的 description
myReadonly2Todo.description = 'barFoo';
// 没问题
myReadonly2Todo.completed = true;
