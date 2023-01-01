interface Todo2 {
  title: string;
  description: string;
}

type MyReadonly<T> = {
  readonly [K in keyof T]: T[K];
};

const todo: MyReadonly<Todo2> = {
  title: 'Hey',
  description: 'foobar',
};

// @ts-expect-error
todo.title = '12';

export { MyReadonly };
