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

const randomCSSVariable = (opts: RandomCSSVariableProps | RandomCSSVariableProps[]) => {
  const options = Array.isArray(opts) ? opts : [opts];
  const GLOBAL_VARS: string[] = [];

  const value = (min: number, max: number, round: boolean) => {
    const delta = max - min;
    const rand = round ? Math.round(min + Math.random() * delta) : min + Math.random() * delta;

    return rand;
  };
  const generate = ({ amount, variable, unit, range, target, dom }: RandomCSSVariableProps & { dom: boolean }) => {
    const root = target;
    let VAR_GROUP_VALUE: Array<{ [x: string]: string | number }> = [];
    let VAR_GROUP = { [variable as string]: VAR_GROUP_VALUE };
    let ALL_VARS: string[] = [];

    Array.from({ length: amount! }).map((_, index) => {
      const VAR_NAME = `--${variable}-${index}`;
      const VAR_VALUE: string | number = unit
        ? `${value(range!.min!, range!.max!, range!.round!)}${unit}`
        : value(range!.min!, range!.max!, range!.round!);

      VAR_GROUP_VALUE.push({ [VAR_NAME as string]: VAR_VALUE as string | number });
      if (root && dom) {
        root.style.setProperty(`${VAR_NAME}`, `${VAR_VALUE}`);
      }
    });

    ALL_VARS.push(JSON.stringify(VAR_GROUP));
    GLOBAL_VARS.push(ALL_VARS.join(','));
  };

  const load = (dom?: boolean) => {
    options.map(
      ({
        variable = 'random',
        unit = '',
        amount = 3,
        target = typeof window === 'undefined' ? null : document.querySelector('body'),
        range = {
          min: 1,
          max: 100,
          round: false,
        },
      }) => {
        generate({
          amount,
          variable,
          unit,
          range,
          target,
          dom: dom === false ? false : true,
        });
      },
    );
  };

  const getVars = (i?: number) => {
    load(false);
    const result = i ? GLOBAL_VARS[i] : GLOBAL_VARS.join(',');
    return JSON.parse(`[${result}]`);
  };

  return { load, getVars };
};

export default randomCSSVariable;
