interface RandomCSSVariableProps {
  /** The name of the CSS variable */
  variable?: string;
  /** The unit of the CSS variable */
  unit?: string;
  /** The amount of CSS variables */
  amount?: number;
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
