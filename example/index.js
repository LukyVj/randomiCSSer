export const randomCSSVariable = ({ variable = 'random', unit = '', amount = 3, target = {
    container: 'body',
}, range = {
    min: 1,
    max: 100,
    round: false,
}, }) => {
    const root = document.querySelector(target.container);
    const ALL_VARS = [];
    const VARIABLE = variable;
    const UNIT = unit;
    const AMOUNT = amount;
    const RANGE = range;
    const value = (min, max, round) => {
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
    const getVars = (i) => {
        load();
        return i ? ALL_VARS[i] : ALL_VARS.join(';');
    };
    return { load, getVars };
};
