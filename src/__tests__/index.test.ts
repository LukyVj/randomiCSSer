import randomCSSVariable from '../index';
test('randomCSSVariable', () => {
  expect(randomCSSVariable).toBeDefined();
});

// is randomCSSVariable a function?
test('randomCSSVariable is a function', () => {
  expect(typeof randomCSSVariable).toBe('function');
});
// // does randomCSSVariable({variable:'test', count: 1, values: ['hello']}).getVars() returns an array?
// test('randomCSSVariable({variable:"test", count: 1, values: ["hello"]}).getVars() returns an array', () => {
//   expect(Array.isArray(randomCSSVariable({ variable: 'test', count: 1, values: ['1'] }).getVars())).toBe(true);
// });

// // does randomCSSVariable({variable:'test', count: 1, values: ['hello']}).getVars() returns "[{"should-have-2":[{"--should-have-2":"hello"}]}]"
// test('randomCSSVariable({variable:"test", count: 1, values: ["hello"]}).getVars() returns "[{"should-have-2":[{"--should-have-2":"hello"}]}]"', () => {
//   expect(randomCSSVariable({ variable: 'test', count: 1, values: ['hello'] }).getVars()).toEqual(
//     `[{"test": [{"--test": "hello"}]}]`.toString(),
//   );
// });
