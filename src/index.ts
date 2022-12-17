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
}

const randomCSSVariable = ({
  variable = 'random',
  unit = '',
  amount = 3,
  target = typeof window === 'undefined' ? null : document.querySelector('body'),
  range = {
    min: 1,
    max: 100,
    round: false,
  },
}: RandomCSSVariableProps) => {
  const root = target;

  const ALL_VARS: string[] = [];
  const VARIABLE = variable;
  const UNIT = unit;
  const AMOUNT = amount;

  const value = (min: number, max: number, round: boolean) => {
    const delta = max - min;
    const rand = round ? Math.round(min + Math.random() * delta) : min + Math.random() * delta;

    return rand;
  };
  const generate = ({ length, dom }: { length: number; dom: boolean }) => {
    Array.from({ length }).map((_, index) => {
      const VAR_NAME = `--${VARIABLE}-${index}`;
      const VAR_VALUE = `${value(range.min || 1, range.max || 100, range.round as boolean)}${UNIT}`;
      ALL_VARS.push(`{"${VAR_NAME}":"${VAR_VALUE}"}`);
      if (root && dom) {
        root.style.setProperty(`${VAR_NAME}`, `${VAR_VALUE}`);
      }
    });
  };

  const load = (dom?: boolean) => {
    generate({
      length: AMOUNT,
      dom: dom === false ? false : true,
    });
  };

  const getVars = (i?: number) => {
    load(false);
    const result = i ? ALL_VARS[i] : ALL_VARS.join(',');
    return JSON.parse(`[${result}]`);
  };

  return { load, getVars };
};

export default randomCSSVariable;
