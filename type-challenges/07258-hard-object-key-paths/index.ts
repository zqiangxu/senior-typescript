// 没太大意义的题目，兼容数组即可
type ObjectKeyPaths<T, PropertyBasePath extends string = '', Key extends keyof T = keyof T> = Key extends
  | string
  | number
  ?
      | `${PropertyBasePath}${Key}`
      // 兼容数组写法
      | (T extends any[] ? `${PropertyBasePath}[${Key}]` : never)
      // 如果是一个 对象. 数组也是继承 object
      | (T[Key] extends object
          ? // 加上根节点和自己的属性
            ObjectKeyPaths<T[Key], `${PropertyBasePath}${Key}.`>
          : never)
  : never;

type Book = { name: string; price: number };

type T1 = ObjectKeyPaths<{ name: string; age: number }>; // expected to be 'name' | 'age'

type T2 = ObjectKeyPaths<{
  refCount: number;
  person: { name: string; age: number };
}>; // expected to be 'refCount' | 'person' | 'person.name' | 'person.age'
type T3 = ObjectKeyPaths<{ books: [{ name: string; price: number }] }>; // expected to be the superset of 'books' | 'books.0' | 'books[0]' | 'books.[0]' | 'books.0.name' | 'books.0.price' | 'books.length' | 'books.find'
type T4 = ObjectKeyPaths<{ 1: number; fox: number; books: [{ name: string }] }>;

type IsObj = Book extends object ? true : false;
type IsObj2 = [Book] extends object ? true : false;

export { ObjectKeyPaths };
