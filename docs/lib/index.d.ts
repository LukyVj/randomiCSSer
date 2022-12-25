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
declare const randomCSSVariable: (opts?: RandomCSSVariableProps | RandomCSSVariableProps[]) => {
    load: (dom?: boolean) => void;
    getVars: (count?: number) => string;
    getVarsJSON: () => any;
};
export default randomCSSVariable;
