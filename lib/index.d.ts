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
declare const randomCSSVariable: (opts?: RandomCSSVariableProps | RandomCSSVariableProps[]) => {
    load: (dom?: boolean) => void;
    getVars: (i?: number) => any;
};
export default randomCSSVariable;
