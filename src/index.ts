/**
 * RandomCSSVariable
 * @version#version#
 * @license MIT
 * @author @LukyVj
 * @url https://github.com/LukyVj/randomicsser
 *
 * ------------------------------
 *
 * @name randomCSSVariable
 * @description Generate random CSS variables
 * @param {object} opts
 * @param {string} opts.variable - The name of the CSS variable
 * @param {string} opts.unit - The unit of the CSS variable
 * @param {number} opts.amount - The amount of CSS variables to generate
 * @param {object} opts.range - The range of the CSS variable
 * @param {number} opts.range.min - The minimum value of the CSS variable
 * @param {number} opts.range.max - The maximum value of the CSS variable
 * @param {boolean} opts.range.round - Whether to round the CSS variable
 * @param {HTMLElement} opts.target - The target element to apply the CSS variable
 * @param {array} opts.values - The values of the CSS variable
 * @returns {object} - The CSS variable
 *
 */

interface RandomCSSVariableProps {
  variable?: string;
  unit?: string;
  amount?: number;
  target?: HTMLBodyElement | null;
  range?: {
    min?: number;
    max?: number;
    round?: boolean;
  };
  values?: any[];
}

const randomCSSVariable = (
  opts: RandomCSSVariableProps | RandomCSSVariableProps[] = {
    amount: 3,
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

  const generate = ({
    amount = 3,
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
    const ALL_VARS: string[] = [];

    Array.from({ length: amount! }).map((_, idx) => {
      const VAR_NAME = amount === 1 ? `--${variable}` : `--${variable}-${idx}`;
      const VAR_VALUE: string | number = unit
        ? `${value(range!.min!, range!.max!, range!.round!, index)}${unit}`
        : value(range!.min!, range!.max!, range!.round!, index);

      VAR_GROUP_VALUE.push({
        [VAR_NAME as string]: VAR_VALUE as string | number,
      });
      if (root && dom) {
        root.style.setProperty(`${VAR_NAME}`, `${VAR_VALUE}`);
      }

      return null;
    });

    ALL_VARS.push(JSON.stringify(VAR_GROUP));
    GLOBAL_VARS.push(ALL_VARS.join(','));
  };

  const load = (dom?: boolean) => {
    options.map(({ variable, unit, amount, target, range, values }, index: number) => {
      generate({
        amount,
        variable,
        unit,
        range,
        target,
        values,
        dom: dom === false ? false : true,
        index,
      });
    });
  };

  const getVars = (i?: number) => {
    load(false);
    const result = i ? GLOBAL_VARS[i] : GLOBAL_VARS.join(',');
    return JSON.parse(`[${result}]`);
  };

  return { load, getVars };
};

export default randomCSSVariable;
