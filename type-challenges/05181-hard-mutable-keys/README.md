Implement the advanced util type MutableKeys, which picks all the mutable (not readonly) keys into a union.

For example:

```ts
type Keys = MutableKeys<{ readonly foo: string; bar: number }>;
// expected to be “bar”
```
