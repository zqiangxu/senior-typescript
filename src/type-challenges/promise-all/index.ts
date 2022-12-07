type MyAwaited<T> = T extends Promise<infer D> ? D : T;

// 数组的 keyof 是索引
declare function PromiseAll<T extends readonly any[]>(options: T): { [index in keyof T]: MyAwaited<T[index]> };

const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise<string>((resolve, reject) => {
  setTimeout(resolve, 100, 'foo');
});

// expected to be `Promise<[number, 42, string]>`
const p = PromiseAll([promise1, promise2, promise3] as const);
