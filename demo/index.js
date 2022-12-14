//Node.js demo of randomiCSSer

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
