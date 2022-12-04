interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type MyPick<T, U extends keyof T> = {
  [key in U]: T[key];
};

type TodoPreview = MyPick<Todo, 'title' | 'completed'>;

const Demo: TodoPreview = {
  title: 'title',
  completed: true,
};
