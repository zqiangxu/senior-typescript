Create a type-safe string join utility which can be used like so:

```js
const hyphenJoiner = join('-');
const result = hyphenJoiner('a', 'b', 'c'); // = 'a-b-c'
```

Or alternatively:

```js
join('#')('a', 'b', 'c'); // = 'a#b#c'
```

When we pass an empty delimiter (i.e '') to join, we should concat the strings as they are, i.e:

```js
join('')('a', 'b', 'c'); // = 'abc'
```

When only one item is passed, we should get back the original item (without any delimiter added):

```js
join('-')('a'); // = 'a'
```
