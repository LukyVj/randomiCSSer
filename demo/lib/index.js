(function(global, factory) {
    if (typeof module === "object" && typeof module.exports === "object") factory(exports);
    else if (typeof define === "function" && define.amd) define([
        "exports"
    ], factory);
    else if (global = typeof globalThis !== "undefined" ? globalThis : global || self) factory(global.index = {});
})(this, function(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    Object.defineProperty(exports, "default", {
        enumerable: true,
        get: ()=>_default
    });
    const randomCSSVariable = ({ variable ='random' , unit ='' , amount =3 , target =typeof window === 'undefined' ? null : document.querySelector('body') , range ={
        min: 1,
        max: 100,
        round: false
    }  })=>{
        const root = target;
        const ALL_VARS = [];
        const VARIABLE = variable;
        const UNIT = unit;
        const AMOUNT = amount;
        const value = (min, max, round)=>{
            const delta = max - min;
            const rand = round ? Math.round(min + Math.random() * delta) : min + Math.random() * delta;
            return rand;
        };
        const generate = ({ length , dom  })=>{
            Array.from({
                length
            }).map((_, index)=>{
                const VAR_NAME = `--${VARIABLE}-${index}`;
                const VAR_VALUE = `${value(range.min || 1, range.max || 100, range.round || true)}${UNIT}`;
                ALL_VARS.push(`{"${VAR_NAME}":${VAR_VALUE}}`);
                if (root && dom) {
                    root.style.setProperty(`${VAR_NAME}`, `${VAR_VALUE}`);
                }
            });
        };
        const load = (dom)=>{
            generate({
                length: AMOUNT,
                dom: dom === false ? false : true
            });
        };
        const getVars = (i)=>{
            load(false);
            const result = i ? ALL_VARS[i] : ALL_VARS.join(',');
            return JSON.parse(`[${result}]`);
        };
        return {
            load,
            getVars
        };
    };
    const _default = randomCSSVariable;
});
