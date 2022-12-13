interface RandomCSSVariableProps {
  variable?: string;
  unit?: string;
  amount?: number;
  target?: {
    container: string;
  };
  range?: {
    min: number;
    max: number;
    round: boolean;
  };
}

export const randomCSSVariable = ({
  variable = 'random',
  unit = '',
  amount = 3,
  target = {
    container: 'body',
  },
  range = {
    min: 1,
    max: 100,
    round: false,
  },
}: RandomCSSVariableProps) => {
  const root = document.querySelector(target.container) as HTMLElement;

  const ALL_VARS: string[] = [];
  const VARIABLE = variable;
  const UNIT = unit;
  const AMOUNT = amount;
  const RANGE = range;

  const value = (min: number, max: number, round: boolean) => {
    const delta = min - max;
    const rand = round ? Math.round(min + Math.random() * delta) : min + Math.random() * delta;

    return rand;
  };
  const generate = ({ length = AMOUNT, name = VARIABLE, particle = UNIT }) => {
    Array.from({ length }).map((_, index) => {
      const VAR_NAME = `--${name}-${index}`;
      const VAR_VALUE = `${value(RANGE.min, RANGE.max, RANGE.round)}${particle}`;
      ALL_VARS.push(`${VAR_NAME}:${VAR_VALUE}`);

      if (root) {
        root.style.setProperty(`${VAR_NAME}`, `${VAR_VALUE}`);
      }
    });
  };

  const load = () => {
    generate({ length: AMOUNT, name: VARIABLE, particle: UNIT });
  };

  const getVars = (i: number | null) => {
    load();
    return i ? ALL_VARS[i] : ALL_VARS.join(';');
  };

  return { load, getVars };
};
