interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

// 'title' | 'description' | 'completed'
type keys = keyof Todo;

const key: keys = 'title';
