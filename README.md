# RandomiCSSer

### With node

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
