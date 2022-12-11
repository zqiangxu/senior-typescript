function throwMyException() {
  throw new Error('MyException');
}

throwMyException();
console.log('hello world'); // not exception

export {};
