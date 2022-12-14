# RandomiCSSer

RadomiCSSer is a small utility function that will create CSS variables with random values.

From CSS art, to experiments, we all need random values sometimes. With this utility function you can create random CSS variables and use them in your CSS or JS.

## Installation

```bash
npm i randomicsser
```

## Usage

### With HTML

```html
<!DOCTYPE html>

<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>RandomiCSSer</title>
    <script src="https://unpkg.com/randomicsser"></script>
  </head>

  <body>
    <div id="app"></div>
    <script>
      randomCSSVariable({
        target: document.querySelector('#app'),
        amount: 10,
        unit: 'px',
        variable: 'random',
        range: {
          round: true,
          min: 100,
          max: 300,
        },
      }).load();
    </script>
  </body>
</html>
```

### With React

### Client code

```js
const App = () => {
  randomCSSVariable({
    target: document.querySelector('body'),
    amount: 10,
    unit: 'px',
    variable: 'random',
    range: {
      round: true,
      min: 100,
      max: 300,
    },
  }).load();

  return (
    <div>
      {Array.from({ length: 5 }).map((item, index) => (
        <div
          style={{
            width: '100px',
            height: `var(--random-${index})`,
            background: 'red',
          }}
        />
      ))}
    </div>
  );
};
```

### With Node

```js
import randomCSSVariable from '../lib/index.js';
import fs from 'fs';

const randCSS = randomCSSVariable({
  amount: 10,
  range: {
    min: 1,
    max: 100,
  },
}).getVars();

fs.writeFileSync('./demo/randomicsser.json', JSON.stringify(randCSS), null, 2);
```
