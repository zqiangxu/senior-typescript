interface Todo {
  title: string;
  description: string;
}

type Readonly<T> = {
  readonly [K in keyof T]: T[K];
};

const todo: Readonly<Todo> = {
  title: 'Hey',
  description: 'foobar',
};

// @ts-expect-error
todo.title = '12';

export { Readonly };
