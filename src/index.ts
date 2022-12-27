export interface RandomCSSVariableProps {
  /** The name of the CSS variable */
  variable?: string;
  /** The unit of the CSS variable */
  unit?: string;
  /** The amount of CSS variables */
  count?: number;
  /** The target element to apply the CSS variables */
  target?: HTMLBodyElement | null;
  /** The range of the CSS variable */
  range?: {
    /** The minimum value of the CSS variable */
    min?: number;
    /** The maximum value of the CSS variable */
    max?: number;
    /** Should the value be rounded */
    round?: boolean;
  };
  /** The values of the CSS variable */
  values?: any[];
}

/**
 * It generates random CSS variables and applies them to the DOM
 * @param {RandomCSSVariableProps | RandomCSSVariableProps[]} opts - RandomCSSVariableProps |
 * RandomCSSVariableProps[] = {
 * @returns A function that returns an object with two methods: load and getVars.
 */
const randomCSSVariable = (
  opts: RandomCSSVariableProps | RandomCSSVariableProps[] = {
    count: 3,
    variable: 'random',
    unit: '',
    range: {
      min: 1,
      max: 100,
      round: false,
    },
    target: typeof window === 'undefined' ? null : document.querySelector('body'),
    values: undefined,
  },
) => {
  const IS_ARRAY = Array.isArray(opts);
  const options = IS_ARRAY ? opts : [opts];
  const GLOBAL_VARS: string[] = [];

  /**
   * It returns a random number between a minimum and maximum value, or a random value from an array of
   * values
   * @param {number} min - The minimum value of the range
   * @param {number} max - The maximum value of the range.
   * @param {boolean} round - boolean - if true, the random number will be rounded to the nearest integer
   * @param {number} index - The index of the current iteration.
   * @returns A random number between min and max.
   */
  const value = (min: number, max: number, round: boolean, index: number) => {
    const VALUES = IS_ARRAY ? opts[index].values : opts.values;

    if (VALUES && VALUES.length > 0) {
      const randomIndex: number = Math.floor(Math.random() * VALUES.length);
      const randomValue = VALUES[randomIndex];
      return randomValue as any;
    } else {
      const delta = max - min;
      const rand = round ? Math.round(min + Math.random() * delta) : min + Math.random() * delta;
      return rand;
    }
  };

  /**
   * It generates a random number, then assigns it to a CSS variable
   * @param  - `count` - The count of random variables to generate.
   */
  const generate = ({
    count = 3,
    variable = 'random',
    unit = '',
    range = {
      min: 1,
      max: 100,
      round: false,
    },
    target = typeof window === 'undefined' ? null : document.querySelector('body'),
    dom,
    index,
  }: RandomCSSVariableProps & { dom: boolean; index: number }) => {
    const root = target;
    const VAR_GROUP_VALUE: { [x: string]: string | number }[] = [];
    const VAR_GROUP = { [variable as string]: VAR_GROUP_VALUE };

    // Pre-compute the length of the loop to avoid re-computing it on every iteration
    const length = count!;

    for (let i = 0; i < length; i++) {
      const VAR_NAME = count === 1 ? `--${variable}` : `--${variable}-${i}`;
      const VAR_VALUE: string | number = unit
        ? `${value(range!.min!, range!.max!, range!.round!, index)}${unit}`
        : value(range!.min!, range!.max!, range!.round!, index);

      VAR_GROUP_VALUE.push({
        [VAR_NAME as string]: VAR_VALUE as string | number,
      });
      if (root && dom) {
        root.style.setProperty(`${VAR_NAME}`, `${VAR_VALUE}`);
      }
    }

    GLOBAL_VARS.push(JSON.stringify(VAR_GROUP));
  };

  /**
   * It takes an array of options, and for each option, it generates a new variable
   * @param {boolean} [dom] - boolean - whether or not to generate the DOM elements.
   */
  const load = (dom?: boolean) => {
    for (let i = 0; i < options.length; i++) {
      const option = options[i];
      generate({
        count: option.count,
        variable: option.variable,
        unit: option.unit,
        range: option.range,
        target: option.target,
        values: option.values,
        dom: dom === false ? false : true,
        index: i,
      });
    }
  };

  /**
   * It returns a string of all the global variables in the current scope
   * @returns A string of the global variables.
   */
  const getVars = (count?: number) => {
    load(false);

    let varStr = '';

    for (const group of GLOBAL_VARS) {
      const groupObj = JSON.parse(group);
      const groupValues = Object.values(groupObj);
      const groupValue = (groupValues[0] as any).slice(0, count);

      for (const val of groupValue) {
        const valueKeys = Object.keys(val);
        const valueValues = Object.values(val);
        const valueKey = valueKeys[0];
        const valueValue = valueValues[0];

        varStr += `${valueKey}: ${valueValue};`;
      }
    }

    // Avoid calling the load function if it is not necessary
    if (GLOBAL_VARS.length === 0) {
      load(false);
    }

    let result = '[';
    for (let i = 0; i < GLOBAL_VARS.length; i++) {
      result += GLOBAL_VARS[i];
      if (i !== GLOBAL_VARS.length - 1) {
        result += ',';
      }
    }
    result += ']';

    return {
      css: varStr,
      json: JSON.parse(result),
    };
  };

  return { load, getVars };
};

export default randomCSSVariable;
