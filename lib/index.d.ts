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
declare const randomCSSVariable: (opts: RandomCSSVariableProps | RandomCSSVariableProps[]) => {
    load: (dom?: boolean) => void;
    getVars: (i?: number) => any;
};
export default randomCSSVariable;
