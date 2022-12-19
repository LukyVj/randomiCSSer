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
declare const randomCSSVariable: (opts?: RandomCSSVariableProps | RandomCSSVariableProps[]) => {
    load: (dom?: boolean) => void;
    getVars: (i?: number) => any;
};
export default randomCSSVariable;
