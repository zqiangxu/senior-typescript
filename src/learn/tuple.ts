const arr = [1, 2, 3, 'tuple'] as const;

// => 1 | 2 | 3 | 'tuple'
type elements = typeof arr[number];

export {};
