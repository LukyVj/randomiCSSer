# RandomiCSSer

RadomiCSSer is a small utility function that will create CSS variables with random values.

From CSS art, to experiments, we all need random values sometimes. With this utility function you can create random CSS variables and use them in your CSS or JS.
[Demo](https://lukyvj.github.io/randomiCSSer/demo/)

## Docs

[Exports](docs/modules.md)

## Installation

```bash
npm i randomicsser
```

## Usage

In order to be able to use the variables in your CSS, you need to load them first. You can do this by calling the `load` method.

Then, you'll find the variables in your CSS, right onto your `target` element.
If the target prop isn't filled, it will default on the `body`.

By default, you'll see this on the body:

```html
<body
  style="
    --random-0:235;
    --random-1:247;
    --random-2:153;
    --random-3:295;
    --random-4:71;
    --random-5:219;
    --random-6:41;
    --random-7:101;
    --random-8:249;
    --random-9:142;
    "
></body>
```

### With HTML

```html
<!DOCTYPE html>

<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>RandomiCSSer</title>
  </head>

  <body>
    <div id="app"></div>
    <script type="module">
      import randomCSSVariable from 'https://unpkg.com/randomicsser@1.0.4';

      randomCSSVariable({
        variable: 'random',
        unit: '',
        count: 10,
        range: { min: 1, max: 300, round: true },
      }).load();
    </script>
  </body>
</html>
```

### With React

{% raw %}

```js
const App = () => {
  randomCSSVariable({
    target: document.querySelector('body'),
    count: 10,
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

{% endraw %}

### With Node

```js
import randomCSSVariable from '../lib/index.js';
import fs from 'fs';

const randCSS = randomCSSVariable({
  count: 10,
  range: {
    min: 1,
    max: 100,
  },
}).getVars();

fs.writeFileSync('./demo/randomicsser.json', JSON.stringify(randCSS), null, 2);
```

### Demo 
https://lukyvj.github.io/randomiCSSer/demo/
